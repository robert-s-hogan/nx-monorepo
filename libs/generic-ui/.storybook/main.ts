import type { StorybookConfig } from '@storybook/react-vite';
import { nxViteTsPaths } from '@nx/vite/plugins/nx-tsconfig-paths.plugin';
import { mergeConfig } from 'vite';
import tailwindcss from 'tailwindcss'; // Import TailwindCSS for use in Vite config

const tailwindConfig = require('../tailwind.config.js'); // Ensure the path is correct

const config: StorybookConfig = {
  stories: ['../src/lib/**/*.stories.@(js|jsx|ts|tsx|mdx)'],
  addons: [
    '@storybook/addon-docs',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    '@storybook/addon-links',
  ],
  framework: {
    name: '@storybook/react-vite',
    options: {},
  },
  viteFinal: async (baseConfig, options) => {
    return mergeConfig(baseConfig, {
      plugins: [nxViteTsPaths()],
      css: {
        postcss: {
          plugins: [
            tailwindcss(tailwindConfig), // Use the imported TailwindCSS function with the config
            require('autoprefixer'),
          ],
        },
      },
    });
  },
};

export default config;
