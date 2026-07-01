module.exports = {
  root: true,
  plugins: ['boundaries', 'tailwindcss'],
  extends: ['plugin:tailwindcss/recommended'],
  settings: {
    'boundaries/elements': [
      { type: 'atoms', pattern: 'apps/devblog/components/atomic/atoms/*' },
      {
        type: 'molecules',
        pattern: 'apps/devblog/components/atomic/molecules/*',
      },
      {
        type: 'organisms',
        pattern: 'apps/devblog/components/atomic/organisms/*',
      },
    ],
    tailwindcss: {
      config: './tailwind.config.js',
    },
  },
  rules: {
    'tailwindcss/no-custom-classname': [
      'error',
      {
        whitelist: [
          '^bg-(primary|secondary|accent|success|error|warning|info|background|surface|border)$',
          '^text-(primary|secondary|tertiary|inverted)$',
          '^rounded-md$',
          '^opacity-60$',
          '^p-\\d+$',
          '^text-xs$',
          '^text-base$',
        ],
      },
    ],
    'boundaries/element-types': [
      'warn',
      {
        default: 'disallow',
        rules: [
          {
            from: 'apps/devblog/components/atomic/atoms',
            allow: ['apps/devblog/components/atomic/atoms'],
          },
          {
            from: 'apps/devblog/components/atomic/molecules',
            allow: [
              'apps/devblog/components/atomic/atoms',
              'apps/devblog/components/atomic/molecules',
            ],
          },
          {
            from: 'apps/devblog/components/atomic/organisms',
            allow: [
              'apps/devblog/components/atomic/atoms',
              'apps/devblog/components/atomic/molecules',
              'apps/devblog/components/atomic/organisms',
            ],
          },
        ],
      },
    ],
  },
};
