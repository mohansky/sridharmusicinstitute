import '../styles/style.scss'
// import '../styles/normalize.scss'
import 'bootstrap/dist/css/bootstrap.min.css';
import Layout from '../components/layout'
// import 'leaflet/dist/leaflet.css';

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )  
}

export default MyApp
