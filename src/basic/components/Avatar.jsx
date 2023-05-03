import React from "react";

export default function Avartar(props) {

    return (
        <div className="avatar">
            <img className='photo' src={props.image} alt='avatar'/>
            {props.isNew && <span className='new'>New</span>}
        </div>
    );
}