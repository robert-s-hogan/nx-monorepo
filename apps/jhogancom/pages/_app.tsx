import { AppProps } from 'next/app';
import { useEffect } from 'react';
import { ThemeProvider } from 'next-themes';
import { GoogleTagManager } from '@with-nx/analytics';
import { hotjar } from 'react-hotjar';
import '../styles/styles.css';

function CustomApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    hotjar.initialize(3336768, 6);
  }, []);

  return (
    <ThemeProvider attribute="class">
      <Component {...pageProps} />
      <GoogleTagManager />
    </ThemeProvider>
  );
}

export default CustomApp;
