//Form to enter Education details
//used antd forms since I am familiar with their components
import React, {useState, useEffect} from 'react';
import { useDispatch } from 'react-redux';
import * as actions from '../redux/actions/index';
import { Form, Input, Button, Select, AutoComplete, DatePicker, InputNumber } from 'antd';
import {degrees, fields, gradeScales} from '../Utils/Utils'
import axios from 'axios'
import {Box} from "../Utils/StyledComponents"
import Editor from './TextEditor'
import { Notify } from '../Utils/Notification'

const { RangePicker } = DatePicker;
type dateType = string|undefined;
interface Props {
   handleCloseModal:() => void
}

const ModalForm = ({ handleCloseModal}:Props) => {
   const [options, setOptions] = useState<{ value: string }[]>([]);
   const [date, setDate] = useState<dateType[]>([]);
   const [gradeRequired, setGradeRequired] = useState(false);
   const [maxGradeRequired, setMaxGradeRequired] = useState(false);
   const [maxGrade, setMaxGrade] = useState(0);
   const [desc, setDesc] = useState({})
   
   const dispatch = useDispatch();

   useEffect(() => {
      onSearch("")
   },[])

   let timer;
   const onSearch = (searchText: string) => {
      let timeout = searchText === "" ? 0:500
      clearTimeout(timer);
      timer = setTimeout(() => {
         axios.get("http://universities.hipolabs.com/search?name=" + searchText)
         .then(res => {
            setOptions(res.data.slice(0, 10).map((item, i) => ({ value: item.name, key: i })))
         })
         .catch(err => console.log(err))
      }, timeout);
   };

   const onFinish = values => {
      let startDate = values.date[0].format("MM/DD/YY");
      let endDate = values.date[1].format("MM/DD/YY");
      let edu = { 
         ...values, 
         description: desc, 
         grade: (values.grade && values["max grade"]) ? values.grade + "/" + values["max grade"] : "", 
         startDate: startDate !== "undefined" ? startDate : "", 
         endDate: endDate !== "undefined" ? endDate : "" 
      }
      dispatch(actions.addEducation(edu))
      Notify("Education added successfully!","", "success")
      handleCloseModal()
   };

   const onFinishFailed = errorInfo => {
      Notify("Fill all required fields","", "warn")
   };

   const [form] = Form.useForm();
   useEffect(() => {
      form.validateFields(['grade','max grade']);
   }, [gradeRequired, maxGradeRequired]);


   return (
      <Form
         name="education"
         onFinish={onFinish}
         onFinishFailed={onFinishFailed}
         layout="vertical"
         form={form}
      >
         <Form.Item
            label="University"
            name="university"
            rules={[{ required: true, message: 'Please input your University!' },{message:"Enter valid University name", max:50}]}
            style={{ margin: 10 }}
         >
            <AutoComplete
               options={options}
               style={{ width: "100%" }}
               onSearch={onSearch}
               placeholder="Enter College here"
               notFoundContent="Couldnt find university"
            />
         </Form.Item>

         <Form.Item
            label="Location"
            name="location"
            rules={[{ required: true, message: 'Please input your location!' }, { message: "Enter City and State", max: 50 }]}
            style={{ margin: 10 }}
         >
            <Input placeholder="Enter Location" />
         </Form.Item>

         <Box>
            <Form.Item
               label="Degree/Major"
               name="degree"
               rules={[{ required: true, message: 'Please select your Degree!' }]}
               style={{ margin: 10, width:"100%" }}
            >
               <Select>
                  {degrees.map((deg,i) => <Select.Option key={i} value={deg}>{deg}</Select.Option>)}
               </Select>
            </Form.Item>

            <Form.Item
               label="Field of Study"
               name="field"
               rules={[{ required: true, message: 'Please input your Field!' }]}
               style={{ margin: 10, width: "100%" }}
            >
               <Select>
                  {fields.map((field, i) => <Select.Option key={i} value={field}>{field}</Select.Option>)}
               </Select>
            </Form.Item>
         </Box>

         <Box>
            <Form.Item
               label="Enter Duration"
               name="date"
               rules={[{ required: true, message:'Please select date!'}]}
               style={{ margin: 10, flex:2 }}
            >
               <RangePicker 
                  style={{width:"100%"}}
                  onChange={val => { setDate([val?.[0]?.format(),val?.[1]?.format()])}}
               />
            </Form.Item>

            <Form.Item
               label="Enter Grade"
               name="grade"
               rules={[{ required: gradeRequired, message: 'Please input your Grade!' }]}
               style={{ margin: 10, flex:1 , marginRight:0, width:'100%'}}
            >
               <InputNumber 
                  placeholder="Obtained Grade" 
                  onChange={val => setMaxGradeRequired(!(val === "" || val === 0 || val === null))}
                  max={maxGrade}
                  min={0}
                  style={{ width:'100%'}}
               />
            </Form.Item>
            <Form.Item
               label="Max Grade"
               name="max grade"
               rules={[{ required: maxGradeRequired, message: 'Please input your Grade!'}]}
               style={{ margin: 10, flex:1 , marginLeft:0}}
            >
               <Select allowClear onChange={val => {setMaxGrade(val?parseFloat(val.toString()):0);setGradeRequired(val ? true : false)}}>
                  {gradeScales.map((grade,i) => <Select.Option value={grade} key={i}>{parseFloat(grade.toString()).toPrecision(3)}</Select.Option>)}
               </Select>
            </Form.Item>

         </Box>

         <Form.Item
            label="Description - (write a short summary of your experiences)"
            name="description"
            style={{ margin: 10 }}
         >
            <Editor setDesc={setDesc}/>
         </Form.Item>

         <Form.Item 
            style={{ margin: 10 }}
         >
            <Button type="primary" htmlType="submit">
               Submit
            </Button>
         </Form.Item>
      </Form>
   )
}

export default ModalForm;