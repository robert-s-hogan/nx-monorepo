const { createGlobPatternsForDependencies } = require('@nrwl/react/tailwind');
const { join } = require('path');
const {
  default: flattenColorPalette,
} = require('tailwindcss/lib/util/flattenColorPalette');

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
      animation: {
        scroll:
          'scroll var(--animation-duration, 40s) var(--animation-direction, forwards) linear infinite',
      },
      keyframes: {
        scroll: {
          to: {
            transform: 'translate(calc(-50% - 0.5rem))',
          },
        },
      },
      colors: {
        'primary-color': 'var(--primary-color)',
        'secondary-color': 'var(--secondary-color)',
        'accent-color': 'var(--accent-color)',
        'bg-color': 'var(--bg-color)',
        'surface-color': 'var(--surface-color)',
        'text-color': 'var(--text-color)',
        'text-color-secondary': 'var(--text-color-secondary)',
        'primary-fill': 'var(--primary-fill)',
        'secondary-icon-color': 'var(--secondary-icon-color)',
        'success-color': 'var(--success-color)',
        'error-color': 'var(--error-color)',
        'warning-color': 'var(--warning-color)',
        'info-color': 'var(--info-color)',
        'border-color': 'var(--border-color)',
        'hover-color': 'var(--hover-color)',
        'active-color': 'var(--active-color)',
        'hover-secondary-color': 'var(--hover-secondary-color)',
        'active-secondary-color': 'var(--active-secondary-color)',
        'disabled-color': 'var(--disabled-color)',
        'sun-color-color': 'var(--sun-color-color)',
        'moon-color-color': 'var(--moon-color-color)',
        'bg-opacity-color': 'var(--bg-opacity-color)',
      },
      fontFamily: {
        michroma: ['Michroma', 'sans'],
        ptsans: ['PT Sans', 'sans'],
      },
    },
  },
  plugins: [addVariablesForColors],
  presets: [require('../../tailwind-workspace-preset.js')],
};

// This plugin adds each Tailwind color as a global CSS variable, e.g. var(--gray-200).
function addVariablesForColors({ addBase, theme }) {
  let allColors = flattenColorPalette(theme('colors'));
  let newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
  );

  addBase({
    ':root': newVars,
  });
}
