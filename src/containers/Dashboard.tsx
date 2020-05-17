import React from 'react';
import * as actions from '../actions/';
import { StoreState } from '../types/index';
import {connect} from 'react-redux';
import { Dispatch} from 'redux'
export interface Props {
   name: string;
   adduser?: (name:string) => void;
}

function Hello({ name, adduser }: Props) {
   return (
      <div>
         Hello {name}!
         <div>
            <button onClick={() => adduser ? adduser("asd") : null}>change name</button>
         </div>
      </div>
   );
}


const Dashboard = ({name,adduser}:Props) => {
   
   return(
      <div> 
         <Hello name={name} adduser={adduser} />
         Dashboard 
      </div>
   )
}

export function mapStateToProps({ userName }: StoreState) {
   return {
      name: userName,
   }
}
export function mapDispatchToProps(dispatch: Dispatch<actions.userAction>) {
   return {
      adduser: (name:string) => dispatch(actions.addUser(name)),
   }
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);