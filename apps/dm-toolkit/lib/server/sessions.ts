// Server-only DB access for sessions. Called from pages/api/sessions/*.
import { db } from './db';
import type { Session } from '../../types';

export async function fetchSessions(): Promise<Session[]> {
  const [sessionsResult, membershipResult] = await Promise.all([
    db.execute('SELECT id, name, created_at FROM sessions ORDER BY created_at ASC'),
    db.execute('SELECT session_id, character_id FROM session_characters'),
  ]);

  const membersBySession = new Map<string, string[]>();
  for (const row of membershipResult.rows) {
    const sessionId = row.session_id as string;
    const list = membersBySession.get(sessionId) ?? [];
    list.push(row.character_id as string);
    membersBySession.set(sessionId, list);
  }

  return sessionsResult.rows.map((r) => ({
    id: r.id as string,
    name: r.name as string,
    created_at: r.created_at as string,
    active_character_ids: membersBySession.get(r.id as string) ?? [],
  }));
}

export async function insertSession(session: Session): Promise<void> {
  await db.execute({
    sql: 'INSERT INTO sessions (id, name, created_at) VALUES (?, ?, ?)',
    args: [session.id, session.name, session.created_at],
  });
}

export async function deleteSessionById(id: string): Promise<void> {
  await db.execute({ sql: 'DELETE FROM sessions WHERE id = ?', args: [id] });
}

export async function addCharacterToSession(
  sessionId: string,
  characterId: string
): Promise<void> {
  await db.execute({
    sql: 'INSERT OR IGNORE INTO session_characters (session_id, character_id) VALUES (?, ?)',
    args: [sessionId, characterId],
  });
}

export async function removeCharacterFromSession(
  sessionId: string,
  characterId: string
): Promise<void> {
  await db.execute({
    sql: 'DELETE FROM session_characters WHERE session_id = ? AND character_id = ?',
    args: [sessionId, characterId],
  });
}
