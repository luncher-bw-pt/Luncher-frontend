import React from 'react';

import axios from 'axios';


class Login extends React.Component {
    constructor() {
        super();
        this.state = {
            username: "",
            password: '',
            token: ""
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
            .post('https://luncher-backend.herokuapp.com', user)
            .then(res => {
                console.log("LOGIN RESPONSE", res.data)
                localStorage.setItem('token', (res.data.token));
            })
            .catch(err => console.error('login error:', err))

    }

    render() {
        return (
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
                <button>LOGIN</button>
            
            </form>
        )
    }
};


export default Login;


