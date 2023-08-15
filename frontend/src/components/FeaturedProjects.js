import React from "react";
import Carousel from "react-bootstrap/Carousel";
import Button from "react-bootstrap/Button";
import p1 from "../images/1.jpg";
import p2 from "../images/2.jpg";
import p3 from "../images/3.jpg";

const FeaturedProjects = () => {
  return (
    <div className="carousel-wrapper">
      <h1 className="text-center">Featured Project</h1>
      <Carousel variant="dark">
        <Carousel.Item className="carasousel-item">
          <img className="d-block w-100" src={p1} alt="First slide" />
          <Carousel.Caption>
            <h5>First slide label</h5>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            <Button variant="warning" href="/project">
          Projects
        </Button>{" "}
        <Button variant="secondary" href="/contact">
          Contact
        </Button>{" "}
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={p2} alt="Second slide" />
          <Carousel.Caption>
            <h5>Second slide label</h5>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={p3} alt="Third slide" />
          <Carousel.Caption>
            <h5>Third slide label</h5>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default FeaturedProjects;
