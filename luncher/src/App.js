import React from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import { Link, NavLink } from 'react-router-dom';
import Admin from './components/Admin';
import Donor from './components/Donor';
import SchoolGrid from './components/SchoolGrid';
import Nav from './components/Nav';
import SingleSchool from './components/SingleSchool';
import Register from './components/Register';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <div className="nav">
        <Link to="/"><h1>LUNCHER</h1> </Link>
          <Nav />
          <NavLink to="/register">Register</NavLink>
        </div>
        {/* <Route exact path='/' component={Home} /> */}
        <Route path='/admin' component={Admin} />
        <Route path='/donor' component={Donor} />
        <Route exact path='/school' component={SchoolGrid} />
        <Route path='/school/:id' component={SingleSchool} />
        <Route path='/register' component={Register} />
      </div>
    );
    }
  } 

export default App;
