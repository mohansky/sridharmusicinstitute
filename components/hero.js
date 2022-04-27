/** HERO COMPONENT **/

import * as React from "react";
import { Carousel, Button } from "react-bootstrap";
import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  return (
    <>
      <Carousel fade>
        <Carousel.Item interval={1500}>
          <Image
            className="hero-img"
            layout="fill"
            src="/images/header.jpg"
            alt="Hero"
          />
          <Carousel.Caption>
            <h1>Sridhar Musical Institute</h1>
            <h4>Since 1978</h4>
            <div className="d-grid mt-3">
              <Link href="/#contact">
                <Button variant="primary" type="submit">
                  Contact
                </Button>
              </Link>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={1500}>
          <Image
            className="hero-img"
            layout="fill"
            src="/images/header.jpg"
            alt="Hero"
          />
          <Carousel.Caption>
            <h1>Sridhar Musical Institute specializes in </h1>
            <h4>Guitars, Drums and Keyboard classes.</h4>
            <div className="d-grid mt-3"> 
            <Link href="/#contact">
              <Button variant="primary" type="submit">
                Contact
              </Button>
            </Link>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </>
  );
}
