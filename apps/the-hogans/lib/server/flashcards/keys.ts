// Personal API keys for scripts (CSV uploads with curl, etc.). Only a hash
// is stored; the key itself is shown once when it's made.
import { getDb } from '../db';
import { hashKey, HttpError, KEY_PREFIX, newApiKey, newId } from './route';
import { ApiKeyInfo } from '../../../components/flashcards/types';

export async function listKeys(owner: string): Promise<ApiKeyInfo[]> {
  const result = await getDb().execute({
    sql: 'SELECT id, label, prefix, created_at, last_used_at FROM fc_api_keys WHERE owner = ? ORDER BY created_at DESC',
    args: [owner],
  });
  return result.rows.map((r) => ({
    id: r.id as string,
    label: r.label as string,
    prefix: r.prefix as string,
    createdAt: r.created_at as string,
    lastUsedAt: (r.last_used_at as string | null) ?? null,
  }));
}

export async function createKey(owner: string, label: string) {
  const name = label.trim().slice(0, 60);
  if (!name) throw new HttpError(400, 'Give the key a name so you can tell keys apart');
  const key = newApiKey();
  const info: ApiKeyInfo = {
    id: newId(),
    label: name,
    prefix: key.slice(0, KEY_PREFIX.length + 6),
    createdAt: new Date().toISOString(),
    lastUsedAt: null,
  };
  await getDb().execute({
    sql: 'INSERT INTO fc_api_keys (id, owner, label, prefix, hash, created_at) VALUES (?, ?, ?, ?, ?, ?)',
    args: [info.id, owner, info.label, info.prefix, hashKey(key), info.createdAt],
  });
  return { key, info };
}

export async function deleteKey(owner: string, id: string) {
  await getDb().execute({ sql: 'DELETE FROM fc_api_keys WHERE owner = ? AND id = ?', args: [owner, id] });
}
