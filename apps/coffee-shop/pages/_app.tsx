import { AppProps } from 'next/app';
import { ThemeProvider } from 'next-themes';
import { GoogleTagManager } from '@with-nx/analytics';

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
