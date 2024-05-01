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
      'images.pexels.com',
      'images.unsplash.com',
      'img.icons8.com',
      'res.cloudinary.com',
      'cloudflare-assets-nx-monorepo.vercel.app',
    ],
    formats: ['image/avif', 'image/webp'],
  },
};

module.exports = withNx(nextConfig);
