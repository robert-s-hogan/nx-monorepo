// Server-only DB access for sessions. Called from pages/api/sessions/*.
import { db } from './db';
import type { Session } from '../../types';

export async function fetchSessions(): Promise<Session[]> {
  const [sessionsResult, membershipResult] = await Promise.all([
    db
      .from('sessions')
      .select('id, name, created_at, campaign_id')
      .order('created_at', { ascending: true }),
    db.from('session_characters').select('session_id, character_id'),
  ]);
  if (sessionsResult.error) throw sessionsResult.error;
  if (membershipResult.error) throw membershipResult.error;

  const membersBySession = new Map<string, string[]>();
  for (const row of membershipResult.data ?? []) {
    const list = membersBySession.get(row.session_id) ?? [];
    list.push(row.character_id);
    membersBySession.set(row.session_id, list);
  }

  return (sessionsResult.data ?? []).map((r) => ({
    id: r.id as string,
    name: r.name as string,
    created_at: r.created_at as string,
    campaign_id: (r.campaign_id as string) ?? null,
    active_character_ids: membersBySession.get(r.id as string) ?? [],
  }));
}

export async function insertSession(session: Session): Promise<void> {
  const { error } = await db.from('sessions').insert({
    id: session.id,
    name: session.name,
    created_at: session.created_at,
    campaign_id: session.campaign_id ?? null,
  });
  if (error) throw error;
}

export async function deleteSessionById(id: string): Promise<void> {
  const { error } = await db.from('sessions').delete().eq('id', id);
  if (error) throw error;
}

export async function addCharacterToSession(
  sessionId: string,
  characterId: string
): Promise<void> {
  const { error } = await db
    .from('session_characters')
    .upsert(
      { session_id: sessionId, character_id: characterId },
      { onConflict: 'session_id,character_id', ignoreDuplicates: true }
    );
  if (error) throw error;
}

export async function removeCharacterFromSession(
  sessionId: string,
  characterId: string
): Promise<void> {
  const { error } = await db
    .from('session_characters')
    .delete()
    .eq('session_id', sessionId)
    .eq('character_id', characterId);
  if (error) throw error;
}
