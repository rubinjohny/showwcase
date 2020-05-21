import React, {useEffect} from 'react'
import {Box, Text} from './StyledComponents'
import {Education} from '../types/index'

interface Props {
   data:Education;
}

const EducationCard = ({data}:Props) => {

   console.log("data in Education Card",data);
   

   return(
      <Box m={2} mt={0} flexDirection="column" border="1px solid lightgrey" > 
         <Box bg="#2d2828" justifyContent="space-between" p={2}>
            <Text>{data.university}</Text>
            <Text>{data.location}</Text>
         </Box>
         <Box p={2} justifyContent="space-between">
            <Text color="black">{data.degree}, {data.field}</Text>
            
            {(data.startDate != "" && data.endDate != "") && (<Text color="black">{data.startDate} - {data.endDate}</Text>)}
            <Text color="black">{data.grade}</Text>
         </Box>
         <Box p={2}>
            <Text color="black"><div dangerouslySetInnerHTML={{ __html: data.description ? data.description : "" }} style={{ width: "100%", textAlign: 'left', maxHeight:200, overflow:'scroll' }} /></Text>
         </Box>
      </Box>
   )
}

export default EducationCard;