import React from 'react'
import {Box, Text} from './StyledComponents'

interface Props {
   university:string
}

const Education = ({university}:Props) => {

   return(
      <Box bg="#2d2828" m={2} mt={0} flexDirection="column">
         <Text>{university}</Text>
      </Box>
   )
}

export default Education;