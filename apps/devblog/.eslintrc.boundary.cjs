module.exports = {
  root: true,
  plugins: ['boundaries', 'tailwindcss'],
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
    'tailwindcss/no-custom-classname': 'off',
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
