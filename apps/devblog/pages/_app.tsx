import { AppProps } from 'next/app';
import Head from 'next/head';
import './styles.css';
import { GoogleTagManager } from '@with-nx/analytics';

function CustomApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Welcome to devblog!</title>
      </Head>
      <main className="app">
        <Component {...pageProps} />
      </main>
      <GoogleTagManager />
    </>
  );
}

export default CustomApp;
