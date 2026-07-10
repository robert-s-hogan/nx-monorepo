const { createGlobPatternsForDependencies } = require('@nrwl/react/tailwind');
const { join } = require('path');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    join(
      __dirname,
      '{src,pages,components}/**/*!(*.stories|*.spec).{ts,tsx,html}'
    ),
    ...createGlobPatternsForDependencies(__dirname),
  ],
  theme: {
    extend: {
      colors: {
        primary: 'var(--primary-color)',
        secondary: 'var(--secondary-color)',
        'accent-color': 'var(--accent-color)',
        'bg-color': 'var(--bg-color)',
        'surface-color': 'var(--surface-color)',
        'text-color': 'var(--text-color)',
        'text-on-primary-color': 'var(--text-on-primary-color)',
        'text-on-secondary-color': 'var(--text-on-secondary-color)',
        'primary-fill': 'var(--primary-fill)',
        'primary-stroke': 'var(--primary-stroke)',
        'secondary-fill': 'var(--secondary-fill)',
        'secondary-stroke': 'var(--secondary-stroke)',
        'success-color': 'var(--success-color)',
        'error-color': 'var(--error-color)',
        'warning-color': 'var(--warning-color)',
        'info-color': 'var(--info-color)',
        'border-color': 'var(--border-color)',
        'hover-color': 'var(--hover-color)',
        'active-color': 'var(--active-color)',
        'hover-secondary-color': 'var(--hover-secondary-color)',
        'active-secondary-color': 'var(--active-secondary-color)',
        'disabled-color': 'var(--disabled-color)',
        'sun-icon-color': 'var(--sun-icon-color)',
        'moon-icon-color': 'var(--moon-icon-color)',
        'bg-opacity-color': 'var(--bg-opacity-color)',
      },
    },
  },
  plugins: [],
};
