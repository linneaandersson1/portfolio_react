import React from "react";



// Här har jag försökt skriva om galleri uppgiften i javascript till react, jag får error för att jag 
// skriver 

// import {useState} from "react";

// const Panels = () => {
//     const [active, setActive] = useState(0);
//     return (
//         // const addedClass = "active";
//         // if (this.props.isActive) {
//         //     addedClass += "panel active";
//         // } {
//         //     addedClass -= "active";
//         // }
//         <div className="container">
//             <div className="panel {activePanel}" onClick={setActive} style="background-image: url('https://images.unsplash.com/photo-1487837647815-bbc1f30cd0d2?ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MnwyMTk0OTgyfHxlbnwwfHx8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60');">
//                 <h3>Stairway</h3>
//             </div>
//         </div>
//     );
// };



// hittade den här koden på nätet och har ändrat den lite för att fungera men inget visas på skärmen från den här koden

// function Panels (props) {
//     const [isActive, setActive] = useState(false);
  
//     const toggleClass = () => {
//       setActive(!isActive);
//     };
  
//     return (
//         <div className="container">
//             <div className={isActive ? 'panel active': `panel`} onClick={toggleClass}  style="background-image: url('https://images.unsplash.com/photo-1487837647815-bbc1f30cd0d2?ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MnwyMTk0OTgyfHxlbnwwfHx8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60');">
//                 <h3>Stairway</h3>
//             </div>
//         </div>
//      );
//   };

// export default Panels;