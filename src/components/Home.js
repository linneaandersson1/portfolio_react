import React from "react";
import PanelOne from "./PanelOne";
import PanelTwo from "./PanelTwo";
import NewForm from "./NewForm";


const Home = () => {
    return (
        <>
            <h1>Home page</h1>
            <p>Tidigare projekt</p>
                <NewForm/>
                <div>   djdo   </div>
                <PanelOne />
                <PanelTwo />
        </>
    );
};

export default Home;