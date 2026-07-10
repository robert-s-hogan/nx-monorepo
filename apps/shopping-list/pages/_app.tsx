import { AppProps } from 'next/app';
import { NextPage } from 'next';
import Head from 'next/head';
import { ThemeProvider } from '@with-nx/theme';
import { AuthProvider, RequireAuth } from '@with-nx/auth';
import '../styles/styles.css';
import { themes } from '../styles/themes';

// A page can opt out of the login gate with `Page.isPublic = true` (see
// pages/index.tsx).
type PageWithAuthOptions = NextPage & { isPublic?: boolean };

interface CustomAppProps extends Omit<AppProps, 'Component'> {
  Component: PageWithAuthOptions;
}

function CustomApp({ Component, pageProps }: CustomAppProps) {
  const content = (
    <main className="app">
      <Component {...pageProps} />
    </main>
  );

  return (
    <ThemeProvider themes={themes} initialThemeName="dark">
      {/* Set here, not just via <Seo faviconPath>, because RequireAuth
          gates rendering client-side — Seo never mounts for logged-out
          users or in the pre-hydration HTML. */}
      <Head>
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
      </Head>
      <AuthProvider>
        {Component.isPublic ? (
          content
        ) : (
          <RequireAuth allowedRoles={['family']}>{content}</RequireAuth>
        )}
      </AuthProvider>
    </ThemeProvider>
  );
}

export default CustomApp;
