import React, {useState} from "react";
import Modal from "react-modal";

Modal.setAppElement("#root");

function Modal () {
    const [isOpen, setIsOpen] = useState(false);
    const toggelModal = () => {
        setIsOpen(!isOpen);
    };
   
    return (
        <>
        <button className="popup" onClick={toggleModal}>Call Me!</button>
        <Modal isOpen={isOpen} onRequestClose={toggelModal} contentLabel="Call Me">
            <div>Call me at: 2929293</div>
            <button onClick={toggelModal}>Close modal</button>
        </Modal>
        </>
    );
};

export default Modal;