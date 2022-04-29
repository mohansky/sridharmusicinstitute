import React from "react";
import { BsTelephone, BsEnvelope, BsPinMap } from "react-icons/bs";

import { Container, Col, Row, Form, Button } from "react-bootstrap"; 

export default function Address() {
  return (
    <>
      <h5> Get In Touch! </h5>
      <Row>
        <Col sm={1} >
        <BsPinMap className="contact-icon" />
        </Col>
        <Col sm={9}>
        <address>
        Sridhar Musical Institute
        <br />
        17/ 1 Cambridge Road Ulsoor
        <br />
        Bangalore, India
        <br />
        <br />
      </address>
        </Col>
      </Row>
      
      <p>
        <a
          className="contact-link"
          href="mailto:sridharmusicalinstitute@gmail.com"
        >
          <BsEnvelope className="contact-icon" /> &nbsp;
          sridharmusicalinstitute@gmail.com
        </a>
        <br />
        <a className="contact-link" href="tel:+918197754070">
          <BsTelephone className="contact-icon" /> &nbsp; +91 819 775 4070
        </a>
        <br />
        <a className="contact-link" href="tel:+919980343554">
          <BsTelephone className="contact-icon" /> &nbsp; +91 998 034 3554
        </a>
        <br />
      </p>
    </>
  );
}
