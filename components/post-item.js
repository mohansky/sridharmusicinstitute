import CoverImage from "./cover-image";
import React, { useState } from "react";
import { Col, Row, Form, Button } from "react-bootstrap";
import Demosubmit from "./demosubmit";

export default function PostItem({
  title,
  slug,
  img,
  duration,
  admission,
  fees,
  crashCourse,
  overview,
}) {
  const [show, setShow] = useState(false);
  const demoHandeler = (e) => {
    e.preventDefault();
    setShow(!show);
  };

  return (  
        <Row className="mt-5 mb-5">
          <Col md={4} className="mb-5">
            <CoverImage
              slug={slug}
              title={title}
              src={img}
              height={278}
              width={556}
            />
          </Col>
          <Col md={6}>
            <h3 className="post-item-title mb-3"> {title} </h3>
            <h4 className="mb-3"> First Grade Basic </h4>
            <h6 className="mb-1"> Course Overview </h6>
            <ul className="mb-3">
              {overview.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
            <h6 className="mb-1"> Duration </h6>
            <p className="mb-4"> {duration} </p>
            <h6 className="mb-1"> Fees </h6>
            <p className="mb-4">
              {" "}
              {admission} <br /> {fees}{" "}
            </p>
            <h6 className="mb-1"> Crash Course </h6>
            <p className="mb-4"> {crashCourse} </p>
          </Col>

          <Col md={2}>
            <h6 className="mb-3"> Sign up for a free Demo Class </h6>
            {!show && (
              <Form
                onSubmit={demoHandeler}
                name="demo"
                method="POST"
                data-netlify="true"
                netlify-honeypot="bot-field"
              >
                <p class="d-none">
                  <label>
                    Don’t fill this out if you’re human:{" "}
                    <input name="bot-field" />
                  </label>
                </p>
                <input type="hidden" name="form-name" value="demo" />
                <input type="hidden" value={title} />
                <Form.Group className="mb-3" controlId="formBasicName">
                  <Form.Control type="name" name="name" placeholder="Name" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Control type="email" name="email" placeholder="Email" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPhone">
                  <Form.Control
                    type="phone"
                    name="phone"
                    placeholder="Phone Number"
                  />
                </Form.Group>

                <div class="d-grid mb-5">
                  <Button variant="primary" type="submit">
                    Register
                  </Button>
                </div>
              </Form>
            )}
            {show && <Demosubmit />}
          </Col>
        </Row> 
  );
}
