//@ts-check

// eslint-disable-next-line @typescript-eslint/no-var-requires
const { withNx } = require('@nx/next/plugins/with-nx');

/**
 * @type {import('@nx/next/plugins/with-nx').WithNxOptions}
 **/
const nextConfig = {
  nx: {},
  turbopack: {
    resolveAlias: {
      canvas: './empty-module.js',
    },
  },
};

module.exports = withNx(nextConfig);
