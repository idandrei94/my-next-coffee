import '../styles/globals.css';
import StoreProvider from '../store/store-context';
import Footer from '../components/footer';
import '@fortawesome/fontawesome-svg-core/styles.css'; // import Font Awesome CSS
import { config } from '@fortawesome/fontawesome-svg-core';
config.autoAddCss = false; // Tell Font Awesome to skip adding the CSS automatically since it's being imported above

function MyApp({ Component, pageProps }) {
  return (
    <StoreProvider>
      <Component {...pageProps} />
      <Footer />
    </StoreProvider>
  );
}

export default MyApp;
