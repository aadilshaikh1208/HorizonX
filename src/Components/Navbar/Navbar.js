import React from 'react';
import './Navbar.css';

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="navbar-logo">
                {/* You can replace this with an actual logo image */}
                <h1>HorizonX</h1>
            </div>
            <ul className="navbar-links">
                <li><a href="/buy">Buy</a></li>
                <li><a href="/sell">Sell</a></li>
                <li><a href="/rent">Rent</a></li>
            </ul>
            <div className="navbar-buttons">
                <button className="login-btn">Log in</button>
                <button className="signup-btn">Sign Up</button>
            </div>
        </nav>
    );
}

export default Navbar;
