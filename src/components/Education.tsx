import React from 'react'
import {Box, Text} from './StyledComponents'
import {Education} from '../types/index'

interface Props {
   data:Education
}

const EducationCard = ({data}:Props) => {

   return(
      <Box m={2} mt={0} flexDirection="column" border="1px solid lightgrey"> 
         <Box bg="#2d2828" justifyContent="space-between" p={2}>
            <Text>{data.university}</Text>
            <Text>{data.location}</Text>
            <Text>{data.startDate.split("-")[1]}/{data.startDate.split("-")[0]} - {data.endDate.split("-")[1]}/{data.endDate.split("-")[0]}</Text>
         </Box>
         <Box p={2} justifyContent="space-between">
            <Text color="black">{data.degree}, {data.field}</Text>
            <Text color="black">{data.grade}</Text>
         </Box>
         <Box p={2}>
            <Text color="black" style={{textAlign:"left"}}>{data.description}</Text>
         </Box>
      </Box>
   )
}

export default EducationCard;