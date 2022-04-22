/** CLASSES COMPONENT **/ 
import { Container, Row } from "react-bootstrap"; 
import PostList from "./post-list";

export default function Classes({ posts }) {
  return (
    <section id="classes">
      <h3 className="section-title"> Classes </h3>

      <Container fluid className="py-5">
        <Row>
          <PostList posts={posts} />
        </Row>
      </Container>
    </section>
  );
}
