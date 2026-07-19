const { createGlobPatternsForDependencies } = require('@nx/react/tailwind');
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
        olive: {
          700: '#4a5e2a',
          800: '#3a4b20',
          900: '#2a3a15',
        },
        // 950 shades were only added in Tailwind v3.3; this workspace is on 3.2.7.
        stone: { 950: '#0c0a09' },
        green: { 950: '#052e16' },
        red: { 950: '#450a0a' },
        amber: { 950: '#451a03' },
      },
    },
  },
  plugins: [],
};
