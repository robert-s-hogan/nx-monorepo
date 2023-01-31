import { AppProps } from 'next/app';
import Head from 'next/head';
import './styles.css';
import { ThemeProvider } from 'next-themes';

function CustomApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider attribute="class">
      <Head>
        <title>Home | Placeholder</title>
      </Head>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default CustomApp;
