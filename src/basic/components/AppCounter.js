import React, { useState } from "react"
import './App.css';
import Counter from "./Counter";

export default function AppCounter() {

  const [count, setCount] = useState(0);
  const handleClick = () => setCount(prev => prev + 1);

  return (
    <div>
      <div>total count : {count}  {count > 10 ? "fire" : "ice"}</div>
      <Counter count={count} countClick={handleClick}/>
      <Counter count={count} countClick={handleClick}/>
    </div>
  );
}