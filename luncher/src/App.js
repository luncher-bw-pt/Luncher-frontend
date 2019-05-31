import React from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import Login from './components/Login';
import Admin from './components/Admin';
import Donor from './components/Donor';
import SchoolGrid from './components/SchoolGrid';
import Nav from './components/Nav';
import SingleSchool from './components/SingleSchool';

function App() {
  return (
    <div className="App">
      <div className="navigation">
        <Nav />
        <h1>LUNCHER</h1>
        <Login />
      </div>
      {/* <Route exact path='/' component={Home} /> */}
      <Route path='/admin' component={Admin} />
      <Route path='/donor' component={Donor} />
      <Route exact path='/school' component={SchoolGrid} />
      <Route path='/school/:id' component={SingleSchool} />
    </div>
  );
}

export default App;
