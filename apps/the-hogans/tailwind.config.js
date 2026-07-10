const { createGlobPatternsForDependencies } = require('@nrwl/react/tailwind');
const { join } = require('path');

// SubjectInfo positions family-photo overlays with percentage-based Tailwind
// spacing utilities (top-3p, left-25p, etc.) — generate the 1-95% scale here
// instead of hand-writing each entry.
const percentSpacing = Object.fromEntries(
  Array.from({ length: 95 }, (_, i) => [`${i + 1}p`, `${i + 1}%`])
);

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
      spacing: percentSpacing,
      colors: {
        // 950 shades were only added in Tailwind v3.3; this workspace is on
        // 3.2.7 (see apps/dm-toolkit/tailwind.config.js for the same fix).
        neutral: { 950: '#0a0a0a' },
      },
    },
  },
  plugins: [],
};
