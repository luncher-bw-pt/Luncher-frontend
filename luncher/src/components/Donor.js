import React from 'react';
//import { BrowserRouter as Router } from 'react-router-dom';
import { Link } from 'react-router-dom';
import SingleSchool from "./SingleSchool";
import { connect } from 'react-redux';
import { dispSchoolGrid } from '../actions';
import './SchoolGrid.css';


class Donor extends React.Component {
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
                <h1>DONOR PAGE</h1>
                <h2>Click the school below that you wish to assist with your donation!</h2>

                <ul className='listHead'>
                    <li className="schoolName">School Name</li>
                    <li className="schoolState">State</li>
                    <li className="schoolZIP">ZIP Code</li>
                    <li className="schoolFunds">Funds Needed</li>
                    <li className="schoolEmail">Contact Email</li>
                </ul>

                {this.props.schools.map((school, id) => (

                    <ul className='listMain'>
                        <Link to={`/school/${school.id}`} component={SingleSchool}>
                            <li className="schoolName">{school.schoolName}</li>
                        </Link>
                        <li className="schoolState">{school.state}</li>
                        <li className="schoolZIP">{school.zip}</li>
                        <li className="schoolFunds">{school.fundsNeeded}</li>
                        <li className="schoolEmail">{school.contact}</li>
                    </ul>

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
        dispSchoolGrid
    }
)(Donor);