import { useEffect } from 'react';
import { AppProps } from 'next/app';
import { useRouter } from 'next/router';

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

  return <Component {...pageProps} />;
}

export default CustomApp;
