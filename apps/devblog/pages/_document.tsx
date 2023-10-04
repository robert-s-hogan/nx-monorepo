import Document, { Html, Head, Main, NextScript } from 'next/document';
import { GoogleFontLoader } from '@with-nx/theme';

class MyDocument extends Document {
  handleOnLoad = (event) => {
    event.target.onload = null;
    event.target.rel = 'stylesheet';
  };

  render() {
    return (
      <Html lang="en">
        <Head>
          <GoogleFontLoader
            fonts={[
              { fontFamily: 'Golos Text', fontWeights: '400;600;700;900' },
              { fontFamily: 'Silkscreen', fontWeights: '' },
            ]}
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
