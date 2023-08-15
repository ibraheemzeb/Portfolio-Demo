import React from "react";
import "./WorkCard.css";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const WorkCard = (props) => {
  return (
    <div>
      <Card
        className="position-relative card-hover"
        style={{
          backgroundImage: `url(${props.img})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "300px",
          transition: "opacity 0.5s ease-out",
        }}
      >
        <Card.Title className="text-center" style={{ position: "relative" }}>
          <h1>{props.title}</h1>
        </Card.Title>
        <Card.Body
          className="position-absolute w-100 text-white"
          style={{
            zIndex: -1,
            bottom: 0,
            left: 0,
            opacity: 1,
            transition: "opacity 0.5s ease-out",
          }}
        >
          <div className="d-flex flex-column align-items-center justify-content-end h-100">
            <Card.Text className="text-center mb-3">{props.text}</Card.Text>
            <Button variant="warning">See Details</Button>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
};

export default WorkCard;
