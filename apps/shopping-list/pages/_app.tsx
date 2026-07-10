import { AppProps } from 'next/app';
import Head from 'next/head';
import { ThemeProvider } from '@with-nx/theme';
import { AuthProvider, RequireAuth } from '@with-nx/auth';
import '../styles/styles.css';
import { themes } from '../styles/themes';

function CustomApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider themes={themes} initialThemeName="dark">
      <Head>
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
      </Head>
      <AuthProvider>
        <RequireAuth allowedRoles={['family']}>
          <main className="app">
            <Component {...pageProps} />
          </main>
        </RequireAuth>
      </AuthProvider>
    </ThemeProvider>
  );
}

export default CustomApp;
