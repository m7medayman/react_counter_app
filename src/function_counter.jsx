import React, { useState } from 'react';
import "./Counter.css";


const CounterFunc=()=>{
  // Use useState to manage the 'count' state variable
  const [count, setCount] = useState(0);

  // Function to increment the count
  const increment = () => {
    setCount(count + 1);
  };

  // Function to decrement the count
  const decrement = () => {
    setCount(count - 1);
  };

  // Render the counter UI
  return (
    <div className="counter-container">
      <h1 className="counter-display">Counter: {count}</h1>
      <button className="counter-button" onClick={increment}>
        Increment
      </button>
      <button className="counter-button" onClick={decrement}>
        Decrement
      </button>
    </div>
  );
};
export default CounterFunc;