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
        'rich-black': '#0A191C',
        'black-custom': '#000507',
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
