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
    'bg-jedi-primary',
    'bg-jedi-secondary',
    'bg-jedi-tertiary',
    'bg-jedi-accent',
    'bg-jedi-background',
    'bg-sith-primary',
    'bg-sith-secondary',
    'bg-sith-tertiary',
    'bg-sith-accent',
    'bg-sith-background',
    'text-jedi-primary',
    'text-jedi-secondary',
    'text-jedi-tertiary',
    'text-jedi-accent',
    'text-jedi-background',
    'text-sith-primary',
    'text-sith-secondary',
    'text-sith-tertiary',
    'text-sith-accent',
    'text-sith-background',
    'from-jedi-primary',
    'to-jedi-primary',
    'via-jedi-primary',
    'from-jedi-secondary',
    'to-jedi-secondary',
    'via-jedi-secondary',
    'from-jedi-tertiary',
    'to-jedi-tertiary',
    'via-jedi-tertiary',
    'from-jedi-accent',
    'to-jedi-accent',
    'via-jedi-accent',
    'from-jedi-background',
    'to-jedi-background',
    'via-jedi-background',
    'from-sith-primary',
    'to-sith-primary',
    'via-sith-primary',
    'from-sith-secondary',
    'to-sith-secondary',
    'via-sith-secondary',
    'from-sith-tertiary',
    'to-sith-tertiary',
    'via-sith-tertiary',
    'from-sith-accent',
    'to-sith-accent',
    'via-sith-accent',
    'from-sith-background',
    'to-sith-background',
    'via-sith-background',
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
          accent: '#ffffff', // White
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
    },
  },
  plugins: [],
  presets: [require('../../tailwind-workspace-preset.js')],
};
