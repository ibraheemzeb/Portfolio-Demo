import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { FaUser } from "react-icons/fa";
import { register, reset } from "../features/auth/authSlice";

const Reg = () => {
  const [Regform, SetRegForm] = useState({
    fullname: "",
    email: "",
    password: "",
    cpassword: "",
  });

  const { fullname, email, password, cpassword } = Regform;

  const history = useNavigate();
  const dispatch = useDispatch();

  const { admin, isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.auth
  );
  useEffect(() => {
    if (isError) {
      toast.error(message);
    }
    if (isSuccess || admin) {
      history("../");
    }
    dispatch(reset());
  }, [admin, isError, isSuccess, message, history, dispatch]);

  // const [Regform, SetRegForm] = useState({});
  const handleRegForm = (e) => {
    SetRegForm((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password !== cpassword) {
      toast.error("Password donot match");
    } else {
      const Regform = {
        fullname,
        email,
        password,
      };
      dispatch(register(Regform));
    }
  };
  return (
    <Container
      fluid
      className="d-flex justify-content-center"
      style={{ position: "relative", top: 55, width: "auto", height: "20vh" }}
    >
      <Row>
        <Col md={12}>
          <h1>
            <FaUser /> Register Form
          </h1>
          <h5>Please Create Admin account</h5>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Control
                type="text"
                placeholder="Full Name"
                name="fullname"
                onChange={handleRegForm}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Control
                type="email"
                placeholder="Email"
                name="email"
                onChange={handleRegForm}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicSubject">
              <Form.Control
                type="password"
                placeholder="Password"
                name="password"
                onChange={handleRegForm}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicDetails">
              <Form.Control
                type="password"
                placeholder="Confirm Password"
                name="cpassword"
                onChange={handleRegForm}
              />
            </Form.Group>

            <Button variant="primary" type="submit">
              Register
            </Button>
            <p>
              Already Registered? Click on <a href="/login">Login</a> to
              Continue.
            </p>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default Reg;
