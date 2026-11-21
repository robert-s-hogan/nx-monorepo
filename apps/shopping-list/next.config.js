//@ts-check

// eslint-disable-next-line @typescript-eslint/no-var-requires
const { withNx } = require('@nx/next/plugins/with-nx');
// Root-level config shared by every app, like tailwind-workspace-preset.js.
// eslint-disable-next-line @typescript-eslint/no-var-requires, @nx/enforce-module-boundaries
const { securityHeaders } = require('../../next-security-headers');

/**
 * @type {import('@nx/next/plugins/with-nx').WithNxOptions}
 **/
const nextConfig = {
  nx: {},
  async headers() {
    return securityHeaders();
  },
};

module.exports = withNx(nextConfig);
