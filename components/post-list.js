import PostPreview from "./post-preview";

import { Col } from "react-bootstrap";

export default function PostList({ posts }) {
  return (
    <>
      {posts.map((post) => (
        <Col md={4} key={post.slug}>
          <PostPreview
            key={post.slug}
            title={post.title}
            slug={post.slug}
            img={post.img}
          />
        </Col>
      ))}
    </>
  );
}
