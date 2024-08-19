import React, { useState } from "react";

const Index = () => {
  const [count, setCount] = useState(0);

  const decrement = () => {
    // setCount(count + 1);
    // setCount(count + 1);
    setCount((prevcount) => {
      return prevcount + 1;
    });
    setCount((prevcount) => {
      return prevcount + 1;
    });
  };
  const increment = () => {
    setCount((prevcount) => {
      return prevcount - 1;
    });
    setCount((prevcount) => {
      return prevcount - 1;
    });
  };

  return (
    <div className="hello">
      <button onClick={increment}>-</button>
      <span>Count is:{count}</span>
      <button onClick={decrement}>+</button>
    </div>
  );
};

export default Index;
