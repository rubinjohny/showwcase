import React from 'react'
import {StyledHeader, Text, Button, Box} from './StyledComponents'

interface Props {
   name:string
}

const Header = ({name}:Props) => {
   return(
      <StyledHeader height={80} width="100%" alignSelf="center">
         <Box mx={5} flex={1} alignSelf="center" justifyContent="space-between" alignItems="center">
            <Text color="white">Welcome {name}!</Text>
            <Button width="200px" borderRadius={10} height="30px" alignSelf="center" onClick={()=> console.log("add new education")}> Add New Education </Button>
         </Box>
      </StyledHeader>
   )
}

export default Header;