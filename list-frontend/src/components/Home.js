import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {

    return (
        <div className="topnav">
            <Link className="active" to={'/'}>Home</Link>
            <Link to={'/lists'}>Lists</Link>
            <Link to={'/search'}>Search</Link>
        </div>
    )

}

export default Home