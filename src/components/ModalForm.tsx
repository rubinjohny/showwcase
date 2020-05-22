import React, {useState, useEffect} from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux'
import { edu } from '../types/index';
import * as actions from '../redux/actions/index';
import { Form, Input, Button, Select, AutoComplete, DatePicker, InputNumber } from 'antd';
import {degrees, fields, gradeScales} from '../Utils/Utils'
import axios from 'axios'
import {Box,Text} from "../Utils/StyledComponents"
import Editor from './TextAreaInput'

const { RangePicker } = DatePicker;
type dateType = string|undefined;
interface Props {
   setModalValues: ({}) => void
   addEducation: (edu: edu) => void
   handleCloseModal:() => void
}
const ModalForm = ({ setModalValues, addEducation, handleCloseModal}:Props) => {
   const [options, setOptions] = useState<{ value: string }[]>([]);
   const [date, setDate] = useState<dateType[]>([]);
   const [gradeRequired, setGradeRequired] = useState(false);
   const [maxGradeRequired, setMaxGradeRequired] = useState(false);
   const [maxGrade, setMaxGrade] = useState(0);
   const [descJson, setDescJson] = useState({})

   let timer;
   const onSearch = (searchText: string) => {
      clearTimeout(timer);
      timer = setTimeout(() => {
         axios.get("http://universities.hipolabs.com/search?name=" + searchText)
         .then(res => {
            setOptions(searchText ? res.data.slice(0, 10).map((item, i) => ({ value: item.name, key: i })) : [])
         })
         .catch(err => console.log(err))
      }, 500);
   };

   const onFinish = values => {
      console.log('Success:', {...values,description:descJson});
      setModalValues({ ...values, description: descJson })

      let startDate = values.date[0].format("MM/DD/YY");
      let endDate = values.date[1].format("MM/DD/YY");

      addEducation({ ...values, description: descJson, grade: (values.grade && values["max grade"]) ?  values.grade + "/" + values["max grade"]:"", startDate: startDate != "undefined" ? startDate:"", endDate: endDate != "undefined" ? endDate : ""});
      handleCloseModal()
   };

   const onFinishFailed = errorInfo => {
         
      console.log('Failed:', errorInfo);
   };

   const [form] = Form.useForm();
   useEffect(() => {
      form.validateFields(['grade','max grade']);
   }, [gradeRequired, maxGradeRequired]);

   return (
      <Form
         name="education"
         initialValues={{ remember: true }}
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
               <Select onChange={(val) => console.log(val)}>
                  {degrees.map((deg,i) => <Select.Option key={i} value={deg}>{deg}</Select.Option>)}
               </Select>
            </Form.Item>

            <Form.Item
               label="Field of Study"
               name="field"
               rules={[{ required: true, message: 'Please input your Field!' }]}
               style={{ margin: 10, width: "100%" }}
            >
               <Select onChange={(val) => console.log(val)}>
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
                  onChange={val => {console.log("val = ", val);setMaxGradeRequired(!(val == "" || val == 0 || val == null))}} 
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
               <Select allowClear onChange={val => {console.log("select val = ",val); setMaxGrade(val?parseFloat(val.toString()):0);setGradeRequired(val ? true : false)}}>
                  {gradeScales.map((grade,i) => <Select.Option value={grade} key={i}>{parseFloat(grade.toString()).toPrecision(3)}</Select.Option>)}
               </Select>
            </Form.Item>

         </Box>

        

         <Form.Item
            label="Description - (write a short summary of your experiences)"
            name="description"
            style={{ margin: 10 }}
         >
            <Editor setDescJson={setDescJson}/>
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

function mapDispatchToProps(dispatch: Dispatch<actions.add_education>) {
   return {
      addEducation: (data: edu) => dispatch(actions.addEducation(data)),
   }
}

export default connect(state => state, mapDispatchToProps)(ModalForm);