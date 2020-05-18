import React, {useState} from 'react';
import ReactModal from 'react-modal';

interface Props {
   showModal:boolean;
   handleCloseModal:() => void
}
const Modal = ({showModal, handleCloseModal}:Props) => {
  
   return(
      <ReactModal
         isOpen={showModal}
         contentLabel="Minimal Modal Example"
         ariaHideApp={false}
      >
         <button onClick={handleCloseModal}>Close Modal</button>
      </ReactModal>
   )
}

export default Modal;