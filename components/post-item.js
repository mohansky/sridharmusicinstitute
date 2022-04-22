import CoverImage from "./cover-image"; 
import { Col, Row, Form, Button } from "react-bootstrap" 

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
  return (
    <Row className="mt-5">
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
        <p className="mb-4"> {admission} &nbsp; - &nbsp; {fees} </p>
        <h6 className="mb-1"> Crash Course </h6>
        <p className="mb-4"> {crashCourse} </p>
      </Col>

      <Col md={2}>
      <h6 className="mb-3"> Sign up for a free Demo Class </h6>
      <Form> 
      <input type="hidden" value={title}/>
        <Form.Group className="mb-3" controlId="formBasicName">
          {/* <Form.Label>Name</Form.Label> */}
          <Form.Control type="name" placeholder="Enter Name" /> 
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          {/* <Form.Label>Email address</Form.Label> */}
          <Form.Control type="email" placeholder="Enter Email" /> 
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPhone">
          {/* <Form.Label>Phone</Form.Label> */}
          <Form.Control type="phone" placeholder="Enter Phone Number" />
        </Form.Group>
        
        <Button variant="primary" type="submit">
          Register
        </Button>
      </Form>
      </Col>
    </Row>
  );
}
