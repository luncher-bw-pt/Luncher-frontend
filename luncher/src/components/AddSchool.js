import React, { Component } from 'react';
import axios from 'axios';

class AddSchool extends Component {
  constructor(props) {
    super(props);
    this.state = {
      schoolName: '',
      state: '',
      zip: '',
      fundsNeeded: ''
    };
  }

  fetchSchool = () => {
    axios.get('https://luncher-backend.herokuapp.com/api/school')
        .then(res => this.setState({ smurfs: res.data }))
        .catch(err => console.log(err));
  }

  addSchool = event => {
    event.preventDefault();
      const {schoolName, state, zip, fundsNeeded} = this.state;

      axios.post('https://luncher-backend.herokuapp.com/api/admin/school ',
                   {schoolName, state, zip, fundsNeeded })
          .then(res => {
              this.props.fetchSchool();
              // this.props.history.push('/');
          })
          .catch(err => console.log(err));


    this.setState({
      schoolName: '',
      state: '',
      zip: '',
      fundsNeeded: ''
    });
  }

  handleInputChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <div className="school-form">
        <form>
          <input
            onChange={this.handleInputChange}
            placeholder="School Name"
            value={this.state.schoolName}
            name="schoolName"
            type="text"
          />
          <input
            onChange={this.handleInputChange}
            placeholder="State"
            value={this.state.state}
            name="state"
            type="text"
          />
          <input
            onChange={this.handleInputChange}
            placeholder="zip"
            value={this.state.sip}
            name="zip"
            type="number"
          />
          <input
            onChange={this.handleInputChange}
            placeholder="Funds Needed"
            value={this.state.fundsNeeded}
            name="fundsNeeded"
            type="number"
          />
          </form>
          <button type="submit" onClick={this.addSchool}>Add School</button>
            <button type="submit">Delete Funds</button>
        
      </div>
    );
  }
}

export default AddSchool;