import * as React from "react";
import { Container, Col } from "react-bootstrap";

const About = () => {
  return (
    <section id="about">
      <Container className="my-5">
        <Col className="p-5 text-center">
          <h5>
            Sridhar Musical Institute specializes in Guitar classes, Drums classes and Keyboard
            classes. Our experienced faculty will guide you through your musical
            journey.
          </h5>
        </Col>
      </Container>
    </section>
  );
};

export default About;
