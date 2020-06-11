import React, {useState, useEffect} from "react";

const Image = props => {
    console.log(props.data)
    console.log('Image working')
    return (
        
        <div className="container">
            <h1>{props.data.title}</h1>
            <p>{props.data.date}</p>
            <img alt="pic_of_day" src={props.data.url} />
            <p>{props.data.explanation}</p>
        </div>
    )
}

export default Image