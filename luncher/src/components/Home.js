import React from 'react';
import Login from './Login';
import Register from './Register';


const Home = () => {
    return (
        <div className="home-page"> 
            <Login />
            <Register />
           
        </div>
    );
};

export default Home;