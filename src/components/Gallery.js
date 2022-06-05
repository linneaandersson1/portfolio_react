import React from "react";
import { useState } from "react";
import Card from "./Card";

const Gallery = () => {
    const [images, setImages] = useState([
        {url: "http://source.unsplash.com/random/1"},
        {url: "http://source.unsplash.com/random/2"},
        {url: "http://source.unsplash.com/random/3"},
        {url: "http://source.unsplash.com/random/4"},
        {url: "http://source.unsplash.com/random/5"},
        {url: "http://source.unsplash.com/random/6"},
    ]);

    const getNewImages = () => {
        setImages([...images, {
            url: `http://source.unsplash.com/random/${Math.floor(Math.random() * 100)}`,
        }])
    }
    // ...images = when we update our state for our images, do not overwrite the old data, keep old values (images)
    // we're adding an object {} since we specified our old state to be and object, new has to be object as well

    const removeImage = () => {
        setImages(images.slice(0, -1));
    };

    return (
        <section className="hero">
            <div className="cardContainer">
                <Card images={images} />
            </div>
            <div className="btnContainer">
                <button onClick={getNewImages} className="button-style">Add</button>
                <button onClick={removeImage} className="button-style">Remove</button>
            </div>
        </section>
    )
}
/* 
We're only gonna handle images in this component which meand we probably only need a state for that
1. create images state
2. create jsx that return
3. create reusable card compnonent that display the image
4. make sure we grab the images from unsplash
5. addImage method we should ass the correct url for random image(unsplash does not need fetch api)

Challenge

Look at Todo app and add id to the images and create a better delete function
*/

export default Gallery;