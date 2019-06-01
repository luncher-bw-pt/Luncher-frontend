import React from 'react';
//import { BrowserRouter as Router } from 'react-router-dom';
//import { Link } from 'react-router-dom';
//import SingleSchool from "./SingleSchool";
import { connect } from 'react-redux';
import { dispSchoolGrid } from '../actions';
import './SchoolGrid.css';
import Login from './Login';



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
            <div>
                <Login />
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