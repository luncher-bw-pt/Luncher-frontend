import React from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import Login from './components/Login';
import Admin from './components/Admin';
import Nav from './components/Nav';

function App() {
  return (
    <div className="App">
      <Nav />
      <Login />
      <h1>Welcome to Luncher</h1>
      <p>*CONTENT GOES HERE*</p>
      {/* <Route exact path='/' component={Home} /> */}
      <Route path='/admin' component={Admin} />
    </div>
  );
}

export default App;
