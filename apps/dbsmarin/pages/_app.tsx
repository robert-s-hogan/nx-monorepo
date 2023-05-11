import { AppProps } from 'next/app';
import { GoogleTagManager } from '@with-nx/analytics';
import '../styles/styles.css';

function CustomApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <main className="app">
        <Component {...pageProps} />
      </main>
      <GoogleTagManager />
    </>
  );
}

export default CustomApp;
