import React from 'react';
import './App.css';
import Routes from './Utils/Router'
import { BrowserRouter as Router } from "react-router-dom";

function App() {

  return (
    <div className="App" style={{height:window.innerHeight}}>
      <Router>
        <Routes />
      </Router>
    </div>
  );
}

export default App;
