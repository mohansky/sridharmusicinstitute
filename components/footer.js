/** FOOTER COMPONENT **/

import * as React from "react";
import Image from "next/image";
import { Nav, Navbar, Container, Row, Col } from "react-bootstrap";
 
import Address from "./address";
import SocialLinks from "./social-links";

export default function Footer() {
  return (
    <footer className="mt-0 pt-5 px-5">
      <Row>
        <Col md={4} className="mb-3">
        <Image
              src="/images/smilogoold.png"
              alt="Sridhar Musical Institute"
              width={300}
              height={150}
              placeholder="blurDataURL"
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
      <div className=" d-flex justify-content-between text-muted p-0 m-0">
        <p className="m-0">
        © {new Date().getFullYear()}, Property of SMI
        </p>
        <p className="m-0">
        Designed and Developed by 
        <a className="footer-link" href="https://mohankumar.dev/" target="_blank"> Mohan </a>
        </p>
      </div>
    </footer>
  );
}
