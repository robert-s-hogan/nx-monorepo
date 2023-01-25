import { useEffect } from 'react';
import { AppProps } from 'next/app';
import { GoogleTagManager } from '@with-nx/analytics';
import { hotjar } from 'react-hotjar';

import './styles.css';

function CustomApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    hotjar.initialize(3336749, 6);
  }, []);
  return (
    <>
      <Component {...pageProps} />
      <GoogleTagManager />
    </>
  );
}

export default CustomApp;
