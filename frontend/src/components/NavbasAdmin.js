import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Zaytricslogo from "../images/Zaytricslogo.png";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import NavDropdown from "react-bootstrap/NavDropdown";

const HeaderAdmin = () => {
  return (
    <Container>
      <Navbar
        // bg="transparent"
        expand="lg"
        variant="dark"
        fixed="top"
        style={{ zIndex: 1, background: "#000000", opacity: 0.8 }}
      >
        <Container>
          <img
            alt=""
            src={Zaytricslogo}
            width="30"
            height="30"
            className="d-inline-block align-top"
          />{" "}
          <Navbar.Brand href="/">Portfolio</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/about">About</Nav.Link>
              <Nav.Link href="/project">Project</Nav.Link>
              <Nav.Link href="/pricing">Pricing</Nav.Link>
              <Nav.Link href="/contactdata">ContactData</Nav.Link>
            </Nav>

            <Button variant="warning" className="me-2" href="../">
              LogOut
            </Button>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Container>
  );
};

export default HeaderAdmin;
