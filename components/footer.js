/** FOOTER COMPONENT **/

import * as React from "react";
import Image from "next/image";
import { Nav, Navbar, Container, Row, Col } from "react-bootstrap";
 
import Address from "./address";
import SocialLinks from "./social-links";

export default function Footer() {
  return (
    <footer className="mt-0 p-5">
      <Row>
        <Col md={4} className="mb-3">
        <Image
              src="/images/smilogowname640.png"
              alt="Sridhar Musical Institute"
              width={300}
              height={150}
            />
        </Col>
        <Col md={4} className="mb-3">
          <Address />
        </Col>
        <Col md={4} className="mb-3">
          <SocialLinks />
        </Col>
      </Row>
      <hr className="p-0 m-0" />
      <div className="text-center text-muted p-0 m-0">
        © {new Date().getFullYear()}, Property of SMI
      </div>
    </footer>
  );
}
