import Head from "next/head";
import Map from "../components/Map";
import Hero from "../components/hero";
import About from "../components/about";
import Classes from "../components/classes";
import Contact from "../components/contact";
import { getAllPosts } from "../lib/api";
import Testimonials from "../components/testimonials";

const DEFAULT_CENTER = [12.9708658, 77.6278365];

export default function Home({ allPosts }) {
  return (
    <>
      <Head>
        <title>Sridhar Musical Institute</title>
        <meta property="og:title" content="Sridhar Musical Institute"/>
        <meta property="og:image" content="/images/smilogo.png"/>
        <meta property="og:description" content="Sridhar Musical Institute specializes in Guitar classes, Drums classes and Keyboard
            classes. Our experienced faculty will guide you through your musical
            journey."/>
        <meta name="description" content="Sridhar Musical Institute specializes in Guitar classes, Drums classes and Keyboard
            classes. Our experienced faculty will guide you through your musical
            journey." />
        <link rel="icon" href="/images/logo.ico" />
      </Head>

      <main>
        <Hero />
        <About />
        <Classes posts={allPosts} />
        {/* <Testimonials /> */}
        <Contact />

        <Map
          className="map mt-0 mb-0"
          center={DEFAULT_CENTER}
          zoom={17}
          scrollWheelZoom={false}
        >
          {({ TileLayer, Marker, Popup }) => (
            <>
              <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
              />
              <Marker position={DEFAULT_CENTER}>
                <Popup>Sridhar Musical Institute</Popup>
              </Marker>
            </>
          )}
        </Map>
      </main>
    </>
  );
}

export async function getStaticProps() {
  const allPosts = getAllPosts(["title", "date", "slug", "img"]);

  return {
    props: { allPosts },
  };
}
