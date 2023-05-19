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
  safelist: ['right-0'],
  theme: {
    extend: {
      colors: {
        primary: '#60A5FA',
      },
      borderRadius: {
        '20xl': '10rem',
      },
      fontFamily: {
        raleway: ['Raleway'],
      },
      spacing: {
        18: '4.5rem',
        22: '5.5rem',
        30: '7.5rem',
        89: '22.25rem',
        100: '25rem',
        130: '32.5rem',
      },
      width: {
        mc: 'max-content',
      },
      borderRadius: {
        '5xl': '2.5rem',
        '10xl': '5rem',
        '20xl': '10rem',
      },
      scale: {
        200: '2',
      },
    },
  },
  plugins: [],
};
