import React, { useRef, useState } from "react";

const CounterRef = () => {
  const counterRef = useRef(0);
  const [, forceUpdate] = useState(false);
  const handleClick = () => {
    counterRef.current += 1;
    forceUpdate((prev) => !prev);
  };

  const string1 = "ABCDEFG";
  let string2 = "";

  let string3 = (string2 += string1);
  console.log(string3);
  return (
    <div>
      <h1>Counter REF</h1>

      <h1>{counterRef.current}</h1>
      <button onClick={handleClick}>Increment</button>
    </div>
  );
};

export default CounterRef;
