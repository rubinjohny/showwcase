import React, {FunctionComponent} from 'react';
import ReactModal from 'react-modal';
import styled, {keyframes } from 'styled-components'
import { Box, Button, Text}  from '../Utils/StyledComponents'

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
   headerText:string;
   contentlabel?:string;
   overlayStyle?:{};
   contentStyle?:{};
   onCloseButton:() => void;
}
const Modal: FunctionComponent<Props> = ({ showModal, onCloseButton, headerText, overlayStyle, contentStyle, contentlabel, children}) => {


   return(
      <StyledReactModal
         isOpen={showModal}
         contentLabel={contentlabel}
         ariaHideApp={false}
         style={{
            overlay: overlayStyle ? overlayStyle : Styles.overlay,
            content: contentStyle ? contentStyle : Styles.content
         }}
         shouldCloseOnOverlayClick={false}
      >
         <Box bg="black" height="50px" alignItems="center" justifyContent="space-between" px={3}>
            <Text color="white">{headerText}</Text>
            <Button onClick={() => { onCloseButton()}}> close </Button>
         </Box>

         {children}
         
      </StyledReactModal>
   )
}

export default Modal;