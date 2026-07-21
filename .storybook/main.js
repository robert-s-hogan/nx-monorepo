const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');
const path = require('path');

module.exports = {
  stories: [],
  addons: [
    '@storybook/addon-essentials',
    '@storybook/addon-mdx-gfm',
    '@storybook/addon-webpack5-compiler-swc',
  ],

  // Storybook's webpack has no knowledge of this workspace's @with-nx/*
  // path aliases (tsconfig.base.json) unless told about them explicitly —
  // TsconfigPathsPlugin reads that file directly. Without this, any
  // cross-lib *value* import (not just a type import, which gets erased
  // before bundling) fails with "Module not found" the moment a story
  // actually exercises it.
  webpackFinal: async (config, { configType }) => {
    config.resolve = config.resolve || {};
    config.resolve.plugins = [
      ...(config.resolve.plugins || []),
      new TsconfigPathsPlugin({
        configFile: path.resolve(__dirname, '../tsconfig.base.json'),
      }),
    ];

    return config;
  },

  framework: {
    name: '@storybook/react-webpack5',
    options: {}
  }
};