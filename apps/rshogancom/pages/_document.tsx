import Document, { Html, Head, Main, NextScript } from 'next/document';
import Script from 'next/script';

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <link
            rel="preconnect"
            href="https://fonts.gstatic.com/"
            crossOrigin="anonymous"
          />

          {/* Google Analytics */}
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

          {/* Facebook Pixel */}
          <Script
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
            dangerouslySetInnerHTML={{
              __html: `
              !function(f,b,e,v,n,t,s)
              {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
              n.callMethod.apply(n,arguments):n.queue.push(arguments)};
              if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
              n.queue=[];t=b.createElement(e);t.async=!0;
              t.src=v;s=b.getElementsByTagName(e)[0];
              s.parentNode.insertBefore(t,s)}(window, document,'script',
              'https://connect.facebook.net/en_US/fbevents.js');
            `,
            }}
          />
          <noscript>
            <img
              height="1"
              width="1"
              style={{ display: 'none' }}
              src={`https://www.facebook.com/tr?id=975859380015760&ev=PageView&noscript=1`}
            />
          </noscript>

          {/* Hotjar */}
          <Script
            src={`https://static.hotjar.com/c/hotjar-${process.env.NEXT_PUBLIC_HOTJAR_ID}.js?sv=6`}
            strategy="lazyOnload"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
