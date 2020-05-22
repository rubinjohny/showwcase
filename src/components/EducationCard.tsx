// This represents each education card
import React from 'react'
import {Box, Text, Col, DarkRow} from '../Utils/StyledComponents'
import {Education} from '../types/index'
import {LocationIcon, GraduationIcon, CalenderIcon, GradesIcon} from "../Utils/IconComponents"

interface Props {
   data:Education;
}

const EducationCard = ({data}:Props) => (
   <Col m={2} mt={0} border="1px solid lightgrey" >
      <DarkRow justifyContent="space-between" p={2}>
         <Text white head>{GraduationIcon}{data.degree}, {data.field} at {data.university}</Text>
         <Text white alignSelf="center">{LocationIcon}{data.location}</Text>
      </DarkRow>
      <Box p={2} justifyContent="space-between">
         {(data.startDate !== "" && data.endDate !== "") && (<Text>{CalenderIcon}{data.startDate} - {data.endDate}</Text>)}
         <Text>{data.grade !== "" ? GradesIcon : ""}{data.grade}</Text>
      </Box>
      {data.description !== "" && (<Box p={2}>
         <Text><div dangerouslySetInnerHTML={{ __html: data.description ? data.description : "" }} style={{ width: "100%", textAlign: 'left', maxHeight: 200, overflow: 'scroll' }} /></Text>
      </Box>)}
   </Col>
)

export default EducationCard;