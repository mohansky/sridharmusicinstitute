/** CONTACT COMPONENT **/
import React from "react";
import { Container, Col, Row } from "react-bootstrap";
import Address from "./address"; 

export default function Formsubmit() {
  return (
    <section id="contact">
      <Container className="mt-5 pb-5">
        <h3 className="section-title"> Contact Us </h3>
        <Row>
          <Col md={6}>
            <Address />
          </Col>

          <Col md={6}>
            <h4> Thank you for your Message. </h4>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
