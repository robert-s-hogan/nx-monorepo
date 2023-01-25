import { AppProps } from 'next/app';
import Head from 'next/head';
import { useEffect } from 'react';

import './styles.css';
import { GoogleTagManager } from '@with-nx/analytics';
import { hotjar } from 'react-hotjar';

function CustomApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    hotjar.initialize(3336768, 6);
  }, []);
  return (
    <>
      <Head>
        <title>Home - JessicaHoganMA.com</title>
      </Head>
      <main className="app">
        <Component {...pageProps} />
      </main>
      <GoogleTagManager />
    </>
  );
}

export default CustomApp;
