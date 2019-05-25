import React from 'react';
import { connect } from 'react-redux';
import { dispSchoolGrid } from '../actions';

class SchoolGrid extends React.Component {
    state = {
        schools: [],
        error: null
    }

    componentDidMount(props) {
        this.props.dispSchoolGrid();
    }

    render() {
        return (
            <div>
                <table>
                    {this.props.schools.map((school) => (
                        <tr>
                            {school.school}
                        </tr>
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