import React, { useState } from "react";
import { useEffect } from "react";

export default function MiguelCounter() {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    console.log("state has changed");
  }, [counter])

  return (
    <div>
      <h1>Miguel Counter</h1>
      <button onClick={() => setCounter(counter + 1)}>Add 1</button>
      <p>The number goes up by 1 with every click: {counter}</p>
    </div>
  );
}
