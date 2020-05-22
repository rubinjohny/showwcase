import React, { FunctionComponent, useState } from 'react';
import * as actions from '../redux/actions';
import { useDispatch } from 'react-redux'
import { useHistory } from "react-router-dom";
import Emoji from '../Utils/Emoji'
import {Box, Text, Input, Button, ColSpaceEvenly, BorderBox, BoxCentered} from '../Utils/StyledComponents';
import {Notify} from '../Utils/Notification'

const Home:FunctionComponent = () => {

   const [username, setName] = useState("");
   const history = useHistory();
   const dispatch = useDispatch();

   function onEnter(){
      if(username === "")
         Notify("Enter Name","It's OK! we can be friends!!","warn");
      else{
         dispatch(actions.addUser(username))
         history.push("/dashboard")
      }
   }

   return(
      <Box height={window.innerHeight} justifyContent="center" bg="#2d2828">

         <BorderBox height="300px">

            <ColSpaceEvenly p={3}>
               <BoxCentered>
                  <Text white>
                     Hi there! <Emoji symbol="👋" label="waving" size={27}/>
                     <br/> 
                     Welcome to your education Showwcase!
                  </Text>
               </BoxCentered>

               <ColSpaceEvenly flex={2}>
                  <Text white>Tell us your Name</Text>
                  <Input width="80%" maxLength={25} placeholder="Enter Name" onChange={e => setName(e.target.value)} onKeyDown={e => e.keyCode === 13? onEnter() : null }/>
                  <Button type="submit" width="50%" onClick={() => onEnter()}>Enter</Button>
               </ColSpaceEvenly>

            </ColSpaceEvenly>

         </BorderBox>
      </Box>
   )
}

export default Home;