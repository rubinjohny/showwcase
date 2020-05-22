import React from 'react'
import {Box, Text} from '../Utils/StyledComponents'
import {Education} from '../types/index'
import {LocationIcon, GraduationIcon, CalenderIcon, GradesIcon} from "../Utils/IconComponents"




interface Props {
   data:Education;
}

const EducationCard = ({data}:Props) => {

   console.log("data in Education Card",data);
   

   return(
      <Box m={2} mt={0} flexDirection="column" border="1px solid lightgrey" > 
         <Box bg="#2d2828" justifyContent="space-between" p={2}>
            <Text>{GraduationIcon}{data.degree}, {data.field} at {data.university}</Text>
            <Text>{LocationIcon}{data.location}</Text>
         </Box>
         <Box p={2} justifyContent="space-between">
         {(data.startDate !== "" && data.endDate !== "") && (<Text color="black">{CalenderIcon}{data.startDate} - {data.endDate}</Text>)}
            <Text color="black">{data.grade !== "" ? GradesIcon:""}{data.grade}</Text>
         </Box>
         {data.description !== "" && (<Box p={2}>
            <Text color="black"><div dangerouslySetInnerHTML={{ __html: data.description ? data.description : "" }} style={{ width: "100%", textAlign: 'left', maxHeight:200, overflow:'scroll' }} /></Text>
         </Box>)}
      </Box>
   )
}

export default EducationCard;