/** HEADER COMPONENT **/

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { Nav, Navbar, Container } from "react-bootstrap";

export default function Header() {
  return (
    <>
      <Navbar
        collapseOnSelect
        sticky="top"
        expand="lg"
        bg="dark"
        variant="dark"
      >
        <Container>
          <Navbar.Brand href="/">
            <Image
              src="/images/smilogowname640.png"
              alt="Sridhar Musical Institute"
              width={150}
              height={75}
            />
            <p className="d-none"> Sridhar Musical Institute </p>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse
            className="justify-content-end"
            id="responsive-navbar-nav"
          >
            <Nav className="justify-content-end">
              
                <Link href="/">
                  <a className="nav-link" > Home </a>
                </Link>  
                <Link href="/about">
                  <a className="nav-link" > About </a>
                </Link> 
                <Link href="/#classes">
                  <a className="nav-link" > Classes </a>
                </Link> 
                <Link href="/#contact">
                  <a className="nav-link" > Contact </a>
                </Link> 
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}
