import React from "react";
import Modal from "./Modal";

const Contact = () => {
    const [show, setShow] = useState(false);

    return (
        <div style={{marginTop: "10px"}} className="container">
           {show && (
               <Modal closeModal={() => setShow(false)}>
                <h1>Info about booking a call!</h1>
               </Modal> 
           )}

           <div>
               <button className="modal-btn" onClick={() => setShow(true)}>
                   Book a call
               </button>
           </div>

        </div>
    );
};

export default Contact;