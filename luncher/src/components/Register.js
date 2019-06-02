import React from "react";
import axios from 'axios';


class Register extends React.Component {

  constructor() {
    super();
    this.state = {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      role: ""
    };
  }

  // const token= localStorage.getItem('jwt');
  // const reqOptions = {
  //   headers:{
  //     Authorization:token
  //   }
  // }



  registerHandler = (e) => {
    e.preventDefault()
    console.log('Sign Up Successful!')
    let user = {firstName: this.state.firstName, 
                lastName: this.state.password,
                email: this.state.email,
                password: this.state.password,
                role: this.state.role}
    console.log(user)
    axios
      .post('https://luncher-backend.herokuapp.com/api/register', user)
      .then(response => {
        console.log(response.data)
        localStorage.setItem('token', (response.data.token));
      })
      .catch(err => console.error("signup error:", err));
  }


  onChangeHandler = (e) => {
    const {name, value} = e.target;
    this.setState({[name]: value});
  };


  render() {
    return (
        <div className="register-section">
            <h1>Register Today!</h1>
            <form onSubmit={this.handleSubmit}> 
                <input 
                    name="firstName"
                    placeholder="First Name"
                    type="text"
                    onChange={this.handleChange}
                />
                <input 
                    name="lastName"
                    placeholder="Last Name"
                    type="text"
                    onChange={this.handlechange}
                /> 
                <input 
                    name="email"
                    placeholder="Email"
                    type="text"
                    onChange={this.handlechange}
                /> 
                <input 
                    name="password"
                    placeholder="Password"
                    type="password"
                    onChange={this.handlechange}
                /> 
                <input 
                    name="role"
                    placeholder="Role(Admin or Donor)"
                    type="text"
                    onChange={this.handlechange}
                /> 
            <div className="login-form-button">
                <button text="Register" onClick={this.registerHandler}>Register</button>
            </div>
            </form>

            
        </div>
    )
  }
};

export default Register;