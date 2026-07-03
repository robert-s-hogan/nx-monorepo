import { AppProps } from 'next/app';
import { ThemeProvider } from '@with-nx/theme';
import '../styles/styles.css';
import { themes } from '../styles/themes';

function CustomApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider themes={themes} initialThemeName="light">
      <main className="app">
        <Component {...pageProps} />
      </main>
    </ThemeProvider>
  );
}

export default CustomApp;
