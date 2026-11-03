// Images and audio for cards, stored as blobs in Turso (fc_media), one
// namespace per person. Cards refer to files by name, as in Anki
// (<img src="dog.jpg">, [sound:bark.mp3]). <img> and <audio> can't send a
// login header, so the API hands out signed URLs instead: an HMAC over the
// owner and an expiry, checked by pages/api/flashcards/media/[name].ts.
import { createHash, createHmac, timingSafeEqual } from 'crypto';

import { getDb } from '../db';
import { HttpError } from './route';

export const MAX_MEDIA_BYTES = 4 * 1024 * 1024;

const TYPES: Record<string, string> = {
  jpg: 'image/jpeg', jpeg: 'image/jpeg', png: 'image/png', gif: 'image/gif',
  webp: 'image/webp', svg: 'image/svg+xml', avif: 'image/avif', bmp: 'image/bmp',
  mp3: 'audio/mpeg', m4a: 'audio/mp4', aac: 'audio/aac', ogg: 'audio/ogg',
  oga: 'audio/ogg', opus: 'audio/ogg', wav: 'audio/wav', flac: 'audio/flac',
  webm: 'audio/webm', mp4: 'video/mp4', ogv: 'video/ogg',
};

export function mimeFor(name: string): string | null {
  const ext = name.split('.').pop()?.toLowerCase() ?? '';
  return TYPES[ext] ?? null;
}

export function cleanMediaName(raw: string): string {
  const name = raw
    .replace(/[\\/]/g, '_')
    // eslint-disable-next-line no-control-regex
    .replace(/[\u0000-\u001f"<>[\]]/g, '')
    .trim()
    .slice(-120);
  if (!name || name.startsWith('.')) throw new HttpError(400, 'Bad file name');
  if (!mimeFor(name)) throw new HttpError(415, `Only images and audio can be added (${name})`);
  return name;
}

/**
 * Saves a file and returns the name cards should use. The same content
 * under the same name is reused; a different file with a taken name gets
 * a short hash added, the way Anki avoids clobbering.
 */
export async function saveMedia(owner: string, rawName: string, data: Uint8Array): Promise<string> {
  if (!data.length) throw new HttpError(400, 'Empty file');
  if (data.length > MAX_MEDIA_BYTES) throw new HttpError(413, 'Files are limited to 4 MB');
  let name = cleanMediaName(rawName);
  const hash = createHash('sha256').update(data).digest('hex');
  const db = getDb();
  const existing = await db.execute({
    sql: 'SELECT hash FROM fc_media WHERE owner = ? AND name = ?',
    args: [owner, name],
  });
  if (existing.rows[0]) {
    if (existing.rows[0].hash === hash) return name;
    const dot = name.lastIndexOf('.');
    name = `${name.slice(0, dot)}-${hash.slice(0, 8)}${name.slice(dot)}`;
  }
  await db.execute({
    sql: `INSERT INTO fc_media (owner, name, mime, size, hash, data, created_at) VALUES (?, ?, ?, ?, ?, ?, ?)
          ON CONFLICT (owner, name) DO NOTHING`,
    args: [owner, name, mimeFor(name) as string, data.length, hash, data, new Date().toISOString()],
  });
  return name;
}

export async function readMedia(owner: string, name: string) {
  const result = await getDb().execute({
    sql: 'SELECT mime, data, hash FROM fc_media WHERE owner = ? AND name = ?',
    args: [owner, name],
  });
  const row = result.rows[0];
  if (!row) return null;
  return {
    mime: row.mime as string,
    data: new Uint8Array(row.data as ArrayBuffer),
    hash: row.hash as string,
  };
}

export async function listMedia(owner: string) {
  const result = await getDb().execute({
    sql: 'SELECT name, mime, size, created_at FROM fc_media WHERE owner = ? ORDER BY created_at DESC',
    args: [owner],
  });
  return result.rows.map((r) => ({
    name: r.name as string,
    mime: r.mime as string,
    size: Number(r.size),
    createdAt: r.created_at as string,
  }));
}

/** Deletes files no note refers to any more (Anki's Check Media). */
export async function deleteUnusedMedia(owner: string): Promise<string[]> {
  const db = getDb();
  const files = await listMedia(owner);
  const unused: string[] = [];
  for (const f of files) {
    const pattern = `%${f.name.replace(/[\\%_]/g, (c) => `\\${c}`)}%`;
    const used = await db.execute({
      sql: `SELECT 1 FROM fc_notes WHERE owner = ? AND fields LIKE ? ESCAPE '\\' LIMIT 1`,
      args: [owner, pattern],
    });
    if (!used.rows.length) unused.push(f.name);
  }
  for (const name of unused) {
    await db.execute({ sql: 'DELETE FROM fc_media WHERE owner = ? AND name = ?', args: [owner, name] });
  }
  return unused;
}

// ---- signed URLs ------------------------------------------------------------

function secret(): string {
  const s = process.env.FLASHCARDS_MEDIA_SECRET || process.env.RADTECH_TRACKER_TURSO_AUTH_TOKEN;
  if (!s) throw new HttpError(500, 'Media signing is not configured');
  // Derived, so the Turso token itself never signs anything directly.
  return createHash('sha256').update(`flashcards-media:${s}`).digest('hex');
}

const sign = (owner: string, exp: number) =>
  createHmac('sha256', secret()).update(`${owner}\n${exp}`).digest('base64url');

/**
 * Query string that lets the browser load this person's media until the
 * end of tomorrow (UTC). Stable for a day, so the browser can cache files.
 */
export function mediaToken(owner: string): string {
  const now = new Date();
  const exp = Date.UTC(now.getUTCFullYear(), now.getUTCMonth(), now.getUTCDate() + 2) / 1000;
  const o = Buffer.from(owner).toString('base64url');
  return `o=${o}&e=${exp}&s=${sign(owner, exp)}`;
}

/** The owner a signed media URL is for, or null if it's forged or expired. */
export function verifyMediaToken(o: string, e: string, s: string): string | null {
  const owner = Buffer.from(o, 'base64url').toString();
  const exp = Number(e);
  if (!owner || !Number.isFinite(exp) || exp * 1000 < Date.now()) return null;
  const expected = new TextEncoder().encode(sign(owner, exp));
  const given = new TextEncoder().encode(s);
  if (expected.length !== given.length || !timingSafeEqual(expected, given)) return null;
  return owner;
}
