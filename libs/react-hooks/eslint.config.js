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
  {
    // eslint-plugin-react-hooks v7's new set-state-in-effect rule flags
    // several patterns here that are legitimate (SSR-safe localStorage
    // reads, external-subscription guard clauses), not bugs -- see the
    // ESLint 8->9 upgrade commit message for the specific cases reviewed.
    // Demoted to warn rather than disabled so it stays visible for a
    // dedicated case-by-case review later.
    rules: { 'react-hooks/set-state-in-effect': 'warn' },
  },
];
