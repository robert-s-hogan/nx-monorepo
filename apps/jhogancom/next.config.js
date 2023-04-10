//@ts-check

// eslint-disable-next-line @typescript-eslint/no-var-requires
const { withNx } = require('@nrwl/next/plugins/with-nx');

/**
 * @type {import('@nrwl/next/plugins/with-nx').WithNxOptions}
 **/
const nextConfig = {
  nx: {
    // Set this to true if you would like to to use SVGR
    // See: https://github.com/gregberge/svgr
    svgr: false,
  },
  images: {
    domains: [
      'localhost',
      'rshogan.imgix.net',
      'images.pexels.com',
      'images.unsplash.com',
      'img.icons8.com',
    ],
  },
  future: {
    webpack5: true,
  },
  webpack: (config, { isServer, webpack }) => {
    // Fixes npm packages that depend on `fs` module
    if (!isServer) {
      config.resolve.fallback = {
        fs: false,
      };
    }

    // Add Babel configuration
    config.module.rules.push({
      test: /\.(tsx|ts|js|mjs|jsx)$/,
      exclude: /node_modules/,
      use: {
        loader: 'babel-loader',
        options: {
          presets: ['next/babel'],
          plugins: ['@babel/plugin-transform-runtime'],
        },
      },
    });

    config.resolve.extensions.push('.tsx', '.ts', '.js', '.jsx');

    return config;
  },
};

module.exports = withNx(nextConfig);
