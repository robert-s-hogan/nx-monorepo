import { NextApiRequest, NextApiResponse } from 'next';

import { readMedia, verifyMediaToken } from '../../../../lib/server/flashcards/media';
import { ensureSchema } from '../../../../lib/server/flashcards/schema';

const q = (req: NextApiRequest, key: string) => {
  const v = req.query[key];
  return typeof v === 'string' ? v : '';
};

// Serves one card file to <img>/<audio>. Those can't send a login header,
// so access comes from the signed ?o=&e=&s= query (lib/server/flashcards/media).
// Supports Range requests, which Safari needs to play audio.
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'GET' && req.method !== 'HEAD') {
    res.setHeader('Allow', ['GET', 'HEAD']);
    return res.status(405).end();
  }
  const owner = verifyMediaToken(q(req, 'o'), q(req, 'e'), q(req, 's'));
  if (!owner) return res.status(403).end('Link expired or invalid');
  try {
    await ensureSchema();
    const file = await readMedia(owner, q(req, 'name'));
    if (!file) return res.status(404).end('Not found');

    res.setHeader('Content-Type', file.mime);
    res.setHeader('Cache-Control', 'private, max-age=86400');
    res.setHeader('ETag', `"${file.hash.slice(0, 32)}"`);
    res.setHeader('Accept-Ranges', 'bytes');
    res.setHeader('X-Content-Type-Options', 'nosniff');
    // SVGs opened directly can't run scripts.
    res.setHeader('Content-Security-Policy', "default-src 'none'; style-src 'unsafe-inline'; sandbox");

    const size = file.data.length;
    const range = /^bytes=(\d*)-(\d*)$/.exec(req.headers.range ?? '');
    if (range && (range[1] || range[2])) {
      let start = range[1] ? Number(range[1]) : size - Number(range[2]);
      let end = range[1] && range[2] ? Number(range[2]) : size - 1;
      start = Math.max(0, start);
      end = Math.min(size - 1, end);
      if (start > end) {
        res.setHeader('Content-Range', `bytes */${size}`);
        return res.status(416).end();
      }
      res.setHeader('Content-Range', `bytes ${start}-${end}/${size}`);
      res.setHeader('Content-Length', end - start + 1);
      res.status(206);
      return req.method === 'HEAD' ? res.end() : res.end(file.data.subarray(start, end + 1));
    }
    res.setHeader('Content-Length', size);
    res.status(200);
    return req.method === 'HEAD' ? res.end() : res.end(file.data);
  } catch (err) {
    console.error('flashcards media', err);
    return res.status(500).end();
  }
}
