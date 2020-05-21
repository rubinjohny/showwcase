import React, {useState, useEffect} from 'react';
import ReactModal from 'react-modal';
import styled, {keyframes } from 'styled-components'
import { AutoComplete, Input, DatePicker, InputNumber } from 'antd';
import { Box, BlueButton, Button, Text}  from './StyledComponents'
import axios from 'axios'
import { connect } from 'react-redux';
import { Dispatch } from 'redux'
import { edu } from '../types/index';
import * as actions from '../redux/actions/index';
import ModalForm from './ModalForm'

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

   const [modalValues,setModalValues] = useState({});

   useEffect(()=> {
      console.log(modalValues);
      
   },[modalValues])

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
            <Button onClick={() => {handleCloseModal()}}> close </Button>
         </Box>

         <ModalForm setModalValues={setModalValues} handleCloseModal={handleCloseModal}/>
         
      </StyledReactModal>
   )
}

function mapDispatchToProps(dispatch: Dispatch<actions.add_education>) {
   return {
      addEducation: (data: edu) => dispatch(actions.addEducation(data)),
   }
}

export default connect(state=>state, mapDispatchToProps)(Modal);