import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
// import {Gallery} from "./components/Gallery";
import Header from "./components/Header";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Form from "./components/Form";
import Gallery from "./components/Gallery";


// import Panels from "./components/Panels";


function App() {
  return (
    <BrowserRouter>
      <div>
        <Header />
      </div>
      <div className="container">
        <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/about" exact element={<About />}/>
            <Route path="/gallery" exact element={<Gallery />}/>
            <Route path="/contact" exact element={<Contact />}/>
            <Route path="/form" exact element={<Form />}/>
        </Routes>
      </div>
      <div>
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;
