import React from 'react'
import {StyledHeader, Text, Button, Box} from '../Utils/StyledComponents'

interface Props {
   name:string;
   setModal?:(value:boolean) => void
}

const Header = ({ name, setModal}:Props) => (
   <StyledHeader height={80} width="100%" alignSelf="center">
      <Box mx={5} flex={1} justifyContent="space-between" alignItems="center">
         <Text white>Welcome {name}!</Text>
         {setModal && (
            <Button
               width="200px"
               onClick={() => setModal(true)}
            >
               Add New Education
            </Button>
         )}
      </Box>
   </StyledHeader>
)

export default Header;