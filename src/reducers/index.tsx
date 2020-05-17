import {StoreState} from '../types/index'
import { Reducer } from "redux";
import {ADD_USER} from '../constants/index'
import {userAction} from '../actions/index'


export const user: Reducer = (state:StoreState, action:userAction): StoreState => {
   switch (action.type) {
      case ADD_USER:
         return { ...state, userName: action?.payload?.name? action.payload.name:state.userName };
   }
   return state;
}