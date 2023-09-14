const { createGlobPatternsForDependencies } = require('@nrwl/react/tailwind');
const { join } = require('path');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    join(
      __dirname,
      '{src,pages,components}/**/*!(*.stories|*.spec).{js,jsx,ts,tsx,html}'
    ),
    ...createGlobPatternsForDependencies(__dirname),
  ],
  safelist: [
    'text-nx',
    'text-storybook',
    'text-jest',
    'text-next-js',
    'text-api',
    'text-github',
  ],
  theme: {
    extend: {
      colors: {
        primary: 'var(--primary-color)',
      },
      backgroundColor: {
        'secondary-color': 'var(--secondary-color)',
      },
      spacing: {
        215: '215px',
        '-169': '-169px',
        '-96': '-96px',
        317: '317px',
        155: '155px',
        '-105': '-105px',
        '-212': '-212px',
        295: '295px',
      },
      borderWidth: {
        1: '1px',
      },
      borderRadius: {
        100: '100%',
      },
      zIndex: {
        0: '0',
      },
      transform: {
        'rotate-62': 'rotate(62deg)',
        'rotate--3': 'rotate(-3deg)',
        'rotate-144': 'rotate(144deg)',
      },
    },
  },
  plugins: [],
  presets: [require('../../tailwind-workspace-preset.js')],
};
