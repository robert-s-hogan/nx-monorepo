// Shared plumbing for pages/api/flashcards/*: method dispatch, sign-in or
// API key check, schema setup and error responses.
import { createHash, randomBytes } from 'crypto';
import { NextApiRequest, NextApiResponse } from 'next';
import { getRoleForEmail, getUserFromRequest } from '@with-nx/auth';

import { getDb } from '../db';
import { HttpError } from './errors';
import { ensureSchema } from './schema';

export { HttpError };

export const KEY_PREFIX = 'hfc_';

export const hashKey = (key: string) =>
  createHash('sha256').update(key).digest('hex');

export function newApiKey(): string {
  return KEY_PREFIX + randomBytes(24).toString('base64url');
}

async function ownerFromApiKey(key: string): Promise<string | null> {
  const db = getDb();
  const result = await db.execute({
    sql: 'SELECT id, owner FROM fc_api_keys WHERE hash = ?',
    args: [hashKey(key)],
  });
  const row = result.rows[0];
  if (!row) return null;
  const owner = row.owner as string;
  // A key stops working once its owner leaves the family list.
  if (getRoleForEmail(owner) !== 'family') return null;
  await db.execute({
    sql: 'UPDATE fc_api_keys SET last_used_at = ? WHERE id = ?',
    args: [new Date().toISOString(), row.id as string],
  });
  return owner;
}

/**
 * The email whose flashcards this request may touch: a signed-in family
 * member, or (where allowed) the owner of a personal API key.
 */
async function getOwner(req: NextApiRequest, allowApiKey: boolean) {
  const auth = req.headers.authorization ?? '';
  const token = auth.startsWith('Bearer ') ? auth.slice(7).trim() : '';
  if (token.startsWith(KEY_PREFIX)) {
    if (!allowApiKey) return null;
    await ensureSchema();
    return ownerFromApiKey(token);
  }
  const user = await getUserFromRequest(req);
  return user?.role === 'family' ? user.email.toLowerCase() : null;
}

type Method = 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE';

export interface RouteContext {
  req: NextApiRequest;
  res: NextApiResponse;
  owner: string;
}

type Handler = (ctx: RouteContext) => Promise<unknown>;

export function flashcardsRoute(
  handlers: Partial<Record<Method, Handler>>,
  { allowApiKey = true }: { allowApiKey?: boolean } = {},
) {
  return async (req: NextApiRequest, res: NextApiResponse) => {
    const handler = handlers[req.method as Method];
    if (!handler) {
      res.setHeader('Allow', Object.keys(handlers));
      return res.status(405).json({ error: `Method ${req.method} not allowed` });
    }
    try {
      const owner = await getOwner(req, allowApiKey);
      if (!owner) return res.status(401).json({ error: 'Not authorized' });
      await ensureSchema();
      const result = await handler({ req, res, owner });
      if (res.headersSent) return;
      if (result === undefined) return res.status(204).end();
      return res.status(200).json(result);
    } catch (err) {
      if (err instanceof HttpError) {
        return res.status(err.status).json({ error: err.message });
      }
      console.error('flashcards api', err);
      return res.status(500).json({ error: 'Something went wrong on the server' });
    }
  };
}

export function queryString(req: NextApiRequest, key: string): string | undefined {
  const v = req.query[key];
  return typeof v === 'string' ? v : undefined;
}

/** Local start of today as sent by the browser, or UTC midnight. */
export function dayStartFrom(req: NextApiRequest): Date {
  const raw = queryString(req, 'dayStart') ?? (req.body as { dayStart?: string })?.dayStart;
  const d = raw ? new Date(raw) : null;
  if (d && !Number.isNaN(d.getTime())) return d;
  const now = new Date();
  return new Date(Date.UTC(now.getUTCFullYear(), now.getUTCMonth(), now.getUTCDate()));
}

export const newId = () => crypto.randomUUID();

/** Reads a body that Next's parser was turned off for (CSV, media). */
export async function readRawBody(req: NextApiRequest, limit: number): Promise<Uint8Array> {
  const parts: Uint8Array[] = [];
  let size = 0;
  for await (const part of req) {
    const buf: Uint8Array = typeof part === 'string' ? new TextEncoder().encode(part) : new Uint8Array(part);
    size += buf.length;
    if (size > limit) throw new HttpError(413, `That's over the ${Math.round(limit / 1048576)} MB limit`);
    parts.push(buf);
  }
  const out = new Uint8Array(size);
  let at = 0;
  for (const p of parts) {
    out.set(p, at);
    at += p.length;
  }
  return out;
}

/** Body field helpers that throw a 400 instead of saving junk. */
export function bodyOf<T extends object>(req: NextApiRequest): Partial<T> {
  const b = req.body;
  if (!b || typeof b !== 'object' || Array.isArray(b)) throw new HttpError(400, 'Expected a JSON object');
  return b as Partial<T>;
}

export function str(v: unknown, name: string): string {
  if (typeof v !== 'string') throw new HttpError(400, `${name} is required`);
  return v;
}

export function strArray(v: unknown, name: string): string[] {
  if (!Array.isArray(v) || v.some((x) => typeof x !== 'string')) {
    throw new HttpError(400, `${name} must be a list of text`);
  }
  return v as string[];
}
