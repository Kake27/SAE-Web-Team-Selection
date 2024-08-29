import React from "react";

function Item (props) {
    return (
        <div className="benefit-item">
            <img src={props.src} alt="Benefit Image" />
            <h4>{props.heading}</h4>
            <p>{props.content}</p>
        </div>
    )

}

export default Item