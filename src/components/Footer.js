import { Link } from "react-router-dom";
import React from "react";

const Footer = () => {
    return (
        <footer className="footer">
            <div>
                <ul>
                    <Link className="links" to="/">Home</Link>
                    <Link className="links" to="/about">About</Link>
                    <Link className="links" to="/contact">Contact</Link>
                </ul>
            </div>
        </footer>
    );
};

export default Footer;