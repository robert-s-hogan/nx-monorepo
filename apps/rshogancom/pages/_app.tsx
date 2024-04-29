import { useEffect } from 'react';
import { AppProps } from 'next/app';
import Router from 'next/router'; // Import the Router from 'next/router', not 'useRouter'
import { Provider } from 'react-redux';

import { ThemeProvider } from '@with-nx/theme';
import { store } from '../store';

import { themes } from '../styles/themes';
import '../styles/styles.css';

function CustomApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    const handleRouteChange = (url: string) => {
      if (url === '/') {
        // Clear localStorage when navigating back to the home page
        localStorage.clear();
      }
    };

    // Listen to route change complete events
    Router.events.on('routeChangeComplete', handleRouteChange);

    // Cleanup subscription on unmount
    return () => {
      Router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, []);

  return (
    <Provider store={store}>
      <ThemeProvider themes={themes} initialThemeName="light">
        <Component {...pageProps} />
      </ThemeProvider>
    </Provider>
  );
}

export default CustomApp;
