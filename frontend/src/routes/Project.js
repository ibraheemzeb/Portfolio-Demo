import React from "react";
import Header from "../components/Navbar";
import Footer from "../components/Footer";
import HeroImg2 from "../components/HeroImg2";
import PricingCard from "../components/PricingCard";
import WorkCard from "../components/WorkCard";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import p1 from "../images/p1.png";
import p2 from "../images/p2.png";
import p3 from "../images/p3.png";
import p4 from "../images/p4.png";

const Project = () => {
  return (
    <>
      <div>
        <Header />
        <HeroImg2
          heading="Projects"
          text="You will find All our projects here"
        />
        <h1 className="d-flex justify-content-center">OUR PROJECTS</h1>

        <Container style={{ padding: "20px" }}>
          <Row>
            <Col xs={12} sm={6} md={3}>
              <WorkCard
                title="Project1"
                text=" Some quick example text to build on the card title and makeup the bulk of the card's content."
                img={p1}
              />
            </Col>
            <Col xs={12} sm={6} md={3}>
              <WorkCard
                title="Project2"
                text=" Some quick example text to build on the card title and makeup the bulk of the card's content."
                img={p2}
              />
            </Col>
            <Col xs={12} sm={6} md={3}>
              <WorkCard
                title="Project3"
                text=" Some quick example text to build on the card title and makeup the bulk of the card's content."
                img={p3}
              />
            </Col>
            <Col xs={12} sm={6} md={3}>
              <WorkCard
                title="Project4"
                text=" Some quick example text to build on the card title and makeup the bulk of the card's content."
                img={p4}
              />
            </Col>
          </Row>
        </Container>
        
        <Footer />
      </div>
    </>
  );
};

export default Project;
