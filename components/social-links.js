import React from "react";
import { BsTelephone, BsEnvelope, BsFacebook, BsInstagram } from 'react-icons/bs';

export default function SocialLinks() {
  return (
    <>
        <h6>Follow us </h6>
      <a
        className="social-link"
        href="https://www.facebook.com/Sridhar-Musical-Institute-419312658257153/"
        target="_blank"
      >
        <BsFacebook />
      </a>
      <a
        className="social-link"
        href="https://www.instagram.com/sridharmusicalinstitute/"
        target="_blank"
      >
        <BsInstagram /> 
      </a>
      <br />
    </>
  );
}
