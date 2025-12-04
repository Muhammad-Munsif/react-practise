import React, { useState } from "react";
import { Form, Button, Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

function ValidatedSignupForm() {
  // 1. State for controlling validation feedback display
  const [validated, setValidated] = useState(false);

  // 2. State for form data and custom error checking
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    agreed: false,
  });

  // Function to check if password is valid (custom rule)
  const isPasswordValid = formData.password.length >= 6;

  // Handler for all input changes
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    event.preventDefault(); // Stop default HTML submission

    // Use native browser validation check AND custom checks
    if (form.checkValidity() === false || !isPasswordValid) {
      event.stopPropagation(); // Stop event propagation if form is invalid
    }

    // Set 'validated' to true to show all feedback styles
    setValidated(true);

    // If both native checks and custom checks pass
    if (form.checkValidity() === true && isPasswordValid) {
      console.log("Form is valid. Submitting data:", formData);
      alert("Registration successful!");
    }
  };

  return (
    <Container className="my-5 bg-white p-4 ">
      <Row className="justify-content-md-center">
        <Col xs={12} md={6} lg={5}>
          <h2>Validated Registration</h2>
          <hr />

          {/* Apply the 'validated' prop to the Form component */}
          <Form noValidate validated={validated} onSubmit={handleSubmit}>
            {/* Email Field */}
            <Form.Group className="mb-3" controlId="validationEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                required // Native HTML validation check
                type="email"
                placeholder="Enter email"
                name="email"
                value={formData.email}
                onChange={handleChange}
              />
              {/* This message shows when the input is invalid */}
              <Form.Control.Feedback type="invalid">
                Please provide a valid email address.
              </Form.Control.Feedback>
            </Form.Group>

            {/* Password Field */}
            <Form.Group className="mb-3" controlId="validationPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                required
                type="password"
                placeholder="Password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                // Use the custom check to determine the invalid state
                isInvalid={validated && !isPasswordValid}
              />
              <Form.Control.Feedback type="invalid">
                Password must be at least 6 characters long.
              </Form.Control.Feedback>
            </Form.Group>

            {/* Checkbox */}
            <Form.Group className="mb-3" controlId="validationCheckbox">
              <Form.Check
                required
                type="checkbox"
                label="I agree to the terms"
                name="agreed"
                checked={formData.agreed}
                onChange={handleChange}
              />
              <Form.Control.Feedback type="invalid">
                You must agree before submitting.
              </Form.Control.Feedback>
            </Form.Group>

            {/* Submit Button */}
            <Button variant="primary" type="submit">
              Register
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}

export default ValidatedSignupForm;
