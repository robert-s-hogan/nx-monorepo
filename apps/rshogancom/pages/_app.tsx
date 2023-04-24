import { useEffect } from 'react';
import { AppProps } from 'next/app';
import { GoogleTagManager } from '@with-nx/analytics';
import { hotjar } from 'react-hotjar';
import { useRouter } from 'next/router';

import './styles.css';

function CustomApp({ Component, pageProps }: AppProps) {
  const router = useRouter();

  useEffect(() => {
    hotjar.initialize(3336749, 6);
    import('react-facebook-pixel')
      .then((x) => x.default)
      .then((ReactPixel) => {
        ReactPixel.init('975859380015760');
        ReactPixel.pageView();

        router.events.on('routeChangeComplete', () => {
          ReactPixel.pageView();
        });
      });
  }, [router.events]);
  return (
    <>
      <Component {...pageProps} />
      <GoogleTagManager />
    </>
  );
}

export default CustomApp;
