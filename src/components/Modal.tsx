import React, {useState} from 'react';
import ReactModal from 'react-modal';
import styled, {keyframes } from 'styled-components'
import { AutoComplete, Input, DatePicker } from 'antd';
import { Box, BlueButton, Button, Text}  from './StyledComponents'
import axios from 'axios'
import { connect } from 'react-redux';
import { Dispatch } from 'redux'
import { edu } from '../types/index';
import * as actions from '../actions/index';

const fadeIn = keyframes`
   0% {
      opacity: .5;
   }
   100% {
      opacity: 1;
   }
`;

const Styles = {
   overlay: {
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: 'rgba(50, 50, 50, .8)',
   },
   content: {
      position: 'absolute',
      top: '100px',
      left: '30%',
      right: '30%',
      bottom: '100px',
      background: '#fff',
      overflow: 'auto',
      WebkitOverflowScrolling: 'touch',
      borderRadius: '4px',
      outline: 'none',
   }
}

const StyledReactModal = styled(ReactModal)`
  animation: ${fadeIn} 0.5s linear;
`;
interface Props {
   showModal:boolean;
   handleCloseModal:() => void
   addEducation:(edu:edu) => void
}
const Modal = ({showModal, handleCloseModal, addEducation}:Props) => {
   let timer;
   const [name, setName] = useState('');
   const [location, setLocation] = useState('');
   const [degree, setDegree] = useState('');
   const [field, setField] = useState('');
   const [grade, setGrade] = useState('');
   const [startDate, setStartDate] = useState("");
   const [endDate, setEndDate] = useState("");
   const [startDateset,startDateSetTrue] = useState(false);
   const [endDateset,endDateSetTrue] = useState(false);
   const [options, setOptions] = useState<{ value: string }[]>([]);
   const [description, setDescription] = useState('');

   const onSearch = (searchText: string) => {
      clearTimeout(timer);
      timer = setTimeout(() => {
         axios.get("http://universities.hipolabs.com/search?name="+searchText)
         .then(res => {
            setOptions(searchText ? res.data.slice(0, 10).map((item, i) => ({ value: item.name, key: i })):[])
         })
         .catch(err => console.log(err))
      }, 500);
   };

   const clearStates = () => {
      setName("");
      setLocation("");
      setDegree("");
      setField("");
      setGrade("");
      setStartDate(Date)
      setEndDate(Date)
      setOptions([]);
      setDescription("");
   }

   const onSave = () => {
      if(name === "" || location === "" || degree === "" || field === "" || !startDateset || !endDateset)
         alert("Please enter all required fields!")
      else{
         let start = startDate.split("-")[1] + "/" + startDate.split("-")[0];
         let end = endDate.split("-")[1] + "/" + endDate.split("-")[0];
         addEducation({ university: name, location, degree, field, grade, startDate:start, endDate:end, description })
         handleCloseModal()
         clearStates()
      }
      
   }
  
   return(
      <StyledReactModal
         isOpen={showModal}
         contentLabel="Add Education"
         ariaHideApp={false}
         style={{
            overlay: Styles.overlay,
            content: Styles.content
         }}
         shouldCloseOnOverlayClick={true}
         onRequestClose={handleCloseModal}
      >
         <Box bg="black" height="50px" alignItems="center" justifyContent="space-between" px={3}>
            <Text color="white">Add a new Education Experience</Text>
            <Button onClick={() => {clearStates(); handleCloseModal()}}> close </Button>
         </Box>

         <Box justifyContent="space-evenly" flexDirection="column">
            <Box flexDirection="column" p={3}>
               <Text>Name of School<Text color="red">*</Text></Text>
               <AutoComplete
                  options={options}
                  style={{ width: "100%" }}
                  onSelect={data => setName(data)}
                  onSearch={onSearch}
                  placeholder="Enter College here"
                  onChange={data => setName(data)}
               />
            </Box>

            <Box justifyContent="space-evenly">
               <Box flexDirection="column" p={3} flex={3}>
                  <Text>Location<Text color="red">*</Text></Text>
                  <Input placeholder="Enter Location" onChange={e => setLocation(e.target.value)}/>
               </Box>
               
            </Box>

            <Box justifyContent="space-between">
               <Box flexDirection="column" p={3}>
                  <Text>Degree<Text color="red">*</Text></Text>
                  <Input placeholder="Enter Degree" onChange={e => setDegree(e.target.value)} />
               </Box>
               <Box flexDirection="column" p={3}>
                  <Text>Field of Study<Text color="red">*</Text></Text>
                  <Input placeholder="Enter Location" onChange={e => setField(e.target.value)}/>
               </Box>
               <Box flexDirection="column" p={3} flex={1}>
                  <Text>Grade</Text>
                  <Input placeholder="Enter Grade" onChange={e => setGrade(e.target.value)} />
               </Box>
            </Box>
            <Box>
               <Box flexDirection="column" p={3}>
                  <Text>Start Date<Text color="red">*</Text></Text>
                  <DatePicker onChange={(date, dateString) => { endDateSetTrue(true);setStartDate(dateString)}} picker="month" />
               </Box>
               <Box flexDirection="column" p={3}>
                  <Text>End/Expected Date<Text color="red">*</Text></Text>
                  <DatePicker onChange={(date, dateString) => { startDateSetTrue(true);setEndDate(dateString) }} picker="month" />
               </Box>
            </Box>

            <Box>
               <Box flexDirection="column" p={3} flex={1}>
                  <Text>Description</Text>
                  <Input.TextArea placeholder="Enter Description" style={{ width: "100%", height: 200 }} onChange={e => setDescription(e.target.value)}/>
               </Box>
            </Box>

            <Box p={3} pt={0} justifyContent="flex-end">
               <BlueButton bg="#1890FF" color="white" border={0} onClick={() => onSave()}>Save</BlueButton>
            </Box>
            
         </Box>
         
      </StyledReactModal>
   )
}

function mapDispatchToProps(dispatch: Dispatch<actions.add_education>) {
   return {
      addEducation: (data: edu) => dispatch(actions.addEducation(data)),
   }
}

export default connect(state=>state, mapDispatchToProps)(Modal);