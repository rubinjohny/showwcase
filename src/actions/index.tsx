import * as constants from '../constants';
import { Education } from '../types';

export interface AddUser{
   type:constants.ADD_USER,
   payload?:{name:string}
}
export type userAction = AddUser;

export function addUser(username:string): AddUser {
   
   return {
      type: constants.ADD_USER,
      payload:{name:username}
   }
}

export interface AddEducation{
   type:constants.ADD_EDUCATION,
   payload:{
      education:Education
   }
}

export type add_education = AddEducation;

export function addEducation(edu:Education):AddEducation{
   return {
      type:constants.ADD_EDUCATION,
      payload:{education:edu}
   }
}
