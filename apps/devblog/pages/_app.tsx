import { AppProps } from 'next/app';
import './styles.css';
import { GoogleTagManager } from '@with-nx/analytics';

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
