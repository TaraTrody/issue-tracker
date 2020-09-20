import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { SignupLogin } from './features/Signup-Login/';
import './App.css';

function App() {
  return (
    <div className="App">
      <SignupLogin />
    </div>
  );
}

export default App;

