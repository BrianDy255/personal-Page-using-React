import React from "react";

function Card(props) {
    return (
        <div >
            <p className="cardtitle">{props.item.title}</p>
            <img src={`https://642744a59dfe1800086f28c3--candid-paprenjak-0ca4a2.netlify.app/public/images/travel/${props.item.coverImg}`} className="travelpic"/>
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