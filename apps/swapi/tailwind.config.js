const { createGlobPatternsForDependencies } = require('@nrwl/react/tailwind');
const { join } = require('path');
const safelist = require('./tailwind-safelist');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    join(
      __dirname,
      '{src,pages,components}/**/*!(*.stories|*.spec).{ts,tsx,html}'
    ),
    ...createGlobPatternsForDependencies(__dirname),
  ],
  safelist,
  theme: {
    extend: {
      colors: {
        primary: '#034160', // Primary Color
        secondary: '#1C5A80', // Lighter Shade of Primary
        tertiary: '#002D4B', // Darker Shade of Primary
        teal: '#03616B', // Analogous Color (Teal)
        indigo: '#032B61', // Analogous Color (Indigo)
        complementary: '#613504', // Contrasting Color (Complementary Orange)
        gold: '#615A03', // Near Complementary (Golden-Yellow)
        white: '#fff', // Neutral White
        yellow: '#ffb703', // Yellow
        'light-blue': '#8ECAE6', // Light Blue
        'neutral-light': '#D3D3D3', // Neutral Light
        'neutral-dark': '#2C2C2C', // Neutral Dark
        transparent: 'rgba(0, 0, 0, 0)', // Transparent
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
        jedi: {
          primary: '#546A77', // A shade of neutral blue
          secondary: '#8B9BA8', // Lighter shade
          tertiary: '#2C3C4A', // Darker shade
          accent: '#CDB387', // Light brown reminiscent of Jedi robes
          background: '#ECECEC', // Neutral light background
        },
        sith: {
          primary: '#8B0000', // Deep red, associated with the Sith's lightsabers
          secondary: '#A62626', // Lighter shade of red
          tertiary: '#4B0000', // Darker shade
          accent: '#ffffff', // White
          background: '#1C1C1C', // Very dark background
        },
        droidsmith: {
          primary: '#B0B0B0', // Metallic Silver (main color)
          secondary: '#D3D3D3', // Lighter Metallic Silver
          tertiary: '#838383', // Darker Metallic Silver
          accent: '#DAA520', // Gold, reminiscent of C-3PO
          background: '#2C2C2C', // Dark metallic background similar to droid workshops
          rust: '#8B4513', // Rust color, representing old or unmaintained droids
          blue: '#0000FF', // Droid's LED lights, reminiscent of R2-D2
          red: '#FF0000', // Another LED light, usually indicating issues or alerts
        }, // add new colors and tailwindclasses to themeMap, tailwind-safelist.js too
        default: {
          primary: '#034160', // Primary Color
          secondary: '#1C5A80', // Lighter Shade of Primary
          tertiary: '#002D4B', // Darker Shade of Primary
          accent: '#ffb703', // Yellow
          background: '#fff', // Neutral White
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        serif: ['Jua', 'sans-serif'],
      },
      minHeight: {
        200: '200px',
        300: '300px',
        400: '400px',
        500: '500px',
        600: '600px',
      },
    },
  },
  plugins: [],
  presets: [require('../../tailwind-workspace-preset.js')],
};
