import React from 'react';
//import { Link } from 'react-router-dom';
import axios from 'axios';
import { connect } from 'react-redux';
import { dispSchoolGrid } from '../actions';



class SingleSchool extends React.Component {
        state = {
            school: '',
            // state:'',
            // zip: '',
            // fundsNeeded: '',
            // contact: ''
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
            <div>
                <h1>This is a school</h1>
               <h2>{schoolName}</h2>
               <h2>{state}</h2>
               <h2>{zip}</h2>
               <h2>{fundsNeeded}</h2>
               <h2>{contact}</h2>

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