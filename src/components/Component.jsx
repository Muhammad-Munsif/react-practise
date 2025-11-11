import React, { useState } from "react";

const Component = () => {
  const [count, setCount] = useState();

  return (
    <div>
      <h1>Count:{count}</h1>
      <button onClick={() => setCount(count + 1)}>Add the count</button>
    </div>
  );
};

export default Component;
