import React from "react";
import { useState } from "react";

const NewForm = () => {
    const [inputData, setInputData] = useState({
        firstName: "",
        message: "",
    });

    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;

        setInputData({...inputData, [name]: value});
    };

    const [messageArray, setMessageArray] = useState([]);

    const handleSubmit = (e) => {
        e.preventDefault();

        const newInput = {
            ...inputData,
            id: new Date().getTime().toString(),
        };

        setMessageArray([...messageArray, newInput]);

        setInputData({
            firstName: "",
            message: "",
        });
    };

    return (
        <>
            <form>
                <label htmlFor="name">First Name</label>
                <input onChange={handleChange} type="text" name="firstName" id="firstName" value={inputData.firstName} />
                <label htmlFor="message">Message</label>
                <input onChange={handleChange} type="text" name="message" id="message" value={inputData.message} />
                <button type="submit" onClick={handleSubmit}>Submit</button>
            </form>
            {messageArray.map((user, i) => {
                const {firstName, message} = user;
                return (
                    <div className="message-div" key={i}>
                        <p>Name: {firstName}</p>
                        <p>Messsage: {message}</p>
                    </div>
                )
            })}
            
        </>
    );
};

export default NewForm;