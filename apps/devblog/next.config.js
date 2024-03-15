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
      'raw.githubusercontent.com',
      'rshogan.imgix.net',
      'images.pexels.com',
      'images.unsplash.com',
      'img.icons8.com',
      'oaidalleapiprodscus.blob.core.windows.net',
      'rshogan.imgix.net',
      'robertshogan.dreamhosters.com',
      'framerusercontent.com',
    ],
  },
};

const withMDX = require('@next/mdx')({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [],
    rehypePlugins: [],
  },
});

// Merge MDX config with Next.js config
module.exports = withNx(withMDX(nextConfig));
