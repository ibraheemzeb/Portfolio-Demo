import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import {Createform, reset} from '../features/form/formSlice'
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const ContactForm = () => {
  const [Contactform, SetContactForm] = useState({
    email: "",
    fullname: "",
    subject: "",
    details: "",
  });
  const { email, fullname, subject, details } = Contactform;
  const history = useNavigate();
  const dispatch = useDispatch();

  const { formData, isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.form
  );
  
  useEffect(() => {
    if (isError) {
      toast.error(message);
    }

    dispatch(reset());
  }, [formData, isError, isSuccess, message, history, dispatch]);

  const handleForm = (event) => {
    SetContactForm((prevState) => ({
      ...prevState,
      [event.target.name]: event.target.value,
    }));
  };
  const handleSubmit = async (event) => {
    // event.preventDefault();
    const Contactform = {
      email,
      fullname,
      subject,
      details,
    };
    dispatch(Createform(Contactform));
    SetContactForm("");
  };

  return (
    <Container className="justify-content-center">
      <Row>
        <Col md={6}>
          <h1>Contact Us Form</h1>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Control
                type="email"
                placeholder="Enter email"
                name="email"
                onChange={handleForm}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Control
                type="text"
                placeholder="Fullname"
                name="fullname"
                onChange={handleForm}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicSubject">
              <Form.Control
                type="text"
                placeholder="Enter subject"
                name="subject"
                onChange={handleForm}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicDetails">
              <Form.Control
                as="textarea"
                rows={3}
                placeholder="Enter details"
                name="details"
                onChange={handleForm}
              />
            </Form.Group>

            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default ContactForm;
