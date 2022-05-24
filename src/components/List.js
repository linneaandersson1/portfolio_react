import React from "react";
import { useState } from "react";
import InterestList from "./InterestList";

const myInterests = [
    {interest: "Coding"},
    {interest: "Creating documentaries"},
    {interest: "Art"},
    {interest: "Pets"},

]

const List = () => {
    const [isInterest, setInterest] = useState(myInterests);
    return (
        <div>
            <h2>My interests are:</h2>
            {isInterest.map((p, i) => {
                return (
                    <InterestList key={i} interest={p.interest}/>
                )
            })}
        </div>
    );
};

export default List;