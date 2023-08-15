import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from "react-router-dom";
import { toast } from 'react-toastify'
import { login, reset } from '../features/auth/authSlice'
import { FaSignInAlt } from "react-icons/fa";

const Log = () => {
  const history = useNavigate();
  const dispatch = useDispatch();
 
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
      history("../");
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
    <Container
      fluid
      className="d-flex justify-content-center"
      style={{ position: "relative", top: 55, width: "auto", height: "20vh" }}
    >
      <Row>
        <Col md={12}>
          <h1><FaSignInAlt className="me-1" /> Login</h1>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Control
                type="email"
                placeholder="Email"
                name="email"
                onChange={handleLogForm}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicSubject">
              <Form.Control
                type="password"
                placeholder="Password"
                name="password"
                onChange={handleLogForm}
              />
            </Form.Group>

            <Button variant="success" type="submit">
              Login
            </Button>
            <p>
              Don't have an Account? Click on <a href="/register">Register</a>{" "}
              to create account.
            </p>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default Log;
