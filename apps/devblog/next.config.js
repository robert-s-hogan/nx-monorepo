// @ts-check

// eslint-disable-next-line @typescript-eslint/no-var-requires
const { withNx } = require('@nrwl/next/plugins/with-nx');
const path = require('path');

const withMDX = require('@next/mdx')({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [],
    rehypePlugins: [],
  },
});

/**
 * @type {import('@nrwl/next/plugins/with-nx').WithNxOptions}
 **/
const nextConfig = {
  nx: {
    svgr: false,
  },
  images: {
    domains: [
      'www.dndbeyond.com',
      'rhogandev.wordpress.com',
      'dazzling-rshgymtemplate.wordpress.com',
      'static.wikia.nocookie.net',
      'raw.githubusercontent.com',
      'localhost',
      'app-assets.vercel.app',
      'github.com',
      'images.pexels.com',
      'images.unsplash.com',
      'img.icons8.com',
      'oaidalleapiprodscus.blob.core.windows.net',
      'framerusercontent.com',
    ],
  },
  webpack: (config) => {
    config.resolve.alias = {
      ...(config.resolve.alias || {}),
      '@devblog/components': path.resolve(__dirname, 'components'),
    };
    return config;
  },
};

// Combine MDX and Nx with final config
module.exports = withNx(withMDX(nextConfig));
