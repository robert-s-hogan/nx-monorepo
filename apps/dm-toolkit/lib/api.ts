// Client-safe fetch wrappers around this app's own /api/* routes.
// The store calls these exclusively — no direct DB access outside pages/api/*.
import { getAccessToken } from '@with-nx/auth';
import type {
  Campaign,
  CombatEvent,
  Character,
  Encounter,
  GameMap,
  MapStructure,
  MapToken,
  MovementEvent,
  RestState,
  Session,
  StructureCheck,
  StructureCheckWithOutcomes,
  StructureEvent,
  StructureOutcome,
  StructureRollPreview,
} from '../types';

// useStore's actions are zustand store functions, not React components, so
// they can't call the useAuthedFetch() hook — this is the non-hook
// equivalent, attached once here since every write in the app funnels
// through this single request() helper.
async function request(url: string, init?: RequestInit): Promise<Response> {
  const token = await getAccessToken();
  const headers = new Headers(init?.headers);
  headers.set('Content-Type', 'application/json');
  if (token) {
    headers.set('Authorization', `Bearer ${token}`);
  }

  const res = await fetch(url, { ...init, headers });
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

// Public — backs the no-login /map?session=<id> preview link, which needs
// to look up a session's active_map_id with no auth token at all.
export async function fetchSessionById(id: string): Promise<Session | null> {
  const res = await fetch(`/api/sessions/${id}`);
  if (res.status === 404) return null;
  if (!res.ok) throw new Error(`GET /api/sessions/${id} failed: ${res.status}`);
  return res.json();
}

export async function setSessionActiveMap(sessionId: string, mapId: string | null): Promise<void> {
  await request(`/api/sessions/${sessionId}`, {
    method: 'PATCH',
    body: JSON.stringify({ active_map_id: mapId }),
  });
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

// ── Campaigns ───────────────────────────────────────────────────────────────

export async function fetchCampaigns(): Promise<Campaign[]> {
  const res = await request('/api/campaigns');
  return res.json();
}

export async function createCampaign(campaign: Campaign): Promise<void> {
  await request('/api/campaigns', {
    method: 'POST',
    body: JSON.stringify(campaign),
  });
}

export async function addCampaignXp(id: string, delta: number): Promise<void> {
  await request(`/api/campaigns/${id}`, {
    method: 'PATCH',
    body: JSON.stringify({ delta }),
  });
}

export async function deleteCampaignById(id: string): Promise<void> {
  await request(`/api/campaigns/${id}`, { method: 'DELETE' });
}

// ── Encounters (conquest mode) ──────────────────────────────────────────────

export async function fetchEncounters(campaignId: string): Promise<Encounter[]> {
  const res = await request(`/api/encounters?campaignId=${campaignId}`);
  return res.json();
}

export async function createEncounter(encounter: Encounter): Promise<void> {
  await request('/api/encounters', {
    method: 'POST',
    body: JSON.stringify(encounter),
  });
}

export async function deleteEncounterById(id: string): Promise<void> {
  await request(`/api/encounters/${id}`, { method: 'DELETE' });
}

// ── Rest state (conquest mode) ──────────────────────────────────────────────

export async function fetchRestState(campaignId: string): Promise<RestState> {
  const res = await request(`/api/campaigns/${campaignId}/rest`);
  return res.json();
}

export async function saveRestState(state: RestState): Promise<void> {
  await request(`/api/campaigns/${state.campaign_id}/rest`, {
    method: 'PUT',
    body: JSON.stringify(state),
  });
}

// ── Maps / tokens / combat ───────────────────────────────────────────────────

export async function fetchMaps(sessionId: string): Promise<GameMap[]> {
  const res = await request(`/api/maps?sessionId=${sessionId}`);
  return res.json();
}

export async function createMap(map: GameMap): Promise<void> {
  await request('/api/maps', { method: 'POST', body: JSON.stringify(map) });
}

export async function fetchTokens(mapId: string): Promise<MapToken[]> {
  const res = await request(`/api/maps/${mapId}/tokens`);
  return res.json();
}

export async function createToken(token: MapToken): Promise<void> {
  await request(`/api/maps/${token.map_id}/tokens`, {
    method: 'POST',
    body: JSON.stringify(token),
  });
}

export async function updateTokenPosition(
  mapId: string,
  tokenId: string,
  x: number,
  y: number
): Promise<void> {
  await request(`/api/maps/${mapId}/tokens`, {
    method: 'PATCH',
    body: JSON.stringify({ tokenId, x, y }),
  });
}

export async function updateTokenSide(
  mapId: string,
  tokenId: string,
  side: MapToken['side']
): Promise<void> {
  await request(`/api/maps/${mapId}/tokens`, {
    method: 'PATCH',
    body: JSON.stringify({ tokenId, side }),
  });
}

export async function deleteToken(mapId: string, tokenId: string): Promise<void> {
  await request(`/api/maps/${mapId}/tokens`, {
    method: 'DELETE',
    body: JSON.stringify({ tokenId }),
  });
}

export async function fetchCombatEvents(mapId: string): Promise<CombatEvent[]> {
  const res = await request(`/api/maps/${mapId}/events`);
  return res.json();
}

export async function fetchMovementEvents(mapId: string): Promise<MovementEvent[]> {
  const res = await request(`/api/maps/${mapId}/movements`);
  return res.json();
}

export async function startCombat(
  mapId: string,
  initiative: Record<string, number>
): Promise<void> {
  await request(`/api/maps/${mapId}/turn`, {
    method: 'POST',
    body: JSON.stringify({ action: 'start', initiative }),
  });
}

export async function advanceTurn(mapId: string): Promise<void> {
  await request(`/api/maps/${mapId}/turn`, {
    method: 'POST',
    body: JSON.stringify({ action: 'advance' }),
  });
}

export async function endCombat(mapId: string): Promise<void> {
  await request(`/api/maps/${mapId}/turn`, {
    method: 'POST',
    body: JSON.stringify({ action: 'end' }),
  });
}

export async function triggerAttack(
  mapId: string,
  attackerTokenId: string,
  defenderTokenId: string,
  rawAttackRoll: number,
  rawDamageRoll: number
): Promise<CombatEvent> {
  const res = await request(`/api/maps/${mapId}/attack`, {
    method: 'POST',
    body: JSON.stringify({ attackerTokenId, defenderTokenId, rawAttackRoll, rawDamageRoll }),
  });
  return res.json();
}

// ── Structures / checks / outcomes ──────────────────────────────────────────

export async function fetchStructures(mapId: string): Promise<MapStructure[]> {
  const res = await request(`/api/maps/${mapId}/structures`);
  return res.json();
}

export async function createStructure(structure: MapStructure): Promise<void> {
  await request(`/api/maps/${structure.map_id}/structures`, {
    method: 'POST',
    body: JSON.stringify(structure),
  });
}

export async function updateStructurePosition(
  mapId: string,
  structureId: string,
  x: number,
  y: number
): Promise<void> {
  await request(`/api/maps/${mapId}/structures`, {
    method: 'PATCH',
    body: JSON.stringify({ structureId, x, y }),
  });
}

export async function deleteStructure(mapId: string, structureId: string): Promise<void> {
  await request(`/api/maps/${mapId}/structures`, {
    method: 'DELETE',
    body: JSON.stringify({ structureId }),
  });
}

export async function fetchStructureChecks(
  structureId: string
): Promise<StructureCheckWithOutcomes[]> {
  const res = await request(`/api/structures/${structureId}/checks`);
  return res.json();
}

export async function createStructureCheck(
  structureId: string,
  check: StructureCheck,
  outcomes: Omit<StructureOutcome, 'id' | 'check_id'>[]
): Promise<StructureCheckWithOutcomes> {
  const res = await request(`/api/structures/${structureId}/checks`, {
    method: 'POST',
    body: JSON.stringify({ check, outcomes }),
  });
  return res.json();
}

export async function resolveStructureCheck(
  mapId: string,
  structureId: string,
  checkId: string,
  characterId: string | null,
  rawRoll: number,
  outcomeId?: string,
  rawDamageRoll?: number
): Promise<StructureEvent | StructureRollPreview> {
  const res = await request(`/api/structures/${structureId}/resolve`, {
    method: 'POST',
    body: JSON.stringify({ mapId, checkId, characterId, rawRoll, outcomeId, rawDamageRoll }),
  });
  return res.json();
}

export async function fetchStructureEvents(mapId: string): Promise<StructureEvent[]> {
  const res = await request(`/api/maps/${mapId}/structure-events`);
  return res.json();
}

export async function spawnBoss(
  mapId: string,
  characterId: string,
  position?: { x: number; y: number }
): Promise<void> {
  await request(`/api/maps/${mapId}/spawn-boss`, {
    method: 'POST',
    body: JSON.stringify({ characterId, ...position }),
  });
}
