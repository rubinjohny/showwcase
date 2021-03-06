import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import {faMapMarkerAlt, faGraduationCap, faCalendar, faMarker} from '@fortawesome/free-solid-svg-icons'

//contains all icons used in the app
export const LocationIcon = <FontAwesomeIcon icon={faMapMarkerAlt} style={{margin:"0px 5px"}}/>
export const GraduationIcon = <FontAwesomeIcon icon={faGraduationCap} style={{margin:"0px 5px"}}/>
export const CalenderIcon = <FontAwesomeIcon icon={faCalendar} style={{ margin: "0px 5px", color:"#c3c3c3"}}/>
export const GradesIcon = <FontAwesomeIcon icon={faMarker} style={{ margin: "0px 5px", color:"#c3c3c3"}}/>