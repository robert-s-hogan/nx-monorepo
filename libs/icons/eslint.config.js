const { FlatCompat } = require('@eslint/eslintrc');
const path = require('path');
const js = require('@eslint/js');
const baseConfig = require('../../eslint.config.js');

const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: js.configs.recommended,
});

module.exports = [
  ...baseConfig,
  ...compat.extends('plugin:@nx/react'),
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
