//@ts-check

// eslint-disable-next-line @typescript-eslint/no-var-requires
const { withNx } = require('@nx/next/plugins/with-nx');
// eslint-disable-next-line @typescript-eslint/no-var-requires
const { readdirSync, existsSync } = require('node:fs');
// eslint-disable-next-line @typescript-eslint/no-var-requires
const { join } = require('node:path');

// Folders under public/ that hold an index.html, e.g. 'home-gym' and
// 'wow/tauren-warrior-prot'. Same scan as scripts/generate-sitemap.mjs.
function standaloneApps(dir = join(__dirname, 'public'), prefix = '') {
  return readdirSync(dir, { withFileTypes: true })
    .filter((entry) => entry.isDirectory())
    .flatMap((entry) => {
      const route = prefix + entry.name;
      const here = existsSync(join(dir, entry.name, 'index.html'))
        ? [route]
        : [];
      return [...here, ...standaloneApps(join(dir, entry.name), `${route}/`)];
    });
}

/**
 * @type {import('@nx/next/plugins/with-nx').WithNxOptions}
 **/
const nextConfig = {
  nx: {},
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'www.the-hogans.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'laurenfitfoodie.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'coin-images.coingecko.com',
        pathname: '/**',
      },
    ],
  },
  // Standalone HTML apps copied from claude.ai artifacts live in public/<path>/
  // and are served at /<path> without the .html path. Drop a folder with an
  // index.html in public/ and it gets a route; no list to edit.
  async rewrites() {
    return standaloneApps().map((route) => ({
      source: `/${route}`,
      destination: `/${route}/index.html`,
    }));
  },
  // Old URLs of pages that moved.
  async redirects() {
    return [
      { source: '/car-care', destination: '/dom/car-care', permanent: true },
    ];
  },
};

module.exports = withNx(nextConfig);
