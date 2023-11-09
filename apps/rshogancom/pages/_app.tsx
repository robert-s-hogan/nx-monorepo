import { useEffect } from 'react';
import { AppProps } from 'next/app';
import { useRouter } from 'next/router';

import { ThemeProvider } from '@with-nx/theme';

import { themes } from '../styles/themes';
import '../styles/styles.css';

function CustomApp({ Component, pageProps }: AppProps) {
  const router = useRouter();

  useEffect(() => {
    router.events.on('routeChangeComplete', () => {
      if (window.fbq) {
        window.fbq('track', 'PageView');
      }
    });
  }, [router.events]);

  return (
    <ThemeProvider themes={themes} initialThemeName="light">
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default CustomApp;
