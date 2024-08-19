import React, { useEffect, useState } from "react";

const Index = () => {
  const [pagewidth, sePagewidth] = useState(window.innerWidth);
  const [count, setCount] = useState(0);
  useEffect(() => {
    const resizehandler = window.addEventListener("resize", () => {
      sePagewidth(window.innerWidth);
    });
    console.log("I am coming back", count);
    return () => {
      window.removeEventListener("resize", resizehandler);
    };
  }, []);
  return (
    <div>
      <h1>useeffect</h1>

      <h1>{pagewidth}</h1>

      <p>Count is: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
};

export default Index;
