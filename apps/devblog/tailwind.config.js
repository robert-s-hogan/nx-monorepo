const { createGlobPatternsForDependencies } = require('@nrwl/react/tailwind');
const { join } = require('path');

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
      colors: {
        primary: 'var(--primary-color)',
        secondary: 'var(--secondary-color)',
        'accent-color': 'var(--accent-color)',
        'bg-color': 'var(--bg-color)',
        'surface-color': 'var(--surface-color)',
        'text-color': 'var(--text-color)',
        'text-color-secondary': 'var(--text-color-secondary)',
        'primary-icon-color': 'var(--primary-icon-color)',
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
      borderWidth: {
        1: '1px',
      },
      borderRadius: {
        100: '100%',
      },
      zIndex: {
        0: '0',
      },
      transform: {
        'rotate-62': 'rotate(62deg)',
        'rotate--3': 'rotate(-3deg)',
        'rotate-144': 'rotate(144deg)',
      },
    },
  },
  plugins: [],
  presets: [require('../../tailwind-workspace-preset.js')],
};
