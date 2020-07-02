import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';


function Navbar (props) {
    return (
        <div className="sidenav">
            <Link to="/">Home</Link>
            <Link to="/news/hey">News 1</Link>
            <Link to="/news/hoy">News 2</Link>
            <Link to="/news/hahakdog">News 3</Link>
            <Link to="/contact">Contact</Link>
            <Link to="/about">About</Link>
      </div>
    )
};

export default Navbar;