import React from "react";
import { BsTelephone, BsEnvelope } from "react-icons/bs";

export default function Address() {
  return (
    < >
        <h6> Get In Touch! </h6>   
      <address>
       Sridhar Musical Institute
        <br />
        17/ 1 Cambridge Road Ulsoor
        <br />
        Bangalore, India
        <br />
        <br />
      </address>
      <p>
        <a
          className="contact-link"
          href="mailto:sridharmusicalinstitute@gmail.com"
        >
          <BsEnvelope /> &nbsp; sridharmusicalinstitute@gmail.com 
        </a>
        <br />
        <a className="contact-link" href="tel:+918197754070">
          <BsTelephone /> &nbsp; +91 819 775 4070 
        </a> 
        <br />
        <a className="contact-link" href="tel:+919980343554">
          <BsTelephone /> &nbsp; +91 998 034 3554
        </a> 
        <br />
      </p> 
    </ >
  );
}
