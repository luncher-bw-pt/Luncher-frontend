import React, { Component } from 'react';

const AdminCreateSchool = (props) => {



    render() {
        return (
            <div>
                <p>
                    School Name:    <input
                                        type="text"
                                        name="name"
                                        value={this.state.newSchool.schoolName}
                                        onChange={this.handleChanges}
                                        placeholder="Enter school's name here" />
                </p>
                <p>
                    School State:    <input
                                        type="text"
                                        name="state"
                                        value={this.state.newSchool.state}
                                        onChange={this.handleChanges}
                                        placeholder="State" />
                </p>
                <p>
                    School State:    <input
                                        type="text"
                                        name="zip"
                                        value={this.state.newSchool.zip}
                                        onChange={this.handleChanges}
                                        placeholder="ZIP Code" />
                </p>
                <p>
                    School State:    <input
                                        type="text"
                                        name="fundsNeeded"
                                        value={this.state.newSchool.fundsNeeded}
                                        onChange={this.handleChanges}
                                        placeholder="Amount" />
                </p>
                <p>
                    School State:    <input
                                        type="text"
                                        name="contact"
                                        value={this.state.newSchool.contact}
                                        onChange={this.handleChanges}
                                        placeholder="Contact email" />
                </p>
                <button>Save</button><button>Cancel</button>
            </div>


        )
    }


    }



export default AdminCreateSchool