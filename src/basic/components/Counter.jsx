import React, { useState } from "react"

export default function Counter(props) {
    const [clickCount, setClickCount] = useState(0);
    

    let num = 0;
    return (
        <div className='counter'>
            <span className="number">{clickCount} / {props.count}</span>
            <div></div>
            <button className="button" onClick={() => {
                setClickCount(clickCount + 1);
                props.countClick();
            }}>Add +</button>
        </div>
    )
}