import { AppProps } from 'next/app';
import { NextPage } from 'next';
import Head from 'next/head';
import { Figtree, JetBrains_Mono, Young_Serif } from 'next/font/google';
import { ThemeProvider } from '@with-nx/theme';
import { AuthProvider, RequireAuth } from '@with-nx/auth';
import '../styles/styles.css';
import { themes } from '../styles/themes';

// A page can opt out of the login gate with `Page.isPublic = true` (see
// pages/recipe/[id].tsx) — everything else stays behind RequireAuth.
type PageWithAuthOptions = NextPage & { isPublic?: boolean };

// Exposed as CSS variables; styles.css builds the font stacks from them.
const displayFont = Young_Serif({ weight: '400', subsets: ['latin'], variable: '--rc-font-display' });
const bodyFont = Figtree({ subsets: ['latin'], variable: '--rc-font-body' });
const monoFont = JetBrains_Mono({ weight: ['500', '700'], subsets: ['latin'], variable: '--rc-font-mono' });

interface CustomAppProps extends Omit<AppProps, 'Component'> {
  Component: PageWithAuthOptions;
}

function CustomApp({ Component, pageProps }: CustomAppProps) {
  const content = (
    <main className={`app ${displayFont.variable} ${bodyFont.variable} ${monoFont.variable}`}>
      <Component {...pageProps} />
    </main>
  );

  return (
    <ThemeProvider themes={themes} initialThemeName="light">
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
