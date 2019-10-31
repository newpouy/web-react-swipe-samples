import React from 'react';
import logo from './logo.svg';
import './App.css';
// import Demo from './components/Demo2'
import Demo from './components/DemoAxis'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
      <Demo/>
      </Router>
    </div>
  );
}

export default App;
