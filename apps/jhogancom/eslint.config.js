const { FlatCompat } = require('@eslint/eslintrc');
const path = require('path');
const js = require('@eslint/js');
const baseConfig = require('../../eslint.config.js');
const nextCoreWebVitals = require('eslint-config-next/core-web-vitals');
const globals = require('globals');

const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: js.configs.recommended,
});

module.exports = [
  ...baseConfig,
  ...compat.extends('plugin:@nx/react-typescript'),
  ...nextCoreWebVitals,
  { languageOptions: { globals: { ...globals.jest } } },
  { rules: { '@next/next/no-html-link-for-pages': 'off' } },
  {
    files: ['**/*.ts', '**/*.tsx', '**/*.js', '**/*.jsx'],
    rules: {
      '@next/next/no-html-link-for-pages': ['error', 'apps/jhogancom/pages'],
    },
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
      tailwindcss: { cssConfigPath: path.join(__dirname, 'styles/styles.css') },
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
  { ignores: ['**/.next/**', '**/next-env.d.ts'] },
];
