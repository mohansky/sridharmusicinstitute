/** HERO COMPONENT **/

import * as React from "react"  
import {Carousel} from 'react-bootstrap'
import Image from 'next/image'

export default function Hero ()  { 
  return (
    <>
      <Carousel fade>
        <Carousel.Item interval={1000}>
        <Image
            className="hero-img"
            layout="fill" 
            src="/images/header.jpg"  
            alt="Hero"
          />
          <Carousel.Caption> 
              <h1>Sridhar Music Institute</h1>
              <h3>Since 1978</h3>
            
           
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={500}>
          <Image
              className="hero-img"
              layout="fill" 
              src="/images/header.jpg" 
              alt="Hero"
            />
          <Carousel.Caption>
            <h1>Sridhar Music Institute specializes in </h1>
            <h3>Guitars, Drums and Keyboard classes.</h3>
          </Carousel.Caption>
        </Carousel.Item>
        {/* <Carousel.Item>
          <Image
              className="hero-img"
              layout="responsive" 
              src="/images/header.jpg" 
              width={360}
              height={240}
              alt="Hero"
            />
          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
          </Carousel.Caption>
        </Carousel.Item> */}
      </Carousel>
    </>
  )
} 