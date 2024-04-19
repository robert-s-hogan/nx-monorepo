const { createGlobPatternsForDependencies } = require('@nx/react/tailwind');
const { join } = require('path');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    join(
      __dirname,
      '{src,pages,components,app}/**/*!(*.stories|*.spec).{ts,tsx,html}'
    ),
    ...createGlobPatternsForDependencies(__dirname),
  ],
  theme: {
    colors: {
      black: '#0c0c0c',
      white: '#fff',
      orange: '#db5f0c',
      purple: '#9312db',
      brown: '#622c22',
      green: '#4eda12',
      blue: '#0c0cdb',
      fair: '#ffd6a4',
      red: '#d51449',
      grey: '#d8d8d8',
      silver: '#c0c0c0',
      tan: '#d6b995',
      auburn: '#a52a2a',
      yellow: '#daab0e',
      pink: '#d810ab',
      skyBlue: '#0cdad0',
      darkBlue: '#1111de',
      limeGreen: '#b9da10',
      skin: '#ffcd94',
      transparent: 'rgba(0, 0, 0, 0)',
    },
    fontFamily: {
      sans: ['Poller One', 'cursive'],
      serif: ['Roboto Flex', 'sans-serif'],
    },
    extend: {
      backgroundImage: (theme) => ({
        'cityscape-gradient':
          'linear-gradient(0deg, #2883ff -25%, #24266b 40%, #0b0b2b 75%, #000 100%)',
        starfield: 'var(--background-starfield)',
        'gas-giant': "url('/swapi/swapi-gas-giant.png')",
        'thunder-cloud':
          "url('https://www.seekpng.com/png/full/1-18983_thunder-cloud-png-clip-art-transparent-library-thunder.png')",
      }),
      clipPath: {
        hill: 'polygon(50% 0%, 100% 100%, 0 100%)', // A simple hill shape
        'hill-steep': 'polygon(30% 0%, 100% 100%, 0 100%)', // A steeper hill
        // Add more custom shapes here
      },
      colors: {
        starfield: 'var(--background-starfield)',
        star: 'var(--star-color)',
      },
      keyframes: {
        bubble: {
          '0%': { transform: 'translateY(100%)', opacity: 0 },
          '100%': { transform: 'translateY(0%)', opacity: 1 },
        },
        rotatePlanet: {
          '0%': { backgroundPosition: '0% 0%' },
          '100%': { backgroundPosition: '200% 0%' },
        },
        waves: {
          '0%, 100%': { transform: 'translateX(0)' },
          '50%': { transform: 'translateX(-25%)' },
        },
      },
      animation: {
        bubble: 'bubble 10s ease-in-out infinite',
        rotatePlanet: 'rotatePlanet 85s linear infinite',
        waves: 'waves 10s ease infinite',
      },
      spacing: {
        18: '4.5rem',
        22: '5.5rem',
        34: '8rem',
        41: '10.25rem',
        46: '11.5rem',
        54: '13.5rem',
        58: '14.5rem',
        62: '15.5rem',
        66: '16.5rem',
        68: '17rem',
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
  plugins: [],
};
