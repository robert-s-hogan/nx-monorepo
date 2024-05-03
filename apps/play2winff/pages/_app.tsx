import { AppProps } from 'next/app';
import Head from 'next/head';
import '../styles/styles.css';
import { ThemeProvider } from '@with-nx/theme';
import { themes } from '../styles/themes';

function CustomApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider themes={themes} initialThemeName="dark">
      <Head>
        <title>Welcome to play2winff!</title>
      </Head>
      <main className="app">
        <Component {...pageProps} />
      </main>
    </ThemeProvider>
  );
}

export default CustomApp;
