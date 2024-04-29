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
  safelist: ['btn-primary'],
  darkMode: 'class',
  theme: {
    colors: {
      blue: '#555B6E',
      green: '#008A7F',
      white: '#FAF9F9',
      slate: '#89B0AE',
      mint: '#BEE3DB',
      orange: '#E07A5F',
      peach: '#FFD6BA',
      black: '#160C09',
      offWhite: '#f4f4f4',
    },
    extend: {
      primary: 'var(--primary-color)',
      secondary: 'var(--secondary-color)',
      'accent-color': 'var(--accent-color)',
      'bg-color': 'var(--bg-color)',
      'surface-color': 'var(--surface-color)',
      'text-color': 'var(--text-color)',
      'text-color-secondary': 'var(--text-color-secondary)',
      'primary-icon-color': 'var(--primary-icon-color)',
      'secondary-icon-color': 'var(--secondary-icon-color)',
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
      'sun-color-color': 'var(--sun-color-color)',
      'moon-color-color': 'var(--moon-color-color)',
      'bg-opacity-color': 'var(--bg-opacity-color)',
    },
  },
  plugins: [],
  presets: [require('../../tailwind-workspace-preset.js')],
};
