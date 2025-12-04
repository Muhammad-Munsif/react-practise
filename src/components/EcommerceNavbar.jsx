import React from 'react';
import { Navbar, Container, Nav, Form, Button, FormControl, Badge, Dropdown, InputGroup } from 'react-bootstrap';
import { Search, PersonCircle, Cart } from 'react-bootstrap-icons'; 
import 'bootstrap/dist/css/bootstrap.min.css';

// --- Dummy Data (Replace with your actual state/props) ---
const cartItemCount = 3;
const categories = ['Electronics', 'Apparel', 'Home Goods', 'Books'];
const isLoggedIn = true; 
// --------------------------------------------------------

function EcommerceNavbar() {
  return (
    // Dark background for a premium look, fixed top
    <Navbar bg="dark" variant="dark" expand="lg" fixed="top" className="shadow-lg">
      <Container fluid>
        
        {/* 1. Brand/Logo */}
        <Navbar.Brand href="/" className="fs-4 fw-bold text-info me-5">
          🛍️ **E-Shop**
        </Navbar.Brand>
        
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        
        <Navbar.Collapse id="responsive-navbar-nav">
          
          {/* 2. Main Category Navigation (Left Side) */}
          <Nav className="me-auto">
            
            <Nav.Link href="/home">Home</Nav.Link>

            {/* Category Dropdown */}
            <Dropdown>
                <Dropdown.Toggle as={Nav.Link} id="nav-dropdown-categories">
                    Shop Categories
                </Dropdown.Toggle>

                <Dropdown.Menu variant="dark">
                    {categories.map((category, index) => (
                        <Dropdown.Item key={index} href={`/categories/${category.toLowerCase().replace(' ', '-')}`}>
                            {category}
                        </Dropdown.Item>
                    ))}
                    <Dropdown.Divider />
                    <Dropdown.Item href="/clearance">Clearance</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
            
            <Nav.Link href="/about">About Us</Nav.Link>
          </Nav>

          {/* 3. Search Bar (Prominent and Centered) */}
          <Form className="d-flex mx-lg-5 my-2 my-lg-0">
            <InputGroup>
              <FormControl
                type="search"
                placeholder="Search products..."
                aria-label="Search"
                style={{ width: '250px' }} 
              />
              <Button variant="outline-info">
                <Search />
              </Button>
            </InputGroup>
          </Form>

          {/* 4. Utility Icons (Cart and Account - Right Side) */}
          <Nav className="ms-auto"> 
            
            {/* Account/Profile Link */}
            {isLoggedIn ? (
                <Nav.Link href="/profile">
                    <PersonCircle size={24} className="me-1" /> Profile
                </Nav.Link>
            ) : (
                <Nav.Link href="/login">
                    Sign In
                </Nav.Link>
            )}

            {/* Cart Icon and Count */}
            <Nav.Link href="/cart" className="position-relative ms-3">
            <Cart size={24} className="me-1" />
              Cart
              {/* Badge for item count */}
              <Badge 
                pill 
                bg="danger" 
                className="position-absolute top-0 start-100 translate-middle"
              >
                {cartItemCount}
              </Badge>
            </Nav.Link>
          </Nav>
          
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default EcommerceNavbar;