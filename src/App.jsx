// import { useState } from "react";
// import "antd/dist/reset.css"; // For antd v5
// import Toggle from "./components/Toggle";
// import ValidatedSignupForm from "./components/ValidationSignupForm";
// // or for older versions
// // import 'antd/dist/antd.css';
// // import Component from "./components/Component";
// // import Jsx from "./components/Jsx";
// // import Form from "./components/Form";
// // import Table from "./components/Table";
// // import RandomUsers from "./components/RandomUsers";
// // import ReqResUsers from "./components/ReqResUsers";
// // import UserManagement from "./components/UsersManagement";
// // import HandleTable from "./components/HandleTable";

// function App() {
//   return (
//     <div className="bg-gray-200 p-5 mx-auto min-h-screen ">
//       <ValidatedSignupForm/>
//       {/* <Toggle/> */}
//       {/* <HandleTable/> */}
//       {/* <RandomUsers />
//       <ReqResUsers />
//       <UserManagement />
//       <Table />
//       <Form />
//       <Component />
//       <Jsx /> */}
//     </div>
//   );
// }

// export default App;


import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import ProductCard from './components/ProductCard'; // Make sure the path is correct
import EcommerceNavbar from './components/EcommerceNavbar';

// Sample data for demonstration
const productsData = [
  { id: 1, name: "Luxury Smartwatch X", price: 299.99, imageUrl: 'https://picsum.photos/id/237/286/180', description: "A high-end smartwatch with advanced fitness tracking and long battery life.", isSale: true, stock: 5 },
  { id: 2, name: "Premium Leather Backpack", price: 89.50, imageUrl: 'https://picsum.photos/id/161/286/180', description: "Durable and stylish backpack perfect for daily commute or travel.", isSale: false, stock: 12 },
  { id: 3, name: "Wireless Noise-Cancelling Headphones", price: 150.00, imageUrl: 'https://picsum.photos/id/15/286/180', description: "Immersive sound quality with industry-leading noise cancellation.", isSale: false, stock: 0 }, // Out of Stock example
  { id: 4, name: "Ergonomic Office Chair", price: 350.75, imageUrl: 'https://picsum.photos/id/21/286/180', description: "Designed for maximum comfort and support during long work sessions.", isSale: true, stock: 8 },
];

function App() {
  return (
    <>
    <EcommerceNavbar/>
    <Container className="my-5">
      <h1 className="mb-4 text-center">Featured Products</h1>
      
      {/* The Row component holds the grid. 
        The xs, md, and lg props on Col define the responsiveness:
        - xs={12}: Takes up full width on extra small screens (1 item per row)
        - md={6}: Takes up half width on medium screens (2 items per row)
        - lg={3}: Takes up one-quarter width on large screens (4 items per row)
      */}
      <Row>
        {productsData.map(product => (
          <Col key={product.id} xs={12} md={6} lg={3} className="mb-4">
            <ProductCard product={product} />
          </Col>
        ))}
      </Row>
    </Container>
    </>
  );
}

export default App;
