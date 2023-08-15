import React from "react";
import gimg from "../images/8.jpg";
import secondImg from "../images/d1.png";
import { Container } from "react-bootstrap";

const Aboutimg = () => {
  return (
    <Container >
      <img
        src={gimg}
        alt="grid image"
        className="img-fluid"
        style={{
          position: "relative",
          top: 80,
          right: "10%",
          width: "70%",
          // maxWidth: "500px",
        }}
      />
      <img
        src={secondImg}
        alt="second image"
        
        style={{
          position: "relative",
          top: -90,
          right: "-30%",
          width: "50%",
          zIndex: -1,
        }}
      />
    </Container>
  );
};

export default Aboutimg;
