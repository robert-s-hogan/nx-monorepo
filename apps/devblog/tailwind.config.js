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
    'absolute',
  ],
  theme: {
    extend: {
      animation: {
        input: 'var(--animation-speed)',
        'meteor-effect': 'meteor 5s linear infinite',
        wiggle: 'wiggle 1s ease-in-out infinite',
      },
      aspectRatio: {
        wide: 'var(--aspect-ratio-wide)',
        square: 'var(--aspect-ratio-square)',
      },
      backgroundColor: {
        'secondary-color': 'var(--secondary-color)',
      },
      backgroundImage: {
        'p2w-hero':
          "url('https://app-assets.vercel.app/apps/play2winff/p2w_hero.jpg')",
        'react-ui-library':
          "url('https://app-assets.vercel.app/apps/devblog/dev_blog_react-ui-library.jpg')",
        concentration:
          "url('https://app-assets.vercel.app/apps/devblog/dev_blog-concentration.jpg')",
        'dnd-interactive-map':
          "url('https://app-assets.vercel.app/apps/devblog/dev_blog-map.jpg')",
        'custom-google-search':
          "url('https://app-assets.vercel.app/apps/devblog/devblog_custom_search_new.jpg')",
        'swapi-plus':
          "url('https://app-assets.vercel.app/apps/swapi-cards/devblog_swapi-plus.jpg')",
      },
      borderWidth: {
        DEFAULT: 'var(--button-border-width)',
      },
      borderRadius: {
        100: '100%',
      },
      boxShadow: {
        sm: 'var(--shadow-sm)',
        md: 'var(--shadow-md)',
        lg: 'var(--shadow-lg)',
        input: `0px 2px 3px -1px rgba(0,0,0,0.1), 0px 1px 0px 0px rgba(25,28,33,0.02), 0px 0px 0px 1px rgba(25,28,33,0.08)`,
      },
      colors: {
        primary: 'var(--primary-color)',
        secondary: 'var(--secondary-color)',
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
        sans: 'var(--font-family)',
      },
      keyframes: {
        meteor: {
          '0%': { transform: 'rotate(215deg) translateX(0)', opacity: '1' },
          '70%': { opacity: '1' },
          '100%': {
            transform: 'rotate(215deg) translateX(-500px)',
            opacity: '0',
          },
        },
        wiggle: {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' },
        },
      },
      opacity: {
        disabled: 'var(--opacity-disabled)',
        hover: 'var(--opacity-hover)',
        active: 'var(--opacity-active)',
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
      transitionDuration: {
        DEFAULT: 'var(--transition-speed)',
        fast: 'var(--fast-transition-speed)',
        slow: 'var(--slow-transition-speed)',
      },
      transform: {
        'rotate-62': 'rotate(62deg)',
        'rotate--3': 'rotate(-3deg)',
        'rotate-144': 'rotate(144deg)',
      },
      zIndex: {
        dropdown: 'var(--z-index-dropdown)',
        modal: 'var(--z-index-modal)',
        overlay: 'var(--z-index-overlay)',
      },
    },
  },
  plugins: [addVariablesForColors],
  presets: [require('../../tailwind-workspace-preset.js')],
};

function addVariablesForColors({ addBase, theme }) {
  let allColors = flattenColorPalette(theme('colors'));
  let newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
  );

  addBase({
    ':root': newVars,
  });
}
