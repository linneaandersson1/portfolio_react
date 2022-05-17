// console.log(Gallery);
// console.log(Gallery[0]);

const Gallery = document.querySelectorAll(".panel");
// const [active, setActive] = useState(0);
// jag måste nog göra hela galleriet här i react för att kunna använda state



Gallery.forEach(panel => {
    // add an eventListener to listen to the click
    panel.addEventListener("click", () => {
        // remove "active" class function will run if clicked, and then "active" class will be added to clicked panel
        removeActiveClass();
        panel.classList.add("active");
    });
});

// this function could be written inside but this is more clean
function removeActiveClass() {
    Gallery.forEach((panel) => {
        //remove all active panel classes
        panel.classList.remove("active");
    });
}

export default Gallery;