import { AppProps } from 'next/app';
import { ThemeProvider } from 'next-themes';
import { GoogleTagManager } from '@with-nx/analytics';
import '../styles/styles.css';

function CustomApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider attribute="class">
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, viewport-fit=cover"
      />
      <link rel="icon" type="image/png" href="/favicon.ico" />
      <main className="app">
        <Component {...pageProps} />
      </main>
      <GoogleTagManager />
    </ThemeProvider>
  );
}

export default CustomApp;
