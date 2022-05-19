import React from "react";
import PanelOne from "./PanelOne";
import PanelTwo from "./PanelTwo";

const Home = () => {
    return (
        <>
            <h1>Home page</h1>
            <p>Tidigare projekt</p>
        
                <PanelOne />
                <PanelTwo />
        </>
    );
};

export default Home;