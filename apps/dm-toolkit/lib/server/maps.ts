// Server-only DB access for game maps and their tokens. Called from
// pages/api/maps/*.
import { db } from './db';
import type { CombatEvent, GameMap, MapToken, MovementEvent } from '../../types';

function rowToMap(row: Record<string, unknown>): GameMap {
  return {
    id: row.id as string,
    session_id: row.session_id as string,
    name: row.name as string,
    background_url: (row.background_url as string) ?? null,
    width: Number(row.width),
    height: Number(row.height),
    created_at: row.created_at as string,
    turn_order: (row.turn_order as string[]) ?? [],
    current_turn_index: Number(row.current_turn_index ?? 0),
    round_number: Number(row.round_number ?? 1),
    combat_active: Boolean(row.combat_active),
    story: (row.story as GameMap['story']) ?? null,
  };
}

function rowToToken(row: Record<string, unknown>): MapToken {
  return {
    id: row.id as string,
    map_id: row.map_id as string,
    character_id: (row.character_id as string) ?? null,
    label: row.label as string,
    x: Number(row.x),
    y: Number(row.y),
    hidden: Boolean(row.hidden),
    hp_current: Number(row.hp_current),
    hp_max: Number(row.hp_max),
    armor_class: Number(row.armor_class),
    side: row.side as MapToken['side'],
    updated_at: row.updated_at as string,
    initiative: (row.initiative as number) ?? null,
    flavor_text: (row.flavor_text as string) ?? null,
  };
}

function rowToMovementEvent(row: Record<string, unknown>): MovementEvent {
  return {
    id: row.id as string,
    map_id: row.map_id as string,
    token_id: row.token_id as string,
    from_x: Number(row.from_x),
    from_y: Number(row.from_y),
    to_x: Number(row.to_x),
    to_y: Number(row.to_y),
    created_at: row.created_at as string,
  };
}

export async function fetchMapsForSession(sessionId: string): Promise<GameMap[]> {
  const { data, error } = await db
    .from('game_maps')
    .select('*')
    .eq('session_id', sessionId)
    .order('created_at', { ascending: true });
  if (error) throw error;
  return (data ?? []).map(rowToMap);
}

export async function insertMap(map: GameMap): Promise<void> {
  const { error } = await db.from('game_maps').insert({
    id: map.id,
    session_id: map.session_id,
    name: map.name,
    background_url: map.background_url ?? null,
    width: map.width,
    height: map.height,
    created_at: map.created_at,
    story: map.story ?? null,
  });
  if (error) throw error;
}

export async function updateMapStory(mapId: string, story: GameMap['story']): Promise<void> {
  const { error } = await db.from('game_maps').update({ story }).eq('id', mapId);
  if (error) throw error;
}

export async function fetchTokensForMap(mapId: string): Promise<MapToken[]> {
  const { data, error } = await db.from('map_tokens').select('*').eq('map_id', mapId);
  if (error) throw error;
  return (data ?? []).map(rowToToken);
}

export async function fetchTokenById(id: string): Promise<MapToken> {
  const { data, error } = await db.from('map_tokens').select('*').eq('id', id).single();
  if (error) throw error;
  return rowToToken(data);
}

export async function updateTokenHp(id: string, hpCurrent: number): Promise<void> {
  const { error } = await db
    .from('map_tokens')
    .update({ hp_current: hpCurrent, updated_at: new Date().toISOString() })
    .eq('id', id);
  if (error) throw error;
}

// Lets the DM re-flag an already-placed token (a "backstab" turning an ally
// hostile, or just fixing a mis-set side during setup) without deleting and
// re-adding it.
export async function updateTokenSide(id: string, side: MapToken['side']): Promise<void> {
  const { error } = await db
    .from('map_tokens')
    .update({ side, updated_at: new Date().toISOString() })
    .eq('id', id);
  if (error) throw error;
}

export async function insertToken(token: MapToken): Promise<void> {
  const { error } = await db.from('map_tokens').insert({
    id: token.id,
    map_id: token.map_id,
    character_id: token.character_id ?? null,
    label: token.label,
    x: token.x,
    y: token.y,
    hidden: token.hidden,
    hp_current: token.hp_current,
    hp_max: token.hp_max,
    armor_class: token.armor_class,
    side: token.side,
    flavor_text: token.flavor_text ?? null,
  });
  if (error) throw error;
  await appendToTurnOrderIfActive(token.map_id, token.id);
}

export async function updateTokenPosition(
  mapId: string,
  tokenId: string,
  x: number,
  y: number
): Promise<void> {
  const { data: current, error: fetchErr } = await db
    .from('map_tokens')
    .select('x, y')
    .eq('id', tokenId)
    .single();
  if (fetchErr) throw fetchErr;

  const { error } = await db
    .from('map_tokens')
    .update({ x, y, updated_at: new Date().toISOString() })
    .eq('id', tokenId);
  if (error) throw error;

  const { error: eventErr } = await db.from('movement_events').insert({
    map_id: mapId,
    token_id: tokenId,
    from_x: current.x,
    from_y: current.y,
    to_x: x,
    to_y: y,
  });
  if (eventErr) throw eventErr;
}

export async function deleteTokenById(mapId: string, tokenId: string): Promise<void> {
  const { error } = await db.from('map_tokens').delete().eq('id', tokenId);
  if (error) throw error;
  await removeFromTurnOrderIfActive(mapId, tokenId);
}

export async function fetchMovementEventsForMap(mapId: string): Promise<MovementEvent[]> {
  const { data, error } = await db
    .from('movement_events')
    .select('*')
    .eq('map_id', mapId)
    .order('created_at', { ascending: true });
  if (error) throw error;
  return (data ?? []).map(rowToMovementEvent);
}

// A mid-encounter token add (e.g. a boss spawn) joins the back of the turn
// order automatically rather than requiring a re-roll.
async function appendToTurnOrderIfActive(mapId: string, tokenId: string): Promise<void> {
  const { data: map, error } = await db
    .from('game_maps')
    .select('combat_active, turn_order')
    .eq('id', mapId)
    .single();
  if (error) throw error;
  if (!map?.combat_active) return;

  const turnOrder = [...((map.turn_order as string[]) ?? []), tokenId];
  const { error: updateErr } = await db.from('game_maps').update({ turn_order: turnOrder }).eq('id', mapId);
  if (updateErr) throw updateErr;
}

// Removing a token mid-encounter shifts the order and clamps the current
// index so it doesn't end up pointing past the end of the (now shorter)
// array or skip/repeat a turn.
async function removeFromTurnOrderIfActive(mapId: string, tokenId: string): Promise<void> {
  const { data: map, error } = await db
    .from('game_maps')
    .select('combat_active, turn_order, current_turn_index')
    .eq('id', mapId)
    .single();
  if (error) throw error;
  if (!map?.combat_active) return;

  const turnOrder = (map.turn_order as string[]) ?? [];
  const removedIndex = turnOrder.indexOf(tokenId);
  if (removedIndex === -1) return;

  const newOrder = turnOrder.filter((id) => id !== tokenId);
  let currentIndex = Number(map.current_turn_index ?? 0);
  if (removedIndex < currentIndex) {
    currentIndex -= 1;
  } else if (removedIndex === currentIndex && currentIndex >= newOrder.length) {
    currentIndex = 0;
  }
  if (newOrder.length === 0) currentIndex = 0;

  const { error: updateErr } = await db
    .from('game_maps')
    .update({ turn_order: newOrder, current_turn_index: currentIndex })
    .eq('id', mapId);
  if (updateErr) throw updateErr;
}

export async function startCombat(
  mapId: string,
  initiativeByTokenId: Record<string, number>
): Promise<void> {
  const entries = Object.entries(initiativeByTokenId);
  const updates = await Promise.all(
    entries.map(([tokenId, initiative]) =>
      db.from('map_tokens').update({ initiative }).eq('id', tokenId)
    )
  );
  const failed = updates.find((u) => u.error);
  if (failed?.error) throw failed.error;

  const turnOrder = entries.sort((a, b) => b[1] - a[1]).map(([tokenId]) => tokenId);
  const { error } = await db
    .from('game_maps')
    .update({ turn_order: turnOrder, current_turn_index: 0, round_number: 1, combat_active: true })
    .eq('id', mapId);
  if (error) throw error;
}

export async function advanceTurn(mapId: string): Promise<void> {
  const { data: map, error } = await db
    .from('game_maps')
    .select('turn_order, current_turn_index, round_number')
    .eq('id', mapId)
    .single();
  if (error) throw error;

  const turnOrder = (map?.turn_order as string[]) ?? [];
  if (turnOrder.length === 0) return;

  let nextIndex = Number(map?.current_turn_index ?? 0) + 1;
  let round = Number(map?.round_number ?? 1);
  if (nextIndex >= turnOrder.length) {
    nextIndex = 0;
    round += 1;
  }

  const { error: updateErr } = await db
    .from('game_maps')
    .update({ current_turn_index: nextIndex, round_number: round })
    .eq('id', mapId);
  if (updateErr) throw updateErr;
}

export async function endCombat(mapId: string): Promise<void> {
  const { error } = await db
    .from('game_maps')
    .update({ turn_order: [], current_turn_index: 0, round_number: 1, combat_active: false })
    .eq('id', mapId);
  if (error) throw error;
}

// Lets the DM seat a token that missed its initiative roll before Start
// Combat (or was added to the map before combat began) into an already-
// active encounter, without ending combat to fix it. Appends to the end of
// turn_order — same convention as a token spawned mid-combat
// (appendToTurnOrderIfActive above) — rather than re-sorting the whole
// order by roll value.
export async function joinTurnOrder(mapId: string, tokenId: string, initiative: number): Promise<void> {
  const { error: tokenErr } = await db.from('map_tokens').update({ initiative }).eq('id', tokenId);
  if (tokenErr) throw tokenErr;

  const { data: map, error } = await db
    .from('game_maps')
    .select('turn_order')
    .eq('id', mapId)
    .single();
  if (error) throw error;

  const turnOrder = (map?.turn_order as string[]) ?? [];
  if (turnOrder.includes(tokenId)) return;

  const { error: updateErr } = await db
    .from('game_maps')
    .update({ turn_order: [...turnOrder, tokenId] })
    .eq('id', mapId);
  if (updateErr) throw updateErr;
}

export async function fetchCombatEventsForMap(mapId: string): Promise<CombatEvent[]> {
  const { data, error } = await db
    .from('combat_events')
    .select('*')
    .eq('map_id', mapId)
    .order('created_at', { ascending: true });
  if (error) throw error;
  return (data ?? []).map((row) => ({
    id: row.id,
    map_id: row.map_id,
    attacker_token_id: row.attacker_token_id,
    defender_token_id: row.defender_token_id,
    roll: row.roll,
    hit: row.hit,
    damage: row.damage,
    defender_hp_after: row.defender_hp_after,
    created_at: row.created_at,
  }));
}
