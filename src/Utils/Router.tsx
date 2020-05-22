import React from 'react';
import {
   Switch,
   Route,
} from "react-router-dom";

import Home from '../containers/Home'
import Dashboard from '../containers/Dashboard'

export default function Routes(){
   return(
      <Switch>
         <Route exact path="/">
            <Home />
         </Route>
         <Route path="/dashboard">
            <Dashboard />
         </Route>
      </Switch>
   )
}


