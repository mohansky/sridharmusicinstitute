import Head from "next/head";
import { Container, Col } from "react-bootstrap";

export default function Post() {
  return (
    <Container>
      <Head>
        <title>Sridhar Musical Institute</title>
        {/* <meta property="og:image" content={post.ogImage.url} /> */}
      </Head>
      <div className="form-msg my-auto">
        <h6 className="m-5">
          Thank you for Registering for a demo class. We will get back to you to
          make an appointment at a convenient time.
        </h6>
      </div>
    </Container>
  );
}
