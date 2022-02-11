import '../styles/globals.css';
import StoreProvider from '../store/store-context';
import Footer from '../components/footer';
import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
config.autoAddCss = false;
import {
  faCoffee as fasFaCoffee,
  faHeart as fasFaHeart,
} from '@fortawesome/pro-solid-svg-icons';
import {
  faCoffee as farFaCoffee,
  faHeart as farFaHeart,
} from '@fortawesome/pro-regular-svg-icons';
library.add(fab, fasFaCoffee, farFaCoffee, fasFaHeart, farFaHeart);

function MyApp({ Component, pageProps }) {
  return (
    <StoreProvider>
      <Component {...pageProps} />
      <Footer />
    </StoreProvider>
  );
}

export default MyApp;
