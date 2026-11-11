// Server-only entry (@with-nx/auth/server): API routes import from here so
// the email allowlist stays out of anything the browser bundles.
export {
  getRoleFromRequest,
  getUserFromRequest,
  requireRole,
} from './lib/verify-request';
export { getRoleForEmail } from './lib/allowlist';
export { meHandler } from './lib/me-handler';
