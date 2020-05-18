import React, {useState} from 'react';
import * as actions from '../actions/';
import { StoreState, edu } from '../types/index';
import {connect} from 'react-redux';
import { Dispatch} from 'redux'
import Header from '../components/Header';
import {Box, Text} from '../components/StyledComponents'
import EducationCard from '../components/Education'
import Modal from '../components/Modal'

const sampleDescription = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
export interface Props {
   name: string;
   adduser?: (name:string) => void;
   education:edu[]
}

const Dashboard = ({name,adduser, education}:Props) => {
   const [showModal, setModal] = useState(false);
   function handleCloseModal(){
      setModal(false)
   }

   const data = [
      {
         university: "University of San Francisco",
         location: "San Francisco, california",
         degree: "Master of Science",
         field: "Computer Science",
         grade: "4.0/4.0",
         startDate: "2020-02",
         endDate: "2021-05",
         description: sampleDescription
      },
      {
         university: "University of San Francisco",
         location: "San Francisco, california",
         degree: "Master of Science",
         field: "Computer Science",
         grade: "4.0/4.0",
         startDate: "2020-02",
         endDate: "2021-05",
         description: sampleDescription
      },
      {
         university: "University of San Francisco",
         location: "San Francisco, california",
         degree: "Master of Science",
         field: "Computer Science",
         grade: "4.0/4.0",
         startDate: "2020-02",
         endDate: "2021-05",
         description: sampleDescription
      },
      {
         university: "University of San Francisco",
         location: "San Francisco, california",
         degree: "Master of Science",
         field: "Computer Science",
         grade: "4.0/4.0",
         startDate: "2020-02",
         endDate: "2021-05",
         description: sampleDescription
      }
   ]
   
   return(
      <React.Fragment>
         <Header name={name} setModal={setModal} />
         <Box pt={5} flex={1} justifyContent="space-evenly">
            
            <Box gridRowGap={10} bg="#2d2828" flex={2} flexDirection="column" minHeight="100px" maxHeight="700px" overflowY="scroll" m={3} >
               <Box p={3} justifyContent="center">
                  <Text color="white"> Showwcase University</Text>
               </Box>
               <Box flexDirection="column" alignItems="flex-start" px={2}>
                  {education.map((edu,i)=>(
                     <Text key={i} color="white" p={1}>{edu.university}</Text>
                  ))}
               </Box>
               
            </Box>

            <Box flex={7} m={3} flexDirection="column" color="white" height={window.innerHeight - 100} overflowY="scroll">
               {data.map((item, i) => <EducationCard data={item} key={i} />)}
            </Box>
         </Box>

         <Modal showModal={showModal} handleCloseModal={handleCloseModal}/>
         
      </React.Fragment>
   )
}

export function mapStateToProps({ userName, education }: StoreState) {
   return {
      name: userName,
      education:education
   }
}
export function mapDispatchToProps(dispatch: Dispatch<actions.userAction>) {
   return {
      adduser: (name:string) => dispatch(actions.addUser(name)),
   }
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);