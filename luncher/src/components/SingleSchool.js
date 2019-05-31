import React from 'react';
//import { Link } from 'react-router-dom';
import axios from 'axios';
import { connect } from 'react-redux';
import { dispSchoolGrid } from '../actions';



class SingleSchool extends React.Component {
        state = {
            school: '',
            Donated: ''
        }
    

    componentDidMount() {
        console.log(this.props);
        let id = this.props.match.params.id;
        this.fetchSchool(id);
     }
        fetchSchool = id => {
        axios
            .get(`https://luncher-backend.herokuapp.com/api/schools/${id}`)
            .then(res => {
                console.log(res);
                this.setState(() => ({ school: res.data}));
            })
            .catch(err => {
                console.log(err)
            });
        }
 

    render() {
        const { schoolName, state, zip, fundsNeeded, contact } = this.state.school;
        return (
            <div className="card-wrapper">
                <h2>{schoolName}</h2>
                <div className="school-state">
                    <strong>State</strong>: <em>{state}</em>
                </div>
                <div className="school-zip">
                <strong>Zip</strong>: <em>{zip}</em>
                </div>
                <div className="school-funds">
                <strong>Funds Needed</strong>: $<em>{fundsNeeded}</em>
                </div>
                <div className="school-contact">
                <strong>Contact</strong>: <em>{contact}</em>
                </div>

                <input 
                    type="number" 
                    placeholder="Enter Amount" 
                />

                <button>Submit Donation</button>
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
)(SingleSchool);