import React, { Component } from 'react';
import {withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import {loginSuccess} from '../actions/LoginActions';


class Login extends Component {
    state = {
        creds:{
            email: '',
            password: ''
        }
    };

    handleChange = (e) =>{
        e.preventDefault();
        this.setState({
            creds:{
                ...this.state.creds,
                [e.target.name] : e.target.value
            }
        });
    }

    handleSubmit = (e) =>{
        e.preventDefault();
        console.log(this.state.creds);
        this.props.loginSuccess(this.state.creds)
            .then(() => {
                this.props.history.push('/adminLoggedIn');
            });

    } 

    render() {
        console.log(this.props.loggedin, this.props.isfetching)
        return (
            <div className="login-section">
                <h1>Login</h1>
                <form onSubmit={this.handleSubmit}> 
                    <input 
                        name="email"
                        placeholder="Email"
                        type="text"
                        value={this.state.creds.email}
                        onChange={this.handleChange}
                    />
                    <input 
                        name="password"
                        placeholder="Password"
                        type="password"
                        value={this.state.creds.password}
                        onChange={this.handleChange}
                    /> 
                    <div className="login-form-button">
                <button>LOGIN</button>
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

export default withRouter(connect (
    mapStateToProps,
    {loginSuccess}
)(Login))
