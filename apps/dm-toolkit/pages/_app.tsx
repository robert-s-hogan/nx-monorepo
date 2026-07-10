import { useEffect } from 'react';
import { AppProps } from 'next/app';
import { NextPage } from 'next';
import Head from 'next/head';
import { ThemeProvider } from '@with-nx/theme';
import { AuthProvider, RequireAuth } from '@with-nx/auth';
import '../styles/styles.css';
import { themes } from '../styles/themes';
import { useStore } from '../store/useStore';

// A page can opt out of the login gate with `Page.isPublic = true` (see
// pages/index.tsx, characters.tsx, map.tsx) — session.tsx has no flag and
// stays behind RequireAuth.
type PageWithAuthOptions = NextPage & { isPublic?: boolean };

interface CustomAppProps extends Omit<AppProps, 'Component'> {
  Component: PageWithAuthOptions;
}

// init() now runs regardless of auth state — public pages need real campaign
// data too. RequireAuth (when present) wraps this from the outside rather
// than gating init() itself.
function AppContent({ Component, pageProps }: CustomAppProps) {
  const { init, loading, error } = useStore();

  useEffect(() => {
    init();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <main className="app">
      {loading ? (
        <div className="min-h-screen bg-stone-950 flex items-center justify-center">
          <div className="text-center space-y-3">
            <div className="w-8 h-8 border-2 border-green-700 border-t-transparent rounded-full animate-spin mx-auto" />
            <p className="text-stone-500 text-sm">Connecting to database…</p>
          </div>
        </div>
      ) : error ? (
        <div className="min-h-screen bg-stone-950 flex items-center justify-center">
          <div className="bg-stone-800 border border-red-800 rounded-xl p-6 max-w-md text-center space-y-3">
            <p className="text-red-400 font-bold">Database connection failed</p>
            <p className="text-stone-400 text-sm">{error}</p>
            <button
              onClick={() => init()}
              className="px-4 py-2 bg-stone-700 hover:bg-stone-600 text-stone-200 text-sm rounded-lg transition-colors"
            >
              Retry
            </button>
          </div>
        </div>
      ) : (
        <Component {...pageProps} />
      )}
    </main>
  );
}

function CustomApp(props: CustomAppProps) {
  const content = <AppContent {...props} />;

  return (
    <ThemeProvider themes={themes} initialThemeName="dark">
      {/* Set here, not just via <Seo faviconPath>, because RequireAuth
          gates rendering client-side — Seo never mounts for logged-out
          users or in the pre-hydration HTML. */}
      <Head>
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
      </Head>
      <AuthProvider>
        {props.Component.isPublic ? (
          content
        ) : (
          <RequireAuth allowedRoles={['family']}>{content}</RequireAuth>
        )}
      </AuthProvider>
    </ThemeProvider>
  );
}

export default CustomApp;
