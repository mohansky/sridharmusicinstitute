/** CONTACT COMPONENT **/

import React from "react";
import { Container, Col, Row } from "react-bootstrap";
import Address from "./address";
import ContactForm from "./contact-form";
import SocialLinks from "./social-links";

export default function Contact() {
  return (
    <section id="contact">
      <Container className="mt-5 pb-5">
        <h3 className="section-title"> Contact Us </h3>
        <Row>
          <Col md={6}>
            <div className="mb-5">
              <Address />
            </div>
            <div className="mb-3">
              <SocialLinks />
            </div>
          </Col>

          <Col md={6}>
            <ContactForm />
          </Col>
        </Row>
      </Container>
    </section>
  );
}
