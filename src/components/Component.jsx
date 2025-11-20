import React, { useState } from "react";

const Component = () => {
  const [count, setCount] = useState(0);
  const [toggle, setToggle] = useState(false)
const buttonStyel = {
  backgroundColor : toggle ? 'lightblue' : 'lightdark',
  color: 'black',
  padding: '10px 30px',
  border: 'none',
  borderRadius: '5px',
  cursor: 'pointer',
}
const handleColorChange = () => {
  setToggle(!toggle)
  setCount(count + 1 , count - 1)
}
  return (
    <div>
      <h1>Count:{count}</h1>
      <div className="flex gap-3">
        <button
          onClick={() => setCount(count + 1)}
          className="bg-amber-300 text-2xl px-4 py-2 text-indigo-700 rounded-lg outline-none hover:cursor-pointer "
          >
          { count === 1 ? "text-gray-500" : "text-red-500"}
          Add the count
        </button>
        <button
          onClick={() => setCount(count - 1)}
          className="bg-amber-300 text-2xl px-4 py-2 text-indigo-700 rounded-lg outline-none hover:cursor-pointer "
        >
          minus the count
        </button>
        <button style={buttonStyel} className=" flex rounded-full " onClick={handleColorChange}>
          {toggle ? `${ count + 1} ON`  : `${count -1} OFF`}
        </button>
      </div>
      
    </div>
  );
};

export default Component;
