import React from 'react';
import * as actions from '../actions/';
import { StoreState } from '../types/index';
import {connect} from 'react-redux';
import { Dispatch} from 'redux'
import Header from '../components/Header';
import {Box, Text} from '../components/StyledComponents'
import Education from '../components/Education'
export interface Props {
   name: string;
   adduser?: (name:string) => void;
}

const Dashboard = ({name,adduser}:Props) => {
   
   return(
      <React.Fragment>
         <Header name={name} />
         <Box pt={5} flex={1} justifyContent="space-evenly">
            
            <Box gridRowGap={10} bg="#2d2828" flex={2} flexDirection="column" minHeight="100px" maxHeight="300px" m={3} >
               <Box p={3} justifyContent="center">
                  <Text color="white"> Showwcase University</Text>
               </Box>
               <Box flexDirection="column" alignItems="flex-start" px={2}>
                  <Text color="white" p={1}>University of San Francisco</Text>
                  <Text color="white" p={1}>Golden Gate University</Text>
                  <Text color="white" p={1}>California State University</Text>
               </Box>
               
            </Box>

            <Box flex={7} m={3} flexDirection="column" color="white" height={window.innerHeight - 100} overflowY="scroll">
               <Education university="University of San Francisco"/>
               <Education university="Golden Gate University"/>
               <Education university="California State University"/>
            </Box>
         </Box>
      </React.Fragment>
   )
}

export function mapStateToProps({ userName }: StoreState) {
   return {
      name: userName,
   }
}
export function mapDispatchToProps(dispatch: Dispatch<actions.userAction>) {
   return {
      adduser: (name:string) => dispatch(actions.addUser(name)),
   }
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);