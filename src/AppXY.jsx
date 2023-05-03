import React, { useState } from 'react';
import './AppXY.css';

export default function AppXY() {

  const [where, setWhere] = useState({X: 0, Y:150})
  const handleMouseMove = (event) => {
    // setWhere({X: event.clientX, Y: event.clientY});
    setWhere(prev => ({...prev, X: event.clientX}));
  }
 
  return (
    <div className='container' onMouseMove={handleMouseMove}>
      <div className='pointer' >
        {/* <img className='dot' src='logo192.png' style={{top: where.Y, left: where.X}}></img>
         */}
         <img className='dot' src='logo192.png' style={{transform: `translate(${where.X}px, ${where.Y}px)`}}></img>
      </div>
    </div>
  );
}