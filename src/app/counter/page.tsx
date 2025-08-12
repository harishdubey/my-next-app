"use client";
import Link from "next/link";
import { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);
  const increment = () => {
    setCount(count + 1);
  };
  const decrement = () => {
    setCount(count - 1);
  };
  const reset = () => {
    setCount(0);
  };
  return (
    <div>
      <h1>Counter Page</h1>
      Counter : {count}
      <div
        style={{
          paddingTop: "25px",
        }}
      >
        <button onClick={increment}>Increment</button> {"  "}
        <button onClick={decrement}>Decrement</button>
        {"  "}
        <button onClick={reset}>Reset</button>
        {"  "}
      </div>
      <div style={{ paddingTop: "25px" }}>
        <Link href="/">Back to Home</Link>
      </div>
    </div>
  );
};

export default Counter;
