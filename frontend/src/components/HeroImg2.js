import React from "react";
import bgimg from "../images/4.jpg";
import Button from "react-bootstrap/Button";

const HeroImg2 = (props) => {
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
        <div className="heading">
          <h1
            style={{
              fontFamily: "Arial",
              fontWeight: "bold",
              fontSize: "48px",
            }}
          >
            {props.heading}
          </h1>
          <p>{props.text}</p>
        </div>
        
      </div>
    </div>
  );
};

export default HeroImg2;
