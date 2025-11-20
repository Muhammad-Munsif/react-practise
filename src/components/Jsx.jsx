import React from "react";
import ButtonDemo from "./ButtonDemo";
import FormDemo from "./FormDemo";

const Jsx = () => {
  const fiurt = "welcome";
  const vegetable = ["onion", "tomato", "potato", "garlic"];
  const person = {
    firstname: "smith",
    lastname: "Doe",
    classname: "lst",
    rollNo: 23,
    imageurl: "react.svg",
    address: "Peshawar",
  };
  return (
    <div>
      <h1>{fiurt}</h1>
      <ul className="">
        {vegetable.map((item, index) => (
          <li key={index} className="style-dice font-monospace">
            {item}
          </li>
        ))}
      </ul>
      <div className="w-4/5 mx-auto bg-white rounded-lg p-3 border-2 border-red-400">
      <ButtonDemo/>
        <div className="flex items-center justify-center gap-3 flex-col">
          <h1 className="text-center">Person details</h1>
          <details className="transition-all duration-300">
            <td className="text-center">
              <dd className="text-center font-monospace">{person.firstname}</dd>
              <dd className="text-center font-monospace">{person.lastname}</dd>
              <dd className="text-center font-monospace">{person.classname}</dd>
              <dd className="text-center font-monospace">{person.rollNo}</dd>
              <dd className="text-center font-monospace">{person.imageurl}</dd>
              <dd className="text-center font-monospace">{person.address}</dd>
            </td>
          </details>
        </div>
        <FormDemo/>
      </div>
    </div>
  );
};

export default Jsx;

