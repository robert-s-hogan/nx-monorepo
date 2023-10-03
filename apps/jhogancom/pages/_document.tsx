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
            fontFamily="Montserrat"
            fontWeights="300;400;600;700;900"
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
