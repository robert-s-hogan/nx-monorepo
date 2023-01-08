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
    colors: {
      brand: {
        lightGrey: '#aeafa5',
        black: '#111119',
        lightOlive: '#5d6b69',
        olive: '#5d6b69',
        lightGreen: '',
        darkGreen: '',
        brown: '#5e433b',
        darkOlive: '#333c42',
        orange: '#954d30',
        darkGrey: '#818496',
      },
    },
    extend: {},
  },
  plugins: [],
};
