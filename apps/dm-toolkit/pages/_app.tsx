import { useEffect } from 'react';
import { AppProps } from 'next/app';
import Head from 'next/head';
import { ThemeProvider } from '@with-nx/theme';
import { AuthProvider, RequireAuth } from '@with-nx/auth';
import '../styles/styles.css';
import { themes } from '../styles/themes';
import { useStore } from '../store/useStore';

// Split out from CustomApp so useStore's init() — which fetches real
// campaign data — only mounts (and only then fires) once RequireAuth has
// actually let the user through, not on every visit regardless of login.
function AppContent({ Component, pageProps }: AppProps) {
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

function CustomApp(props: AppProps) {
  return (
    <ThemeProvider themes={themes} initialThemeName="dark">
      {/* Set here, not just via <Seo faviconPath>, because RequireAuth
          gates rendering client-side — Seo never mounts for logged-out
          users or in the pre-hydration HTML. */}
      <Head>
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
      </Head>
      <AuthProvider>
        <RequireAuth allowedRoles={['family']}>
          <AppContent {...props} />
        </RequireAuth>
      </AuthProvider>
    </ThemeProvider>
  );
}

export default CustomApp;
