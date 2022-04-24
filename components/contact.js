/** CONTACT COMPONENT **/

import * as React from "react";
import { Container, Col, Row, Form, Button } from "react-bootstrap"; 
import Address from "./address";

export default function Contact() {
  return (
    <section id="contact">
      <Container className="mt-5 pb-5">
        <h3 className="section-title"> Contact Us </h3>
        <Row>
          <Col md={6}>
            <Address />
          </Col>

          <Col md={6}>
            <Form>
              <Row>
                <Col>
                  <Form.Group className="mb-3" controlId="formName">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="email" placeholder="Your Name" />
                  </Form.Group>
                </Col>
                <Col>
                  <Form.Group className="mb-3" controlId="formEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Your Email" />
                  </Form.Group>
                </Col>
              </Row>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Message</Form.Label>
                <Form.Control
                  as="textarea"
                  placeholder="Your Message"
                  style={{ height: "100px" }}
                />
              </Form.Group>
              <div class="d-grid">
                <Button variant="primary" type="submit">
                  Submit
                </Button>
              </div>
            </Form>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
