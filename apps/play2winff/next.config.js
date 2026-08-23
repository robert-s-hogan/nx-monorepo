//@ts-check

// eslint-disable-next-line @typescript-eslint/no-var-requires
const { withNx } = require('@nx/next/plugins/with-nx');

/**
 * @type {import('@nx/next/plugins/with-nx').WithNxOptions}
 **/
const nextConfig = {
  nx: {},
  // Self-hosted NFL team logos (public/nfl-logos/) never change once
  // downloaded, so cache them for a full year instead of relying on
  // Next's default public/ handling.
  async headers() {
    return [
      {
        source: '/nfl-logos/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
    ];
  },
};

module.exports = withNx(nextConfig);
