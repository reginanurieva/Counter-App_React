import React, { Component } from 'react';

// Stateless functional component 

// if we have multiple references to the props, we can use object distructuring
// we can destructure props argument const NavBar = (props) 

const NavBar = ({totalCounters}) => {
    return ( 
        <nav className="navbar navbar-light bg-light">
        <a className="navbar-brand" href="#">
        Navbar <span className="badge badge-pill badge-secondary">
        {totalCounters}
        </span>
        </a>
    </nav>
     );
};

 
export default NavBar;