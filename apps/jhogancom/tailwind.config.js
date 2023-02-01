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
    extend: {},
  },
  plugins: [],
};
