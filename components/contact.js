/** CONTACT COMPONENT **/

import * as React from "react" 
import { Container, Col, Row, Form, Button } from "react-bootstrap" 
import { BsTelephone, BsEnvelope } from 'react-icons/bs'; 

export default function Contact  ()  {
 
  return (
    <section id="contact"> 
      <Container> 
        <h3 className="section-title"> Contact Us </h3> 
        <Row >
          <Col md={6}> 
          <h6> Get In Touch! </h6>    
            <address> 
              Sridhar Music Institute<br/>
              17/ 1 Cambridge Road Ulsoor<br/>
              Bangalore, India<br/><br/>
            </address>
            <p>
              <a className="contact-link" href="mailto:sridharmusicinstitute@gmail.com"><BsEnvelope/> sridharmusicinstitute@gmail.com </a><br/>
              <a className="contact-link" href="tel:+918197754070"><BsTelephone/> +91 819 775 4070 </a> <br/>
              <a className="contact-link" href="tel:+919845053648"><BsTelephone/> +91 984 505 3648 </a> <br/> 
            </p> 
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
                  style={{ height: '100px' }}
                />
              </Form.Group> 
              <Button  variant="primary" type="submit">
                Submit
              </Button>
            </Form>
            </Col>
            </Row>  
      </Container>
       

    </section>
  )
}