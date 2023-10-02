import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  handleOnLoad = (event) => {
    event.target.onload = null;
    event.target.rel = 'stylesheet';
  };

  render() {
    return (
      <Html>
        <Head>
          <link
            rel="preload"
            href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;600;700;900&display=swap"
            as="style"
            onLoad={this.handleOnLoad}
          />
          <noscript>
            <link
              href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;600;700;900&display=swap"
              rel="stylesheet"
              type="text/css"
            />
          </noscript>
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
