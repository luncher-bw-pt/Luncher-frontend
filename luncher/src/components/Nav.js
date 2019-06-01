import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';


const Nav = () => {
    return (
        <div className="navigation"> 
            <div className="tabs">
                <NavLink exact to="/">Home</NavLink>
                <NavLink to="/donor">Donor</NavLink>
                <NavLink to="/school">Schools</NavLink>
                <NavLink to="/admin">Admin</NavLink>
            </div>
        </div>
    );
};

export default Nav;