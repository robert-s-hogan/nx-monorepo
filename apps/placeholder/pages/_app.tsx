import { AppProps } from 'next/app';
import './styles.css';
import { ThemeProvider } from 'next-themes';

function CustomApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider attribute="class">
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default CustomApp;
