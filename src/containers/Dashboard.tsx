import React, {useState} from 'react';
import * as actions from '../redux/actions';
import { StoreState, edu } from '../types/index';
import {connect} from 'react-redux';
import { Dispatch} from 'redux'
import Header from '../components/Header';
import {Box, Text, TextEllipsis} from '../components/StyledComponents'
import EducationCard from '../components/Education'
import Modal from '../components/Modal'
import Emoji from '../components/Emoji'


// const data = [
//    {
//       university:"University of San Francisco",
//       location:"California",
//       degree:"Masters",
//       field:"Computer Science",
//       duration:[undefined, undefined],
//       grade:"0",
//       "max grade":"4.0",
//       startDate:"undefined",
//       endDate:"undefined",
//       description:"<p><strong>asd</strong></p>"
//    }
// ]

export interface Props {
   name: string;
   adduser?: (name:string) => void;
   education:edu[]
}

const Dashboard = ({name, education}:Props) => {
   const [showModal, setModal] = useState(false);
   function handleCloseModal(){
      setModal(false)
   }

   return(
      <React.Fragment>
         <Header name={name} setModal={setModal} />
         <Box pt={5} flex={1} justifyContent="space-evenly" height="100%">

            {education.length > 0 && (
               <>
                  <Box gridRowGap={10} bg="#2d2828" flex={2} flexDirection="column" minHeight="100px" maxHeight={window.innerHeight - 90} overflowY="scroll" m={3} >
                     <Box p={3} justifyContent="center">
                        <Text color="white"> Showwcase University</Text>
                     </Box>
                     <Box flexDirection="column" alignItems="flex-start" px={2}>
                        {education.slice(0).reverse().map((edu,i)=>(
                           <TextEllipsis key={i}>{edu.university}</TextEllipsis>
                        ))}
                     </Box>
                  </Box>

                  <Box flex={7} m={3} flexDirection="column" color="white" >
                     {education.map((item, i) => <EducationCard data={item} key={i} />)}
                  </Box>
               </>
            )} 
            {education.length === 0 && (
               <Box flex={1} justifyContent="center" alignItems="center" height="100%">
                  <Text>it seems empty here!<br />Add education experiences using the button on header <br/><Emoji symbol="😃" label="sheep" size={27} /></Text>
               </Box>
            )}
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