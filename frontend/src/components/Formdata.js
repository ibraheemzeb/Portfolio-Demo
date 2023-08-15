import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import Table from "react-bootstrap/Table";
import Container from "react-bootstrap/Container";
import { Row, Col } from "react-bootstrap";
import { GetForm, reset } from "../features/form/formSlice";
// import { reset } from "nodemon";
const Formdata = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { admin } = useSelector((state) => state.auth);
  const { form, isLoading, isError, message } = useSelector(
    (state) => state.form
  );
  useEffect(() => {
    if (!admin) {
      navigate("/login");
    }
    if (isError) {
      console.log(message);
    }
    dispatch(GetForm());
    return () => {
      dispatch(reset());
    };
  }, [navigate, dispatch]);

  return (
    <Container fluid style={{ position: "relative", top: 55 }}>
      <h1>Welcome {admin && admin.name}</h1>
      <Row>
        <Col>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>ID</th>
                <th>Email</th>
                <th>Full Name</th>
                <th>Subject</th>
                <th>Description</th>
              </tr>
            </thead>
            <tbody>
              {form.length > 0 ? (
                form.map((item) => (
                  <tr key={item._id}>
                    <td>{item._id}</td>
                    <td>{item.email}</td>
                    <td>{item.fullname}</td>
                    <td>{item.subject}</td>
                    <td>{item.details}</td>
                  </tr>
                ))
              ) : (
                <h3>No data found</h3>
              )}
            </tbody>
            {/* <tbody>
            </tbody> */}
          </Table>
        </Col>
      </Row>
    </Container>
  );
};

export default Formdata;
