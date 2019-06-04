import React from 'react';
import { connect } from 'react-redux';
import { dispSchoolGrid } from '../actions';
import './SchoolGrid.css';

class SchoolGrid extends React.Component {
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
                <h1>Schools</h1>
                <table>
                    <tr className='tableHead'>
                        <td className="schoolName">School Name</td>
                        <td className="schoolState">State</td>
                        <td className="schoolZIP">ZIP Code</td>
                        <td className="schoolFunds">Funds Needed</td>
                        <td className="schoolEmail">Contact Email</td>
                    </tr>
                    
                    {this.props.schools.map((school, id) => (
                        <div>
                        <tr className='.mainTable'>
                            <td className="schoolName">{school.schoolName}</td>
                            <td className="schoolState">{school.state}</td>
                            <td className="schoolZIP">{school.zip}</td>
                            <td className="schoolFunds">{school.fundsNeeded}</td>
                            <td className="schoolEmail">{school.contact}</td>
                        </tr>
                        
                        </div>                     
                    ))}
                </table>
                
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
)(SchoolGrid);