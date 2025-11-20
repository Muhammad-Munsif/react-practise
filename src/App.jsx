import { useState } from "react";
import "antd/dist/reset.css"; // For antd v5
// or for older versions
// import 'antd/dist/antd.css';
import Component from "./components/Component";
import Jsx from "./components/Jsx";
import Form from "./components/Form";
import Table from "./components/Table";
import RandomUsers from "./components/RandomUsers";
import ReqResUsers from "./components/ReqResUsers";
import UserManagement from "./components/UsersManagement";

function App() {
  return (
    <div className="bg-gray-200 p-5 mx-auto min-h-screen ">
      <RandomUsers />
      <ReqResUsers />
      <UserManagement />
      <Table />
      <Form />
      <Component />
      <Jsx />
    </div>
  );
}

export default App;
