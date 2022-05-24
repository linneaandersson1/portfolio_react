import { Modal } from "bootstrap";
import React, {useState} from "react";

const Modal = ({setShowModal, children}) => {

    return (
        <>
         <div style={{marginTop: "10px"}} className="container">
         {children}
        <div onClick={closeModal}>X</div>
        </div>
        </>
    );
};

export default Modal;