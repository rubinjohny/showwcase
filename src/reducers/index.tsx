import {StoreState} from '../types/index'
import { Reducer } from "redux";
import * as constants from '../constants/index'
import * as actions from '../actions/index'


export const user: Reducer = (state:StoreState, action:actions.userAction|actions.add_education): StoreState => {
   switch (action.type) {
      case constants.ADD_USER:
         return { ...state, userName: action?.payload?.name? action.payload.name:state.userName };
      
      case constants.ADD_EDUCATION:{
         let arr = state.education;
         arr.push(action.payload.education)
         return { ...state, education: arr }
      }
         
   }
   return state;
}