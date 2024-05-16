const { createGlobPatternsForDependencies } = require('@nx/react/tailwind');
const { warning } = require('framer-motion');
const { join } = require('path');

/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: [
    join(__dirname, 'src/**/*.{ts,tsx,html}'),
    join(__dirname, 'pages/**/*.{ts,tsx,html}'),
    join(__dirname, 'components/**/*.{ts,tsx,html}'),
    join(__dirname, 'app/**/*.{ts,tsx,html}'),
    join(__dirname, '.storybook/**/*.{js,jsx,ts,tsx}'),
    ...createGlobPatternsForDependencies(__dirname),
  ],
  theme: {
    extend: {
      colors: {
        primary: 'var(--color-primary)',
        secondary: 'var(--color-secondary)',
        tertiary: 'var(--color-tertiary)',
        accent: 'var(--color-accent)',
        background: 'var(--color-background)',
        success: 'var(--color-success)',
        info: 'var(--color-info)',
        warning: 'var(--color-warning)',
        danger: 'var(--color-danger)',
        light: 'var(--color-light)',
        dark: 'var(--color-dark)',
      },
    },
  },
  plugins: [],
};
