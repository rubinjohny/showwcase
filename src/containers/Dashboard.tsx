// component that lets users add thei education experiences
import React, {useState} from 'react';
import { StoreState } from '../types/index';
import { useSelector } from 'react-redux'
import Header from '../components/Header';
import {Box, Text, TextEllipsis, DarkCol, BoxCentered, Col} from '../Utils/StyledComponents'
import EducationCard from '../components/EducationCard'
import Modal from '../components/Modal'
import Emoji from '../Utils/Emoji'
import ModalForm from '../components/ModalForm'

const Dashboard = () => {
   const [showModal, setModal] = useState(false);

   const name = useSelector((state:StoreState) => state.userName)
   const education = useSelector((state: StoreState) => state.education)

   function handleCloseModal(){
      setModal(false)
   }

   return(
      <React.Fragment>
         <Header name={name} setModal={setModal} />
         <Box pt={5} flex={1} justifyContent="space-evenly" height="100%">

            {education.length > 0 && (
               <>
                  <DarkCol flex={2} minHeight="100px" maxHeight={window.innerHeight - 90} overflowY="scroll" m={3} >
                     <Box p={3} justifyContent="center">
                        <Text white head underline> Showwcase University</Text>
                     </Box>
                     <Col alignItems="flex-start" px={2}>
                        {education.slice(0).reverse().map((edu,i)=>(
                           <TextEllipsis key={i}>{edu.university}</TextEllipsis>
                        ))}
                     </Col>
                  </DarkCol>

                  <Col flex={7} m={3} >
                     {education.map((item, i) => <EducationCard data={item} key={i} />)}
                  </Col>
               </>
            )} 
            {education.length === 0 && (
               <BoxCentered height="100%">
                  <Text>it seems empty here!<br />Add education experiences using the button on header <br/><Emoji symbol="😃" label="sheep" size={27} /></Text>
               </BoxCentered>
            )}
         </Box>

         <Modal 
            showModal={showModal} 
            onCloseButton={handleCloseModal}
            headerText="Add Education" 
         >
            <ModalForm handleCloseModal={handleCloseModal}/>
         </Modal>
         
      </React.Fragment>
   )
}

export default Dashboard;