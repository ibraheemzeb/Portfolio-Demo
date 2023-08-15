import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Zaytricslogo from "../images/Zaytricslogo.png";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";
import { toast } from 'react-toastify'
import { useSelector, useDispatch } from "react-redux";
import { login, logout, reset } from "../features/auth/authSlice";
import { FaUser, FaSignInAlt, FaSignOutAlt } from "react-icons/fa";

const Header = () => {
  const history = useNavigate();
  const dispatch = useDispatch();
  

  const onLogout = () => {
    dispatch(logout());
    dispatch(reset());
    history("/");
  };

  const [Logform, SetLogForm] = useState({
    email: '',
    password: '',
  });
  const {email, password} = Logform

  const {admin, isLoading, isError, isSuccess, message} = useSelector((state) => state.auth)
  useEffect(() => {
    if (isError) {
      toast.error(message)
    }
    if (isSuccess || admin){
      // history("../");
    }
    dispatch(reset())
  },[admin, isError, isSuccess, message, history, dispatch])

  const handleLogForm = (e) => {
    SetLogForm((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }))
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const LoginData = {
      email,
      password,
    }
    dispatch(login(LoginData))
  };
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
              {admin ? (
                <>
                  <Nav.Link href="/">Home</Nav.Link>
                  <Nav.Link href="/about">About</Nav.Link>
                  <Nav.Link href="/project">Project</Nav.Link>
                  <Nav.Link href="/pricing">Pricing</Nav.Link>
                  <Nav.Link href="/contactdata">ContactData</Nav.Link>

                  <Button variant="warning" className="me-2" onClick={onLogout}>
                    <span className="d-flex align-items-center">
                      <FaSignOutAlt className="me-1" /> Logout
                    </span>
                  </Button>
                </>
              ) : (
                <>
                  <Nav.Link href="/">Home</Nav.Link>
                  <Nav.Link href="/about">About</Nav.Link>
                  <Nav.Link href="/project">Project</Nav.Link>
                  <Nav.Link href="/pricing">Pricing</Nav.Link>
                  <Nav.Link href="/contact">Contact</Nav.Link>
                  {/* <Nav.Link href="/contactdata">ContactData</Nav.Link> */}
                  <Form className="d-flex" onSubmit={handleSubmit}>
                    <Form.Control
                      type="email"
                      placeholder="Email"
                      className="me-2"
                      aria-label="Email"
                      name="email"
                      onChange={handleLogForm}
                    />
                    <Form.Control
                      type="password"
                      placeholder="Password"
                      className="me-2"
                      aria-label="Password"
                      name="password"
                      onChange={handleLogForm}
                    />
                    <Button variant="success" className="me-2" type="submit">
                      <span className="d-flex align-items-center">
                        <FaSignInAlt className="me-1" /> Login
                      </span>
                    </Button>
                    <Button
                      variant="warning"
                      className="me-2"
                      href="./register"
                    >
                      <span className="d-flex align-items-center">
                        <FaUser className="me-1" /> Register
                      </span>
                    </Button>
                  </Form>
                </>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Container>
  );
};

export default Header;
