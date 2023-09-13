import { useEffect, useState } from 'react';
import { AppProps } from 'next/app';

import { GoogleTagManager } from '@with-nx/analytics';
import { ThemeProvider } from '@with-nx/theme';
import { themes } from '../styles/themes';
import '../styles/styles.css';

function CustomApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider themes={themes} initialThemeName="dark">
      <main className="app">
        <Component {...pageProps} />
      </main>
      <GoogleTagManager />
    </ThemeProvider>
  );
}

export default CustomApp;
