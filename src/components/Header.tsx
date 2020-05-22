import React from 'react'
import {StyledHeader, Text, Button, Box} from '../Utils/StyledComponents'

interface Props {
   name:string;
   setModal?:(value:boolean) => void
}

const Header = ({ name, setModal}:Props) => {
   return(
      <StyledHeader height={80} width="100%" alignSelf="center">
         <Box mx={5} flex={1} alignSelf="center" justifyContent="space-between" alignItems="center">
            <Text color="white">Welcome {name}!</Text>
            {setModal && (<Button width="200px" borderRadius={10} height="30px" alignSelf="center" onClick={() => setModal(true)}> Add New Education </Button>)}
         </Box>
      </StyledHeader>
   )
}

export default Header;