import React from "react";

function Card(props) {
    return (
        <div >
            <p className="cardtitle">{props.item.title}</p>
            <img src={`https://github.com/BrianDy255/personal-Page-using-React/blob/main/public/images/travel/${props.item.coverImg}`} className="travelpic"/>
            <div className="carddescription">
                <p>Location: {props.item.location}</p>
                <p>Year Visited: {props.item.year}</p>
                <p>{props.item.description}</p>
            </div>
            <hr></hr>
        </div>
        
    )
}

export default Card;