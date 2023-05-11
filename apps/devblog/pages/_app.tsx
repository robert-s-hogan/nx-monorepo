import { AppProps } from 'next/app';
import { GoogleTagManager } from '@with-nx/analytics';
import { ThemeProvider } from 'next-themes';
import '../styles/themes.css';
import '../styles/styles.css';

function CustomApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider attribute="class">
      <main className="app">
        <Component {...pageProps} />
      </main>
      <GoogleTagManager />
    </ThemeProvider>
  );
}

export default CustomApp;
