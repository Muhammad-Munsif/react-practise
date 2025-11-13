import React, { useState } from "react";

const Component = () => {
  const [count, setCount] = useState(5);

  return (
    <div>
      <h1>Count:{count}</h1>
      <div className="flex gap-3">
      <button onClick={() => setCount(count + 5)} className="bg-amber-300 text-2xl px-4 py-2 text-indigo-700 rounded-lg outline-none hover:cursor-pointer ">Add the count</button>
      <button onClick={() => setCount(count - 5)} className="bg-amber-300 text-2xl px-4 py-2 text-indigo-700 rounded-lg outline-none hover:cursor-pointer ">minus the count</button>
      </div>
    </div>
  );
};

export default Component;
