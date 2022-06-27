import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { LinkContainer } from "react-router-bootstrap";
import React, { useState } from "react";
import "../styles/TopNavbar.css";

function TopNavbar() {
  const [expanded, setExpanded] = useState(false);
  return (
    <Navbar
      className="color-nav"
      expand="lg"
      variant="dark"
      expanded={expanded}
    >
      <Container variant="bigger">
        <LinkContainer to="/">
          <Navbar.Brand href="#home">DD</Navbar.Brand>
        </LinkContainer>
        <Navbar.Toggle
          aria-controls="basic-navbar-nav"
          onClick={() => setExpanded(expanded ? false : "expanded")}
        />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <LinkContainer to="/">
              <Nav.Link href="#home" onClick={() => setExpanded(false)}>
                Home
              </Nav.Link>
            </LinkContainer>
            <LinkContainer to="/aboutUs">
              <Nav.Link href="#aboutUs" onClick={() => setExpanded(false)}>
                About Us
              </Nav.Link>
            </LinkContainer>
            <LinkContainer to="/desserts">
              <Nav.Link href="#desserts" onClick={() => setExpanded(false)}>
                Desserts
              </Nav.Link>
            </LinkContainer>
            <NavDropdown title="Admin options" id="basic-nav-dropdown">
              <LinkContainer to="/addDessert">
                <NavDropdown.Item
                  href="#addDessert"
                  onClick={() => setExpanded(false)}
                >
                  Add Dessert
                </NavDropdown.Item>
              </LinkContainer>
              {/*
                            <LinkContainer to="/addDessert">
                                <NavDropdown.Item href="#addDessert">Delete Dessert</NavDropdown.Item>
                            </LinkContainer>
                            <LinkContainer to="/addDessert">
                                <NavDropdown.Item href="#addDessert">Update Dessert</NavDropdown.Item>
                            </LinkContainer>
    */}
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default TopNavbar;
