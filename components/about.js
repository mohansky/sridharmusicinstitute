import * as React from "react";
import { Container, Col } from "react-bootstrap";

const About = () => {
  return (
    <section id="about">
      <Container className="my-5">
        <Col className="p-5 text-center">
          <h4>
            SMI specializes in Guitar classes, Drums classes and Keyboard
            classes. <br/> 
            Our experienced faculty will guide you through your musical
            journey.
          </h4>
        </Col>
      </Container>
    </section>
  );
};

export default About;
