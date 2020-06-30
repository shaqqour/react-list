import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {

    return (
        <div className="topnav">
            <Link to={'/lists'}>Lists</Link>
            <Link to={'/search'}>Search</Link>
        </div>
    )

}

export default NavBar