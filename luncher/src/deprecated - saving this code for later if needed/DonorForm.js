import React, { Component } from 'react';

class DonorForm extends Component {
    state = {
        donationInfo: {
            donorName: '',
            donorAddress: '',
            donationAmount: ''
        }
    }

    handleChanges = e => {
        this.setState({
            donationInfo: {
                ...this.state.donationInfo,
                [e.target.name]: e.target.value,
            }
        })
    }

    handleButtonClick = e => {
        e.preventDefault();
    };

    return(
            <div>
    <form>
        <h4>Please provide your contace information and the amount you wish to contribute to
                            {props.school.schoolName}</h4>
        <p>
            <input
                type="text"
                name="name"
                value={this.state.donorName}
                onChange={this.handleChanges}
                placeholder="Enter your name"
            />

        </p>
        <p>
            <input
                type="text"
                name="address"
                value={this.state.donorAddress}
                onChange={this.handleChanges}
                placeholder="Enter your address"
            />

        </p>
        <p>
            <input
                type="text"
                name="name"
                value={this.state.donationAmount}
                onChange={this.handleChanges}
                placeholder="Amount you wish to donate"
            />

        </p>

        <button onClick={this.handleButtonClick} type="submit">Donate</button>

    </form>
            </div >
        )
}

export default DonorForm