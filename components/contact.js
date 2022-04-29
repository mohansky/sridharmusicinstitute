/** CONTACT COMPONENT **/

import React, { useState } from "react";
import { Container, Col, Row, Form, Button } from "react-bootstrap"; 
import Address from "./address"; 
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
          <SocialLinks/>              
          </div>
          

          </Col>

          <Col md={6}> 
            <Form name="contact" method="POST" action="/thankyou/#contact" data-netlify="true" netlify-honeypot="bot-field">
            <input type="hidden" name="form-name" value="contact"/>
            <p className="d-none">
              <label>
                Don’t fill this out if you’re human: <input name="bot-field" />
              </label>
            </p>
              <Row>
                <Col>
                  <Form.Group className="mb-3" controlId="formName">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" name="name" placeholder="Your Name" required  />
                  </Form.Group>
                </Col>
                <Col>
                  <Form.Group className="mb-3" controlId="formEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" name="email" placeholder="Your Email" required  />
                  </Form.Group>
                </Col>
              </Row>
              <Form.Group className="mb-3" controlId="formTextarea">
                <Form.Label>Message</Form.Label>
                <Form.Control
                  as="textarea"
                  name="textarea"
                  placeholder="Your Message"
                  required 
                  style={{ height: "100px" }}
                />
              </Form.Group>
              <div className="d-grid">
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
