import React, { useState } from 'react';
import  './App.css';

const Counter = () => {
  const [count, setCount] = useState(0);

  const incrementCount = () => {
    setCount(count + 1);
  };

  const decrementCount = () => {
    setCount(count - 1);
  };

  return (
    <>
    <div>
      <h1 className="text-3xl font-bold  text-success">
      Counter
    </h1>
           <p className='my-3'>Count: {count}</p>
           <button className="btn btn-outline btn-secondary mx-3"onClick={incrementCount}>Increment</button>
           <button className="btn btn-outline btn-primary mx-2 my-3 " onClick={decrementCount}>Decrement </button>
           
    </div>
    </>
  );
};

export default Counter;