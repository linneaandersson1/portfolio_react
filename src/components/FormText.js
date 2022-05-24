import React from "react";

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

export default FormText;