import { Link } from "react-router-dom";
import React from "react";

const Header = () => {
    return (
        <header className="header">
            <nav>
                <ul>
                    <Link className="links" to="/">Home</Link>
                    <Link className="links" to="/about">About</Link>
                    <Link className="links" to="/gallery">Gallery</Link>
                    <Link className="links" to="/contact">Contact</Link>
                    <Link className="links" to="/form">Form</Link>
                </ul>
            </nav>
        </header>
    );
};

export default Header;