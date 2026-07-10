import { AppProps } from 'next/app';
import { NextPage } from 'next';
import Head from 'next/head';
import '../styles/styles.css';
import { ThemeProvider } from '@with-nx/theme';
import { AuthProvider, RequireAuth } from '@with-nx/auth';
import { themes } from '../styles/themes';

// A page can opt out of the login gate with `Page.isPublic = true` (see
// pages/index.tsx, leagues.tsx, import.tsx, draft.tsx).
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
      <Head>
        <title>Welcome to play2winff!</title>
      </Head>
      <AuthProvider>
        {Component.isPublic ? (
          content
        ) : (
          // Unlike the other 3 gated apps, 'limited' is allowed here too —
          // league-mates who aren't family still need to get in.
          <RequireAuth allowedRoles={['family', 'limited']}>{content}</RequireAuth>
        )}
      </AuthProvider>
    </ThemeProvider>
  );
}

export default CustomApp;
