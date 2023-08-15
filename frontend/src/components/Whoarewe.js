import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Aboutimg from "./Aboutgridimg";

// import "./whoarewe.css";

const whoarewe = () => {
  return (
    <Container>
      <Row style={{ flexWrap: "wrap" }}>
        <Col xs={12} sm={12} md={6}>
          <Aboutimg />
        </Col>
        <Col xs={12} sm={12} md={6}>
          <h1>Who are We</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque esse
            deleniti vitae. Molestiae repudiandae nisi laudantium labore ab
            praesentium. Adipisci, reiciendis esse? Dolores nihil ipsa, velit
            eveniet itaque perspiciatis quidem labore asperiores exercitationem
            quod voluptate deserunt similique! Sunt, voluptatem fugit doloremque
            eveniet dolor quaerat architecto tempore ipsum voluptatibus
            veritatis impedit iste quas provident dignissimos facilis rerum
            perferendis distinctio repudiandae sit. Perspiciatis voluptatem
            illo, iure hic temporibus doloremque! Cumque dolorum consequuntur
            architecto neque, corrupti fuga modi voluptas? Minima illo magni a
            adipisci consequuntur veniam eaque, officiis quis debitis eum dolor,
            quas assumenda ipsum temporibus neque quod ea! Exercitationem optio
            fuga incidunt!
          </p>
        </Col>
      </Row>
    </Container>
  );
};
export default whoarewe;
