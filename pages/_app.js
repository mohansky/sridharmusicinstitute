import React, { useEffect } from "react";
import "../styles/style.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import Layout from "../components/layout";
import Script from 'next/script'
import { useRouter } from 'next/router'
import { GTM_ID, pageview } from '../lib/gtm'
import TagManager from 'react-gtm-module';

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    TagManager.initialize({ gtmId: 'GTM-NH46GHZ' });
}, []);

  return (
    <> 
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

export default MyApp;
