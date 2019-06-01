import React from 'react';
import { Route } from 'react-router-dom';
import { Link } from 'react-router-dom';

import './App.css';
import Admin from './components/Admin';
import Donor from './components/Donor';
import SchoolGrid from './components/SchoolGrid';
import Nav from './components/Nav';
import SingleSchool from './components/SingleSchool';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <div className="nav">
        <Link to="/"><h1>LUNCHER</h1> </Link>
          <Nav />
        </div>
        {/* <Route exact path='/' component={Home} /> */}
        <Route path='/admin' component={Admin} />
        <Route path='/donor' component={Donor} />
        <Route exact path='/school' component={SchoolGrid} />
        <Route path='/school/:id' component={SingleSchool} />
      </div>
    );
    }
  } 

export default App;
