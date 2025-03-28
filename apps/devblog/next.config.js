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
