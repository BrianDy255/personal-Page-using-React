import React from "react";
import ImageSlider from "../components/imageslider.jsx";
import PetsData from "../components/petsdata.js";

function MyPets() {
    return (
        <div>
            <h1>A gallery of some of the pets that I've had over the years. </h1>
            <ImageSlider slides={PetsData}/>
            
        </div>
    )
}

export default MyPets;