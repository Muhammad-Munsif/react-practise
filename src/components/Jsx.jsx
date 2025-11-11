import React from "react";

const Jsx = () => {
  const fiurt = "welcome";
  const vegetable = ['onion', 'tomato', 'potato', 'garlic']
  return(
    <div>
      <h1>{fiurt}</h1>
      <ul style={{fontSize:''}}>
      {
        vegetable.map((item,index) =>(
          <li key={index}>{item}</li>
        ))
      }
      </ul>
    </div>
  )
};

export default Jsx;
