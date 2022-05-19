import React from "react";
import castle from "../images/castle2-s.png";
import house from "../images/house1-s.png";


const PanelOne = () => {
    return (
        <div className="panel-container ">
            <img className="panel" src={castle} alt="House" height={600} width={450}></img>
            <h3>Castle</h3>

            <img className="panel" src={house} alt="House" height={600} width={450}></img>
            <h3>House</h3>
        </div>
    );
};

export default PanelOne;