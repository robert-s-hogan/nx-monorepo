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
        primary: '#0070f3',
        secondary: 'grey',
        tertiary: '#ff6600',
        error: '#ff0000',
        success: '#00ff00',
        warning: '#ffff00',
        disabled: '#cccccc',
      },
    },
  },
  plugins: [],
};
