import Document, { Html, Head, Main, NextScript } from "next/document";
import { GTM_ID } from '../lib/gtm'

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head/>
         <body>
          {/* <!-- Google Tag Manager (noscript) --> */}
          <noscript>
            <iframe
              src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
              height="0"
              width="0"
              style={{ display: 'none', visibility: 'hidden' }}
            />
          </noscript>
          {/* <!-- End Google Tag Manager (noscript) --> */}
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
