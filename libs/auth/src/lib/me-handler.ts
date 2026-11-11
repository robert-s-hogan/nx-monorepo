import type { NextApiRequest, NextApiResponse } from 'next';

import { getUserFromRequest } from './verify-request';

// GET /api/auth/me: the signed-in user's role, so AuthProvider can gate the
// UI without the allowlist being shipped to the browser. Each app re-exports
// this as pages/api/auth/me.ts.
export async function meHandler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'GET') {
    res.setHeader('Allow', ['GET']);
    return res.status(405).end();
  }
  const user = await getUserFromRequest(req);
  res.setHeader('Cache-Control', 'private, no-store');
  return res.status(200).json({ role: user?.role ?? null });
}
