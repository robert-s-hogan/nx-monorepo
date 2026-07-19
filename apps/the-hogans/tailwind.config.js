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
        // 950 shades were only added in Tailwind v3.3; this workspace is on
        // 3.2.7 (see apps/dm-toolkit/tailwind.config.js for the same fix).
        neutral: { 950: '#0a0a0a' },
      },
    },
  },
  plugins: [],
};
