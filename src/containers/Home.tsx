import React, { FunctionComponent, useState } from 'react';
import * as actions from '../actions/';
import { connect } from 'react-redux';
import { Dispatch } from 'redux'
import { useHistory } from "react-router-dom";
import Emoji from '../components/Emoji'
import {Box, Text, Input, Button} from '../components/StyledComponents';


interface Props {
   adduser: (name:string) => void 
}

const Home:FunctionComponent<Props> = ({adduser}:Props) => {

   const [username, setName] = useState("");
   const history = useHistory();

   function onEnter(){
      if(username == "")
         alert("please enter name!")
      else{
         adduser(username)
         history.push("/dashboard")   
      }
   }

   return(
      <Box height={window.innerHeight} justifyContent="center" bg="#2e78ff">

         <Box alignSelf="center" height="300px" p={2} borderWidth={2} borderColor="white" borderStyle="solid" borderRadius={10} >

            <Box flexDirection="column" justifyContent="space-evenly" p={3} >
               <Box justifyContent="center" alignItems="center" flex={1} >
                  <Text color="white">
                     Hi there! <Emoji symbol="👋" label="sheep" size={27}/>
                     <br/> 
                     Welcome to your education Showwcase!
                  </Text>
               </Box>

               <Box flexDirection="column" justifyContent="space-evenly"  flex={2}>
                  <Text color="white">Type your name and click "Enter" to begin</Text>
                  <Input width="80%" placeholder="Enter Name" borderRadius={10} borderColor="white" border={0} height="30px" alignSelf="center" onChange={e => setName(e.target.value)} onKeyDown={e => e.keyCode == 13? onEnter() : null }/>
                  <Button type="submit" width="50%" borderRadius={10} height="30px" alignSelf="center" onClick={() => onEnter()}>Enter</Button>
               </Box>

            </Box>

         </Box>
      </Box>
   )
}

export function mapDispatchToProps(dispatch: Dispatch<actions.userAction>) {
   return {
      adduser: (name: string) => dispatch(actions.addUser(name)),
   }
}

export default connect(state => state, mapDispatchToProps)(Home);