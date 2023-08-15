import React from "react";
import bgimg from "../images/1.jpg";
import bgvid from "../images/mjr.mp4";
import Button from "react-bootstrap/Button";
import { Container } from "react-bootstrap";

const HeroImg = () => {
  return (
    <div style={{ position: "relative" }}>
      <div
        style={{
          position: "relative",
          top: 0,
          left: 0,
          width: "100%",
          height: "100vh",
          backgroundColor: "#000",
          zIndex: -2,
        }}
      >
        <div
          style={{
            position: "relative",
            top: 0,
            left: 0,
            width: "100%",
            height: "100vh",
            filter: "blur(5px)",
          }}
        >
          <img
            src={bgimg}
            alt="bg-img"
            style={{ objectFit: "cover", width: "100%", height: "100%" }}
          />
        </div>
      </div>
      <div
        className="content"
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -80%)",
          textAlign: "center",
          color: "#fff",
        }}
      >
        <h1
          style={{ fontFamily: "Arial", fontWeight: "bold", fontSize: "48px" }}
        >
          Welcome to My
        </h1>
        <h1
          style={{ fontFamily: "Arial", fontWeight: "bold", fontSize: "48px" }}
        >
          Portfolio Page.
        </h1>
        <Button variant="warning" href="/project" style={{ margin: "2px" }}>
          Projects
        </Button>{" "}
        <Button variant="secondary" href="/contact" style={{ margin: "2px" }}>
          Contact
        </Button>{" "}
      </div>
    </div>
  );
};

export default HeroImg;
