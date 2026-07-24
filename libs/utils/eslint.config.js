const baseConfig = require('../../eslint.config.js');
const path = require('path');

module.exports = [
  ...baseConfig,
  {
    files: ['**/*.ts', '**/*.tsx', '**/*.js', '**/*.jsx'],
    // Override or add rules here
    rules: {},
  },
  {
    files: ['**/*.ts', '**/*.tsx'],
    // Override or add rules here
    rules: {},
  },
  {
    files: ['**/*.js', '**/*.jsx'],
    // Override or add rules here
    rules: {},
  },
  {
    settings: {
      tailwindcss: {
        cssConfigPath: path.join(
          __dirname,
          '../react-ui/.storybook/tailwind-imports.css'
        ),
      },
    },
  },
];
