import { AppProps } from 'next/app';
import dynamic from 'next/dynamic';
import { ThemeProvider } from '@with-nx/theme';
import '../styles/styles.css';
import { themes } from '../styles/themes';
import { rolesForPath } from '../lib/access';

// Client-only and loaded on demand: the gate (and Supabase) only reach the
// browser on private routes, and private content isn't pre-rendered into the
// static HTML.
const AuthGate = dynamic(() => import('../components/AuthGate'), {
  ssr: false,
});

function CustomApp({ Component, pageProps, router }: AppProps) {
  const roles = rolesForPath(router.pathname);
  const page = (
    <main className="app">
      <Component {...pageProps} />
    </main>
  );

  return (
    <ThemeProvider themes={themes} initialThemeName="light">
      {roles ? <AuthGate roles={roles}>{page}</AuthGate> : page}
    </ThemeProvider>
  );
}

export default CustomApp;
