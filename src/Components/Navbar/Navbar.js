import React from 'react';
import {Container,Nav,NavDropdown,Button} from "react-bootstrap";
import Navbar from "react-bootstrap/Navbar"
import {LinkContainer} from "react-router-bootstrap"
function navbar() {
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
      <Navbar.Brand href="#home">Welcome</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
        <LinkContainer to="/">
        <Nav.Link>Home</Nav.Link>
        </LinkContainer>
        <NavDropdown title="Dropdown" id="basic-nav-dropdown">
          <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
        </NavDropdown>
      </Nav>
    </Navbar.Collapse>
    <LinkContainer to="/login">
      <Button variant="secondary" className="mx-1">Login</Button>
    </LinkContainer>
    <LinkContainer to="/signup">
      <Button variant="warning">Sign Up</Button>
    </LinkContainer>
      </Container>
    </Navbar>
  );
}

export default navbar;