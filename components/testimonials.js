import React from "react";
import { Carousel } from "react-bootstrap";

export default function Testimonials() {
  return (
    <>
      <Carousel fade>
        <Carousel.Item >
          <Carousel.Caption> 
            <p>I love music a lot. My favorite instrument is Drums so I'm very happy cause I found the best Musical Institute. Here the way of coaching done by the Masters is outstanding and joyful. If anybody is intrested to learn Musical instruments this is the best place in Bangalore.</p>
            <p> Nikhil P </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <Carousel.Caption> 
            <p>This is the place where I started music and I gained a lot of music knowledge and sweet memories ❤️ the teaching skills are awesome and fun in this institute. This is the oldest institute in Bangalore and the teachers have high music knowledge so this is the best place to Start your music journey....!!😇</p>
            <p> Abishek </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <Carousel.Caption> 
            <p>
            This is a very good place to learn an instrument. It's very joyful to learn here. Our sir is very kind to us and teaches everything very well and make us understand how to play an instrument with love.
            </p>
            <p> Tulika Paul </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </>
  );
}
