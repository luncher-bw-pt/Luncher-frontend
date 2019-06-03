import React from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import { Link } from 'react-router-dom';
import Admin from './components/admin/Admin';
import Donor from './components/donor/Donor';
// import SchoolGrid from './components/SchoolGrid';
import Nav from './components/Nav';
import SingleSchool from './components/SingleSchool';
import Register from './components/Register';
import Login from './components/Login';
import Home from './components/Home';
import PrivateRoute from './components/PrivateRoute';
import AdminToSchool from './components/admin/AdminToSchool';



class App extends React.Component {
  render() {
    return (
      <div className="App">
        <div className="nav">
        <Link to="/"><h1>LUNCHER</h1> </Link>
          <Nav />
          {/* <NavLink to="/register">Register</NavLink>
          <NavLink to="/login">Admin Login</NavLink> */}
        </div>
        <Route exact path='/' component={Home} />
        <Route path='/admin' component={Admin} />
        <Route path='/donor' component={Donor} />
        {/* <Route exact path='/school' component={AdminToSchool} /> */}
        <Route path='/school/:id' component={SingleSchool} />
        <Route path='/register' component={Register} />
        <Route path='/login' component={Login} />
        <PrivateRoute exact path='/adminLoggedIn' component={AdminToSchool} />
      </div>
    );
    }
  } 

export default App;
