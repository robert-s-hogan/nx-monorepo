const { FlatCompat } = require('@eslint/eslintrc');
const js = require('@eslint/js');
const nxEslintPlugin = require('@nx/eslint-plugin');
const eslintPluginTailwindcss = require('eslint-plugin-tailwindcss');
const eslintPluginStorybook = require('eslint-plugin-storybook');

const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: js.configs.recommended,
});

module.exports = [
  // eslint-plugin-storybook ships ESM-only (no CJS build). A plain
  // top-level require() works fine under Node 22's require(esm) support,
  // but FlatCompat's extends() resolves plugins through @eslint/eslintrc's
  // bundled loader, which doesn't and throws ERR_REQUIRE_ESM -- so this
  // uses the plugin's native flat config export directly instead, same as
  // the eslint-plugin-tailwindcss config just below.
  ...eslintPluginStorybook.configs['flat/recommended'],
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
    files: ['**/*.ts', '**/*.tsx', '**/*.cts', '**/*.mts'],
    rules: {
      ...config.rules,
    },
  })),
  ...compat.config({ extends: ['plugin:@nx/javascript'] }).map((config) => ({
    ...config,
    files: ['**/*.js', '**/*.jsx', '**/*.cjs', '**/*.mjs'],
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
  {
    ignores: ['**/vite.config.*.timestamp*', '**/vitest.config.*.timestamp*'],
  },
  {
    // eslint.config.js / .storybook/main.js / tailwind.config.js are build
    // tooling, not app source -- they legitimately do relative requires
    // (e.g. require('../../eslint.config.js'),
    // require('../../tailwind-workspace-preset.js')) to inherit a shared
    // parent config, which @nx/enforce-module-boundaries otherwise flags
    // as an "external resource" import.
    ignores: [
      '**/eslint.config.js',
      '**/.storybook/main.js',
      '**/tailwind.config.js',
    ],
  },
];
