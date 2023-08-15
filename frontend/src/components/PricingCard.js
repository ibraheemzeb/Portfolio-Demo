import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import cardimg from "../images/Zaytricslogo.png";

const PricingCard = () => {
  return (
    <Container style={{ padding: "20px" }}>
      <Row>
        <Col>
          <Card style={{ width: "18rem" }}>
            <Card.Img
              variant="top"
              src={cardimg}
              style={{ height: "100px", width: "100px" }}
            />
            <Card.Body>
              <Card.Title>Basic</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <Button variant="outline-primary">Purchase Now</Button>{" "}
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card style={{ width: "18rem" }}>
            <Card.Img
              variant="top"
              src={cardimg}
              style={{ height: "100px", width: "100px" }}
            />
            <Card.Body>
              <Card.Title>Premium</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <Button variant="outline-primary">Purchase Now</Button>{" "}
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card style={{ width: "18rem" }}>
            <Card.Img
              variant="top"
              src={cardimg}
              style={{ height: "100px", width: "100px" }}
            />
            <Card.Body>
              <Card.Title>Business</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <Button variant="outline-primary">Purchase Now</Button>{}
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default PricingCard;
