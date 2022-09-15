import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div>
            <h1>Home</h1>
            <p>1st page</p>
            <ul>
                <li><Link to='/about'>소개</Link></li>
                <li><Link to='/profiles/mangmang'>mangmang profile</Link></li>
                <li><Link to='/profiles/dangdang'>dangdang profile</Link></li>
                <li><Link to='/profiles/void'>undefined profile</Link></li>
                <li><Link to='/articles'>post list</Link></li>
            </ul>
            <Link to='/about'>about</Link>
        </div>
    );
};

export default Home;