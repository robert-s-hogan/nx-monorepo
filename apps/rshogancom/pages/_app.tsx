import { AppProps } from 'next/app';
import { GoogleTagManager } from '@with-nx/analytics';

import './styles.css';

function CustomApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Component {...pageProps} />
      <GoogleTagManager />
    </>
  );
}

export default CustomApp;
