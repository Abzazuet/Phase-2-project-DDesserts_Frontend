import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { LinkContainer } from "react-router-bootstrap";
import React, { useState } from "react";
import "../styles/TopNavbar.css";
import AdminOptions from "./AdminOptions";

function TopNavbar({ adminLogged }) {
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
            <LinkContainer to="/login">
              <Nav.Link href="#login" onClick={() => setExpanded(false)}>
                {adminLogged ? "Log out" : "Log in"}
              </Nav.Link>
            </LinkContainer>
            {adminLogged ? <AdminOptions setExpanded={setExpanded} /> : ""}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default TopNavbar;
