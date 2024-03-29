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
      fontFamily: {
        michroma: ['Michroma', 'sans'],
        ptsans: ['PT Sans', 'sans'],
      },
    },
  },
  plugins: [],
  presets: [require('../../tailwind-workspace-preset.js')],
};
