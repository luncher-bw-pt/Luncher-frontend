import React from 'react';
import {  Link, NavLink } from 'react-router-dom';


const Nav = () => {
    return (
        <div className="navigation"> 
            <div className="tabs">
                <NavLink exact to="/">Home</NavLink>
                <NavLink to="/donor">Donor</NavLink>
                {/* <NavLink to="/school">Schools</NavLink> */}
                <Link to="/adminLoggedIn">Add A School</Link>
                {/* <Link to="/adminLoggedIn">Protected</Link> */}
            </div>
           
        </div>
    );
};

export default Nav;