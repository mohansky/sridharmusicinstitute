import '../styles/style.scss' 
import 'bootstrap/dist/css/bootstrap.min.css';
import Layout from '../components/layout' 
import TagManager from "react-gtm-module"

const tagManagerArgs = {
  id: "GTM-NH46GHZ",
}

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    TagManager.initialize(tagManagerArgs)
  }, [])

  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )  
}

export default MyApp
