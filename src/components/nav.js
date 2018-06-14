import React from 'react';
import { Link } from 'react-router-dom';

const Nav = props => {
    const navStyle = {
        padding: '0 10px'
    };

    return (
        <nav className="grey darken-2" style={navStyle}>
            <div className="nav-wrapper">
                <Link to="/" className="brand-logo">Chatty App</Link>

                <ul className="right">
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/chat-rooms">Chat Rooms</Link>
                    </li>
                    <li>
                        <Link to="/create-room">Create Chat Room</Link>
                    </li>
                    <li>
                        <Link to="/sign-up">Sign Up</Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default Nav;
