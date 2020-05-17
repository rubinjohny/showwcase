import * as constants from '../constants';

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
