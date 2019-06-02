import React, { Component } from 'react';
import {connect} from 'react-redux';
import {loginSuccess} from '../actions/LoginActions';

class Login extends Component {
    state = {
        creds:{
            email: '',
            password: ''
        }
    };

    // loginHandler = e => {
    //     e.preventDefault()
       
    //     let user = {username: this.state.username,
    //                 password: this.state.password
    //             } 
        
    //     axios
    //         .post('https://luncher-backend.herokuapp.com/api/login', user)
    //         .then(res => {
    //             localStorage.setItem('token', (res.data.token));
    //             const route = this.props.location.state.from || '/';
    //             // only fires if login call is successful
    //             this.props.history.push(route)
    //         })
    //         .catch(err => console.error('login error:', err))
    // }

    handleChange = (e) =>{
        e.preventDefault();
        this.setState({
            creds:{
                ...this.state.creds,
                [e.target.name] : e.target.value
            }
        });
    }

    // changeHandler = e => {
    //     const {name, value} = e.target;
    //     this.setState({[name]: value});
    // }

    handleSubmit = (e) =>{
        e.preventDefault();
        this.props.loginSuccess(this.state.creds)

    }

    render() {

        if(this.props.isloggedin){
            this.props.history.push("/")
        }

        console.log(this.props.loggedin, this.props.isfetching)
        return (
            <div className="login-section">
                <form onSubmit={this.handleSubmit}> 
                    <input 
                        name="email"
                        placeholder="Email"
                        type="text"
                        onChange={this.handleChange}
                    />
                    <input 
                        name="password"
                        placeholder="Password"
                        type="text"
                        onChange={this.handlechange}
                    /> 
                    <div className="login-form-button">
                <button value ="submit">LOGIN</button>
                </div>
                </form>

                
            </div>
        )
    }
}


const mapStateToProps = state =>({
    isloggedin:state.loggingIn,
    isfetching:state.isfetching
})

export default connect (
    mapStateToProps,
    {loginSuccess}
)(Login)
