import type { AppProps, NextWebVitalsMetric } from 'next/app';

import { GoogleTagManager } from '@with-nx/analytics';
import { ThemeProvider } from '@with-nx/theme';
import { themes } from '../styles/themes';
import '../styles/styles.css';

function CustomApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider themes={themes} initialThemeName="dark">
      <main className="app">
        <Component {...pageProps} />
      </main>
      <GoogleTagManager />
    </ThemeProvider>
  );
}

export function reportWebVitals(metric: NextWebVitalsMetric) {
  // Conversion to seconds and minutes
  const valueInMilliseconds = metric.value;
  const valueInSeconds = (valueInMilliseconds / 1000).toFixed(2);

  // Logging the converted values
  console.log(`${metric.name} - Seconds: ${valueInSeconds}`);

  if (
    process.env.NODE_ENV !== 'production' &&
    metric.name === 'CLS' &&
    metric.value
  ) {
    console.error('NONZERO CLS ', metric.value);
  }
}

export default CustomApp;
