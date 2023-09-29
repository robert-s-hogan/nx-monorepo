import { useEffect } from 'react';
import { AppProps } from 'next/app';
import Head from 'next/head';
import { ThemeProvider } from '@with-nx/theme';
import { useRouter } from 'next/router';

import { EntityProvider } from '../context/EntityContext';
import { themes } from '../styles/themes';
import '../styles/styles.css';

function CustomApp({ Component, pageProps }: AppProps) {
  const router = useRouter();

  useEffect(() => {
    function handleRouteChange(url: string) {
      if (url === '/') {
        // Clear localStorage when navigating back to the home page
        localStorage.clear();
      }
    }

    // Subscribe to route changes
    router.events.on('routeChangeComplete', handleRouteChange);

    // Cleanup subscription on unmount
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, []);
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
