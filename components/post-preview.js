import CoverImage from "./cover-image";
import Link from "next/link";
import { Container, Row, Col, Button } from "react-bootstrap";
// import { Button } from "bootstrap";

export default function PostPreview({
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
    <Row className="post-img p-0">
      <Link href={`/classes/${slug}/#top`}>
        <div className="overlay"> </div>
      </Link>

      <CoverImage
        slug={slug}
        title={title}
        src={img}
        height={278}
        width={556}
      />
      <h3 className="post-title m-0">
        <Link href={`/classes/${slug}`}>
          <a>
            <h4> {title} </h4>
            <br/>
            <Button variant="primary" size="sm">Details</Button>
          </a>
        </Link>
      </h3>
    </Row>
  );
}
