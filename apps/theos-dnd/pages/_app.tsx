import { AppProps } from 'next/app';
import Head from 'next/head';
import { ThemeProvider } from '@with-nx/theme';

import { EntityProvider } from '../context/EntityContext';
import { themes } from '../styles/themes';
import '../styles/styles.css';

function CustomApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider themes={themes} initialThemeName="light">
      <main className="app">
        <EntityProvider>
          <Component {...pageProps} />
        </EntityProvider>
      </main>
    </ThemeProvider>
  );
}

export default CustomApp;
