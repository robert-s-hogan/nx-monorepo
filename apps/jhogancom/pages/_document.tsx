import Document, { Html, Head, Main, NextScript } from 'next/document';
import { FontLoader } from '@with-nx/theme';

class MyDocument extends Document {
  handleOnLoad = (event) => {
    event.target.onload = null;
    event.target.rel = 'stylesheet';
  };

  render() {
    return (
      <Html>
        <Head>
          <FontLoader
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
