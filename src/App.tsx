import React from 'react';
import './App.css';
import Routes from '../src/components/Router'
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  let state : number

  function sample(str?:string):string{
    return ("sample function")
  }

  return (
    <div className="App">
      <Router>
        <Routes />
      </Router>
    </div>
  );
}

export default App;
