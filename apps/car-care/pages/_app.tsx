import { AppProps } from 'next/app';
import { NextPage } from 'next';
import Head from 'next/head';
import { AuthProvider, RequireAuth } from '@with-nx/auth';
import '../styles/styles.css';

// A page can opt out of the login gate with `Page.isPublic = true` (see
// pages/login.tsx). Same model as radtech-tracker: the checkboxes and
// "My car" answers are one person's own progress, so everything but the
// login page stays behind RequireAuth.
type PageWithAuthOptions = NextPage & { isPublic?: boolean };

interface CustomAppProps extends Omit<AppProps, 'Component'> {
  Component: PageWithAuthOptions;
}

function CustomApp({ Component, pageProps }: CustomAppProps) {
  const content = <Component {...pageProps} />;

  return (
    <>
      <Head>
        <title>Car care starter guide</title>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, viewport-fit=cover"
        />
        <link
          rel="icon"
          href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>🔧</text></svg>"
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Archivo:wdth,wght@62..125,400..900&display=swap"
          rel="stylesheet"
        />
      </Head>
      <AuthProvider>
        {Component.isPublic ? (
          content
        ) : (
          <RequireAuth allowedRoles={['family']}>{content}</RequireAuth>
        )}
      </AuthProvider>
    </>
  );
}

export default CustomApp;
