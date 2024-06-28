import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import '../global.css';

const Header = () => {
    return (
        <header className="header">
            <div className="header-content">
                <Link to="/" className="title-link">
                    <h1>Reactathon</h1>
                </Link>
                <nav>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/registration">Registration</Link></li>
                        <li><Link to="/problem-statements">Problem Statements</Link></li>
                        <li><Link to="/location">Location</Link></li>
                        <li><Link to="/login">Login</Link></li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Header;

