import { AppProps } from 'next/app';
import { ThemeProvider } from '@with-nx/theme';
import { AuthProvider, RequireAuth } from '@with-nx/auth';
import '../styles/styles.css';
import { themes } from '../styles/themes';

function CustomApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider themes={themes} initialThemeName="dark">
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
