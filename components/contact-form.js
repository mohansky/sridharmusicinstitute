import React from 'react'
import { Container, Col, Row, Form, Button } from "react-bootstrap"; 

export default function ContactForm() {
  return (
    <>
    <Form name="contact" method="POST" action="/thankyou/#contact" data-netlify="true" netlify-honeypot="bot-field">
    <input type="hidden" name="form-name" value="contact"/>
    <p className="d-none">
      <label>
        Don’t fill this out if you’re human: <input name="bot-field" />
      </label>
    </p>
      <Row>
        <Col sm={6}>
          <Form.Group className="mb-3" controlId="formName">
            <Form.Label>Name</Form.Label>
            <Form.Control type="text" name="name" placeholder="Your Name" required  />
          </Form.Group>
        </Col>
        <Col sm={6}>
          <Form.Group className="mb-3" controlId="formEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" name="email" placeholder="Your Email" required  />
          </Form.Group>
        </Col>
      </Row>
      <Form.Group className="mb-5" controlId="formTextarea">
        <Form.Label>Message</Form.Label>
        <Form.Control
          as="textarea"
          name="textarea"
          placeholder="Your Message"
          required  
          rows={4}
        />
      </Form.Group>
      <div className="d-grid">
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </div>
    </Form> 
    </>
  )
} 