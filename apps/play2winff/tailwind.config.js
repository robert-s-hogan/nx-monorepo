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
        night: '#0C0F0F',
        gunmetal: '#2B3432',
        viridian: '#338D75',
        primary: '#338D75',
        'rich-black': '#0A191C',
        'black-custom': '#000507',
        qb: '#8B4143',
        rb: '#4B6978',
        wr: '#2B6D65',
        te: '#D1A52B',
        pk: '#C1748C',
        def: '#6B4A70',
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
      backgroundImage: {
        'gradient-custom': 'linear-gradient(45deg, #2B3432, #338D75)',
        'gradient-top':
          'linear-gradient(0deg, #0C0F0F, #2B3432, #338D75, #0A191C, #000507)',
        'gradient-right':
          'linear-gradient(90deg, #0C0F0F, #2B3432, #338D75, #0A191C, #000507)',
        'gradient-bottom':
          'linear-gradient(180deg, #0C0F0F, #2B3432, #338D75, #0A191C, #000507)',
        'gradient-left':
          'linear-gradient(270deg, #0C0F0F, #2B3432, #338D75, #0A191C, #000507)',
        'gradient-top-right':
          'linear-gradient(45deg, #0C0F0F, #2B3432, #338D75, #0A191C, #000507)',
        'gradient-bottom-right':
          'linear-gradient(135deg, #0C0F0F, #2B3432, #338D75, #0A191C, #000507)',
        'gradient-top-left':
          'linear-gradient(225deg, #0C0F0F, #2B3432, #338D75, #0A191C, #000507)',
        'gradient-bottom-left':
          'linear-gradient(315deg, #0C0F0F, #2B3432, #338D75, #0A191C, #000507)',
        'gradient-radial':
          'radial-gradient(#0C0F0F, #2B3432, #338D75, #0A191C, #000507)',
      },
    },
  },
  plugins: [],
};
