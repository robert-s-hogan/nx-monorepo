import { AppProps } from 'next/app';
import { NextPage } from 'next';
import Head from 'next/head';
import { AuthProvider, RequireAuth } from '@with-nx/auth';
import '../styles/styles.css';

// A page can opt out of the login gate with `Page.isPublic = true` (see
// pages/login.tsx). Unlike the other family apps, there's no public-read
// mode here — this is one person's private progress, so everything but
// the login page itself stays behind RequireAuth.
type PageWithAuthOptions = NextPage & { isPublic?: boolean };

interface CustomAppProps extends Omit<AppProps, 'Component'> {
  Component: PageWithAuthOptions;
}

function CustomApp({ Component, pageProps }: CustomAppProps) {
  const content = <Component {...pageProps} />;

  return (
    <>
      <Head>
        <title>RadTech Prereq Tracker — SRJC</title>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, viewport-fit=cover"
        />
        <meta name="theme-color" content="#0d1317" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@400;500;600;700&family=IBM+Plex+Mono:wght@400;500;600&family=IBM+Plex+Sans:wght@400;500;600&display=swap"
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
