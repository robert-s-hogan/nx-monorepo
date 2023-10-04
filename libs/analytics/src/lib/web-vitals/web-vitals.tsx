import type { NextWebVitalsMetric } from 'next/app';

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
