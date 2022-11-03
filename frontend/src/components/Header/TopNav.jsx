import React from "react";
import { Container, Navbar, Nav } from "react-bootstrap";
const TopNav = () => {
  return (
    <Navbar bg="dark" expand="lg" variant="dark" collapseOnSelect>
      <Container>
        <Navbar.Brand href="/">ClickCart</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="/cart">
              <i className="fas fa-shopping-cart"></i> Cart
            </Nav.Link>
            <Nav.Link href="/login">
              <i className="fas fa-user"></i> Sign In
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default TopNav;
