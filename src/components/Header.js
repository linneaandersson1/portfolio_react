import { Link } from "react-router-dom";
import React from "react";

const Header = () => {
    return (
        <header className="header">
            <nav>
                <ul>
                    <Link className="links" to="/">Home</Link>
                    <Link className="links" to="/about">About</Link>
                    <Link className="links" to="/contact">Contact</Link>
                </ul>
            </nav>
        </header>
    );
};

export default Header;