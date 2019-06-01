import React from 'react';
import axios from 'axios';


class Login extends React.Component {
    constructor() {
        super();
        this.state = {
            username: '',
            password: '',
            token: ''
        };
    }

    loginHandler = e => {
        e.preventDefault()
        console.log('Login Successful')
        let user = {username: this.state.username,
                    password: this.state.password
                }
        console.log(user)
        axios
            .post('https://luncher-backend.herokuapp.com/api/login', user)
            .then(res => {
                localStorage.setItem('token', (res.data.token));
            })
            .catch(err => console.error('login error:', err))
    }

    changeHandler = e => {
        const {name, value} = e.target;
        this.setState({[name]: value});
    }

    render() {
        return (
            <div className="login-section">
                <form > 
                    <input 
                        name="username"
                        placeholder="Username"
                        type="text"
                        onChange={this.changeHandler}
                    />
                    <input 
                        name="password"
                        placeholder="Password"
                        type="text"
                        onChange={this.changeHandler}
                    /> 
                </form>

                <div className="login-form-button">
                    <button onClick={this.loginHandler}>LOGIN</button>
                </div>
            </div>
        )
    }
};


export default Login;


