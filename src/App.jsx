import { useState } from "react";
import Component from "./components/Component";
import Jsx from "./components/Jsx";
import Form from "./components/Form";
import Table from "./components/Table";

function App() {
  return (
    <div className="bg-gray-200 p-5 mx-auto min-h-screen ">
      <Table/>
      <Form />
      <Component />
      <Jsx />
    </div>
  );
}

export default App;
