// Server-only resolution + DB access for ad-hoc skill checks not tied to a
// physical structure — see types/index.ts's GeneralCheckEvent for why this
// is much thinner than lib/server/structureResolution.ts (no authored
// outcome content to look up, the DM narrates the result live).
import { db } from './db';
import { fetchCharacterById } from './characters';
import { skillModifier } from '../dice';
import type { GeneralCheckEvent, OutcomeTier } from '../../types';

function rowToEvent(row: Record<string, unknown>): GeneralCheckEvent {
  return {
    id: row.id as string,
    map_id: row.map_id as string,
    character_id: (row.character_id as string) ?? null,
    skill: row.skill as string,
    dc: Number(row.dc),
    roll: Number(row.roll),
    total: Number(row.total),
    tier: row.tier as OutcomeTier,
    created_at: row.created_at as string,
  };
}

export async function fetchGeneralCheckEventsForMap(mapId: string): Promise<GeneralCheckEvent[]> {
  const { data, error } = await db
    .from('general_check_events')
    .select('*')
    .eq('map_id', mapId)
    .order('created_at', { ascending: true });
  if (error) throw error;
  return (data ?? []).map(rowToEvent);
}

export async function resolveGeneralCheck(
  mapId: string,
  characterId: string | null,
  skill: string,
  dc: number,
  rawRoll: number
): Promise<GeneralCheckEvent> {
  const character = characterId ? await fetchCharacterById(characterId) : null;
  const mod = character ? skillModifier(skill, character.stats) : 0;
  const total = rawRoll + mod;
  const tier: OutcomeTier =
    rawRoll === 1 ? 'crit_fail' : rawRoll === 20 ? 'crit_success' : total >= dc ? 'success' : 'fail';

  const { data, error } = await db
    .from('general_check_events')
    .insert({ map_id: mapId, character_id: characterId, skill, dc, roll: rawRoll, total, tier })
    .select('*')
    .single();
  if (error) throw error;
  return rowToEvent(data);
}
