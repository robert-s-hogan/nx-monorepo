import { AppProps } from 'next/app';
import '../styles/styles.css';

import { ThemeProvider } from '../context/ThemeProvider';

function CustomApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider>
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, viewport-fit=cover"
      />
      <link rel="icon" type="image/png" href="/favicon.ico" />
      <main className="app">
        <Component {...pageProps} />
      </main>
    </ThemeProvider>
  );
}
export default CustomApp;
