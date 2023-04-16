import { AppProps } from 'next/app';
import './styles.css';
import '../styles/themes.css';
import { GoogleTagManager } from '@with-nx/analytics';
import { ThemeProvider } from 'next-themes';

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
