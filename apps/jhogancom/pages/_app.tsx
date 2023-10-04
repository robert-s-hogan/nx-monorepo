import { useEffect } from 'react';
import { ThemeProvider } from '@with-nx/theme';
import { themes } from '../styles/themes';
import { GoogleTagManager } from '@with-nx/analytics';
import { hotjar } from 'react-hotjar';
import '../styles/styles.css';

import type { AppProps, NextWebVitalsMetric } from 'next/app';

function CustomApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    hotjar.initialize(3336768, 6);
  }, []);

  return (
    <ThemeProvider themes={themes} initialThemeName="light">
      <Component {...pageProps} />
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
