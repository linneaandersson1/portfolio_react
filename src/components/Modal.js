import React from "react";


const Modal = ({closeModal, children}) => {
    return (
        <div className="overlay">

      <div className="content">

        <div onClick={closeModal}>X</div>

        {children}

      </div>

    </div>
    )
}

export default Modal;


// import React, {useState} from "react";
// import Modal from "react-modal";

// Modal.setAppElement("#root");

// function Modal () {
//     const [isOpen, setIsOpen] = useState(false);
//     const toggleModal = () => {
//         setIsOpen(!isOpen);
//     };
   
//     return (
//         <>
//         <button className="popup" onClick={toggleModal}>Call Me!</button>
//         <Modal isOpen={isOpen} onRequestClose={toggleModal} contentLabel="Call Me">
//             <div>Call me at: 2929293</div>
//             <button onClick={toggleModal}>Close modal</button>
//         </Modal>
//         </>
//     );
// };

// export default Modal;