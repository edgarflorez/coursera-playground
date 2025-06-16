import React, { useState } from "react";
export default function Increment() {
  const [number, setNumber] = useState(1);

  function increment() {
    setNumber((prevNumber) => prevNumber + 1);
  }

  return (
    <>
      <h1 data-testid="currentNumber"> {number} </h1>
      <button data-testid="addOne" onClick={increment}>
        Increment by One
      </button>
    </>
  );
}
