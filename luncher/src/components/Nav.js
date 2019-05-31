import React, { Component } from 'react';
import { Link } from 'react-router-dom';


const Nav = () => {
    return (
        <div className="navigation"> 
            <div className="tabs">
                <Link to="/">Home</Link>
                <Link to="/donor">Donor</Link>
                <Link to="/school">Schools</Link>
                <Link to="/admin">Admin</Link>
            </div>
        </div>
    );
};

export default Nav;