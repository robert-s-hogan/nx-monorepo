const { FlatCompat } = require('@eslint/eslintrc');
const js = require('@eslint/js');
const nxEslintPlugin = require('@nx/eslint-plugin');
const eslintPluginTailwindcss = require('eslint-plugin-tailwindcss');

const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: js.configs.recommended,
});

module.exports = [
  ...compat.extends('plugin:storybook/recommended'),
  {
    plugins: {
      '@nx': nxEslintPlugin,
    },
  },
  {
    // eslint-plugin-tailwindcss v4 ships a native flat config object (it's
    // self-referencing -- config.plugins.tailwindcss.configs.recommended
    // points back to itself -- which is normal for flat-config plugins but
    // makes the legacy eslintrc engine choke on it via FlatCompat, so this
    // is spread directly instead of going through compat.config(...).
    ...eslintPluginTailwindcss.configs.recommended,
    files: ['**/*.ts', '**/*.tsx', '**/*.js', '**/*.jsx'],
    rules: {
      ...eslintPluginTailwindcss.configs.recommended.rules,
      '@nx/enforce-module-boundaries': [
        'error',
        {
          enforceBuildableLibDependency: true,
          allow: [],
          depConstraints: [
            {
              sourceTag: '*',
              onlyDependOnLibsWithTags: ['*'],
            },
          ],
        },
      ],
    },
  },
  ...compat.config({ extends: ['plugin:@nx/typescript'] }).map((config) => ({
    ...config,
    files: ['**/*.ts', '**/*.tsx'],
    rules: {
      ...config.rules,
    },
  })),
  ...compat.config({ extends: ['plugin:@nx/javascript'] }).map((config) => ({
    ...config,
    files: ['**/*.js', '**/*.jsx'],
    rules: {
      ...config.rules,
    },
  })),
  {
    files: ['**/.storybook/main.@(js|ts)'],
    rules: {
      'storybook/no-uninstalled-addons': 'off',
      '@typescript-eslint/no-var-requires': 'off',
    },
  },
  {
    files: ['**/*.spec.ts', '**/*.spec.tsx', '**/*.test.ts', '**/*.test.tsx'],
    rules: { '@typescript-eslint/no-empty-function': 'off' },
  },
];
