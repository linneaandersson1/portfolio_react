import React from "react";
import { useState } from "react";
// import FormText from "./FormText";

const Form = () => {
    const [email, setEmail] = useState("");
    const [firstName, setFirstName] = useState("");
    const [text, setText] = useState("");

//försökte ha functionen FormText i en egen komponent men då blev värdena undefined så la in den här men den vill inte köra när man trycker på knappen
    const FormText = () => {
        return (
            <div>
                <h2>You sent this message:</h2>
                <p>Your email: {email}</p>
                <p>Your name: {firstName}</p>
                <p>Your text: {text}</p>
    
            </div>
        );
    };
       
    return (
        <form className="pt-3">
            <div className="form-group mb-3">
                <label className="form-label">Email</label>
                <input type="email" className="form-control" placeholder="Enter email" value={email} onChange={(e) => setEmail(e.target.value)}/>
            </div>
            <div className="form-group mb-3">
                <label className="form-label">Name</label>
                <input type="text" className="form-control" placeholder="Enter name" value={firstName} onChange={(e) => setFirstName(e.target.value)}/>
            </div>
            <div className="form-group mb-3">
                <label className="form-label">Text</label>
                <input type="text" className="form-control" placeholder="Enter message" value={text} onChange={(e) => setText(e.target.value)}/>
            </div>
            <button disabled={!email || !firstName || !text} className="btn btn-primary" onClick={FormText}>
                Send
            </button>
        </form>
    );
};

// {handleSubmit, email, setEmail, name, setName, text, setText}

export default Form;