import React from "react";
import List from "./List";
import { Link } from "react-router-dom";

const About = () => {
    return (
        <div style={{marginTop: "10px"}} className="container">
            <h1>About page</h1>
            <List />
            <div className="link__list">
                <ul>
                    <li>Page 1</li>
                    <li>Page 2</li>
                    <li>Page 3</li>
                </ul>
            </div>
        </div>
    );
};

export default About;