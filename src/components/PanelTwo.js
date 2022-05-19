import React from "react";
import house from "../images/house1-s.png";

const PanelTwo = () => {
    return (
        <div className="container">
            <img className="panel" src={house} alt="House" height={600} width={450}></img>
            <h3>House</h3>
        </div>
    );
};

export default PanelTwo;