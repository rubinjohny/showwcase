import React from 'react';
import ReactModal from 'react-modal';
import styled, {keyframes } from 'styled-components'
import { Box, Button, Text}  from '../Utils/StyledComponents'
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
   handleCloseModal:() => void;
   setModalFormValues:({}) => void;
}
const Modal = ({ showModal, handleCloseModal, setModalFormValues}:Props) => {


   return(
      <StyledReactModal
         isOpen={showModal}
         contentLabel="Add Education"
         ariaHideApp={false}
         style={{
            overlay: Styles.overlay,
            content: Styles.content
         }}
         shouldCloseOnOverlayClick={false}
         // onRequestClose={handleCloseModal}
      >
         <Box bg="black" height="50px" alignItems="center" justifyContent="space-between" px={3}>
            <Text color="white">Add a new Education Experience</Text>
            <Button onClick={() => {handleCloseModal()}}> close </Button>
         </Box>

         <ModalForm  handleCloseModal={handleCloseModal}/>
         
      </StyledReactModal>
   )
}

export default Modal;