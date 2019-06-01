import React from 'react';
//import { BrowserRouter as Router } from 'react-router-dom';
//import { Link } from 'react-router-dom';
//import SingleSchool from "./SingleSchool";
import { connect } from 'react-redux';
import { dispSchoolGrid } from '../actions';
import './SchoolGrid.css';
import Login from './Login';
import '../App.css';


class Admin extends React.Component {
    state = {
        schools: [],
        error: null
    }

    componentDidMount(props) {
        this.props.dispSchoolGrid();
        console.log(this.props.schools);
    }

    render() {
        return (
            <div className="admin-page">
                <h1>Admin Login</h1>
                <div className="admin-login">
                    <Login />
                </div>
                
            </div>
        )
    }
}


const mapStateToProps = state => {
    return {
        schools: state.schools
    }
}

export default connect(
    mapStateToProps,
    {
        dispSchoolGrid
    }
)(Admin);