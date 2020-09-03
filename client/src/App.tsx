import React from 'react';

import { BrowserRouter as Router, Route} from 'react-router-dom';
import './App.css';

import Landing from './components/layout/Landing'
import Navbar from './components/layout/Navbar'
import Register from './components/auth/Register'
import Login from './components/auth/Login'

function App() {
  return (
  
    <div className="App">
    <Navbar/>
    <Route exact path="/" component={Landing}/>
    <Route exact path="/register" component={Register}/>
    <Route exact path="/login" component={Login}/>
    
    </div>
  );
}

export default App;
