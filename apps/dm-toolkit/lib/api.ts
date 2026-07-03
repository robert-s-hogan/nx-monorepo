// Client-safe fetch wrappers around this app's own /api/* routes.
// The store calls these exclusively — no direct DB access outside pages/api/*.
import type { Character, Session } from '../types';

async function request(url: string, init?: RequestInit): Promise<Response> {
  const res = await fetch(url, {
    headers: { 'Content-Type': 'application/json' },
    ...init,
  });
  if (!res.ok) {
    throw new Error(`${init?.method ?? 'GET'} ${url} failed: ${res.status}`);
  }
  return res;
}

// ── Characters ──────────────────────────────────────────────────────────────

export async function fetchCharacters(): Promise<Character[]> {
  const res = await request('/api/characters');
  return res.json();
}

export async function createCharacter(character: Character): Promise<void> {
  await request('/api/characters', {
    method: 'POST',
    body: JSON.stringify(character),
  });
}

export async function patchCharacter(character: Character): Promise<void> {
  await request(`/api/characters/${character.id}`, {
    method: 'PATCH',
    body: JSON.stringify(character),
  });
}

export async function deleteCharacterById(id: string): Promise<void> {
  await request(`/api/characters/${id}`, { method: 'DELETE' });
}

// ── Sessions ────────────────────────────────────────────────────────────────

export async function fetchSessions(): Promise<Session[]> {
  const res = await request('/api/sessions');
  return res.json();
}

export async function createSession(session: Session): Promise<void> {
  await request('/api/sessions', {
    method: 'POST',
    body: JSON.stringify(session),
  });
}

export async function deleteSessionById(id: string): Promise<void> {
  await request(`/api/sessions/${id}`, { method: 'DELETE' });
}

export async function addCharacterToSession(
  sessionId: string,
  characterId: string
): Promise<void> {
  await request(`/api/sessions/${sessionId}/characters`, {
    method: 'POST',
    body: JSON.stringify({ characterId }),
  });
}

export async function removeCharacterFromSession(
  sessionId: string,
  characterId: string
): Promise<void> {
  await request(`/api/sessions/${sessionId}/characters`, {
    method: 'DELETE',
    body: JSON.stringify({ characterId }),
  });
}
