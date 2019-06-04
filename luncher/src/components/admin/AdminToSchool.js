import React from 'react';
//import { BrowserRouter as Router } from 'react-router-dom';
import { Link } from 'react-router-dom';
import SingleSchool from "../SingleSchool";
import { connect } from 'react-redux';
import { dispSchoolGrid } from '../../actions';
import '../SchoolGrid.css';
import AddSchool from '../AddSchool';
import axios from 'axios';


class AdminToSchool extends React.Component {
    state = {
        schools: [],
        error: null
    }

    componentDidMount(props) {
        this.props.dispSchoolGrid();
        console.log(this.props.schools);
    }

    // eraseSchool = event => {
    //     event.preventDefault();
    //       const {schoolName, state, zip, fundsNeeded} = this.state;

    deleteSchool = adminId => {
        
            //console.log(schoolId);
            axios
                .delete(`https://luncher-backend.herokuapp.com/api/admin/school/${adminId}`, 
                {headers: {Authorization:localStorage.getItem('token')}})
                .then(res => {
                    this.setState({
                        schools: res.data
                    })
                //     dispatch({ type: DELETE_SCHOOL, payload: res.data })
                })
                .catch(err => {
                    // dispatch({ type: FAILURE, payload: err })
                })
        }
    

    render() {
        return (
            <div className="donor-page">
                <h1>DONATE TODAY!</h1>
                <h2>Click the school below that you wish to assist with your donation!</h2>
                <div>
                    <AddSchool />
                </div>
                <ul className='list-head'>
                    <li className="schoolName">School Name</li>
                    <li className="schoolState">State</li>
                    <li className="schoolZIP">ZIP Code</li>
                    <li className="schoolFunds">Funds Needed</li>
                    <li className="schoolEmail">Contact Email</li>
                </ul>

                {this.props.schools.map((school, id) => (
                    <div className="clickable-school-grid" key={id}>
                    <ul className='list-main'>
                        <Link to={`/school/${school.id}`} component={SingleSchool}>
                            <li className="schoolName">{school.schoolName}</li>
                        </Link>
                        <li className="schoolState">{school.state}</li>
                        <li className="schoolZIP">{school.zip}</li>
                        <li className="schoolFunds">{school.fundsNeeded}</li>
                        <li className="schoolEmail">{school.contact}</li>
                    </ul>
                    <button onClick={() => this.deleteSchool()}>Delete</button> 
                    </div> 
                ))}

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
        dispSchoolGrid,
        // deleteSchool
    }
)(AdminToSchool);