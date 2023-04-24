import { useEffect } from 'react';
import { AppProps } from 'next/app';
import { useRouter } from 'next/router';
import Script from 'next/script';

import './styles.css';

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
    <>
      <Component {...pageProps} />
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
        strategy="lazyOnload"
        onLoad={() => {
          window.dataLayer = window.dataLayer || [];
          function gtag(...args: any[]) {
            window.dataLayer.push(args);
          }
          gtag('js', new Date());
          gtag('config', process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS);
        }}
      />
      <Script
        src="https://connect.facebook.net/en_US/sdk.js"
        strategy="lazyOnload"
        onLoad={() => {
          window.fbq =
            window.fbq ||
            function () {
              (window.fbq.q = window.fbq.q || []).push(arguments);
            };
          window.fbq('init', '975859380015760');
          window.fbq('track', 'PageView');
        }}
      />
      <Script
        src="https://static.hotjar.com/c/hotjar-3336749.js?sv=6"
        strategy="lazyOnload"
      />
    </>
  );
}

export default CustomApp;
