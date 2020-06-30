import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {

    return (
        <div className="topnav">
            <Link to={'/lists'}>Lists</Link>
            <Link to={'/search'}>Search</Link>
            <Link to={'/starred'}>Starred</Link>
        </div>
    )

}

export default NavBar