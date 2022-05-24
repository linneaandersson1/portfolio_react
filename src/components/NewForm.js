import React from "react";
import { useState } from "react";

const NewForm = () => {
    // const [firstName, setFirstName] = useState("");
    // const [message, setMessage] = useState("");
    const [inputData, setInputData] = useState({
        firstName: "",
        message: "",
    });

    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;

        setInputData({...inputData, [name]: value});
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(inputData);
        // setFirstName("");
        // setMessage("");
        MessagePopup();
        setInputData({
            firstName: "",
        message: "",
        });
    };

    return (
        <form>
            <label htmlFor="name">First Name</label>
            <input onChange={handleChange} type="text" name="firstName" id="firstName" value={inputData.firstName} />
            <label htmlFor="message">Message</label>
            <input onChange={handleChange} type="text" name="message" id="message" value={inputData.message} />
            <button type="submit" onClick={handleSubmit}>Submit</button>
        </form>
    );
};

const MessagePopup = () => {
    return (
        <div>hej</div>
    );
};

{/* <form>
<label htmlFor="firstName">First Name</label>
<input onChange={(e) => setFirstName(e.target.value)} type="text" name="firstName" id="firstName" value={firstName} />
<label htmlFor="message">Message</label>
<input onChange={(e) => setMessage(e.target.value)} type="text" name="message" id="message" value={message}/>
<button type="submit" onClick={handleSubmit}>Submit</button>
</form> */}

export default NewForm;