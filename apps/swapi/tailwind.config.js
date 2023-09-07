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
  safelist: [
    'min-h-[200px]',
    'min-h-[300px]',
    'min-h-[400px]',
    'min-h-[500px]',
    'min-h-[600px]',
  ],
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
          accent: '#5E5E5E', // Dark neutral gray
          background: '#1C1C1C', // Very dark background
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
      extend: {
        spacing: {
          17: '4.25rem',
          18: '4.5rem',
          20: '5rem',
          22: '5.5rem',
          30: '7.5rem',
          34: '8rem',
          41: '10.25rem',
          46: '11.5rem',
          54: '13.5rem',
          58: '14.5rem',
          62: '15.5rem',
          66: '16.5rem',
          68: '17rem',
          91: '22.75rem',
          128: '32rem',
          144: '36rem',
        },
        rotate: {
          8: '8deg',
          '-8': '-8deg',
        },
        borderRadius: {
          '4xl': '2rem',
        },
        border: {
          2: '2px solid',
          3: '3px solid',
        },
        borderB: {
          2: '2px solid',
        },
        boxShadow: {
          outline: '0 0 0 1px rgba(0, 0, 0, .75)',
        },
        shadow: {
          xl: '6px 6px 0px 0px #000',
        },
        zIndex: {
          '-1': '-1',
          1: '1',
          2: '2',
          '-2': '-2',
          3: '3',
          '-3': '-3',
          4: '4',
          '-4': '-4',
          5: '5',
          '-5': '-5',
          6: '6',
          '-6': '-6',
          7: '7',
          '-7': '-7',
          8: '8',
          '-8': '-8',
          9: '9',
          '-9': '-9',
        },
      },
    },
  },
  plugins: [],
  presets: [require('../../tailwind-workspace-preset.js')],
};
