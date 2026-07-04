// Server-only DB access for game maps and their tokens. Called from
// pages/api/maps/*.
import { db } from './db';
import type { CombatEvent, GameMap, MapToken } from '../../types';

function rowToMap(row: Record<string, unknown>): GameMap {
  return {
    id: row.id as string,
    session_id: row.session_id as string,
    name: row.name as string,
    background_url: (row.background_url as string) ?? null,
    width: Number(row.width),
    height: Number(row.height),
    created_at: row.created_at as string,
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
    updated_at: row.updated_at as string,
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
  });
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
  });
  if (error) throw error;
}

export async function updateTokenPosition(
  id: string,
  x: number,
  y: number
): Promise<void> {
  const { error } = await db
    .from('map_tokens')
    .update({ x, y, updated_at: new Date().toISOString() })
    .eq('id', id);
  if (error) throw error;
}

export async function deleteTokenById(id: string): Promise<void> {
  const { error } = await db.from('map_tokens').delete().eq('id', id);
  if (error) throw error;
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
