// Server-only DB access for conquest-mode encounters. Called from
// pages/api/encounters/*.
import { db } from './db';
import type { Encounter, EncounterDifficulty } from '../../types';

function rowToEncounter(row: Record<string, unknown>): Encounter {
  return {
    id: row.id as string,
    campaign_id: row.campaign_id as string,
    difficulty: row.difficulty as EncounterDifficulty,
    encounter_xp: Number(row.encounter_xp),
    objective: (row.objective as string) ?? '',
    map_terrain_type: (row.map_terrain_type as string) ?? '',
    time_of_day: (row.time_of_day as string) ?? '',
    weather: (row.weather as string) ?? '',
    created_at: row.created_at as string,
  };
}

export async function fetchEncountersForCampaign(
  campaignId: string
): Promise<Encounter[]> {
  const { data, error } = await db
    .from('encounters')
    .select('*')
    .eq('campaign_id', campaignId)
    .order('created_at', { ascending: true });
  if (error) throw error;
  return (data ?? []).map(rowToEncounter);
}

export async function insertEncounter(encounter: Encounter): Promise<void> {
  const { error } = await db.from('encounters').insert({
    id: encounter.id,
    campaign_id: encounter.campaign_id,
    difficulty: encounter.difficulty,
    encounter_xp: encounter.encounter_xp,
    objective: encounter.objective,
    map_terrain_type: encounter.map_terrain_type,
    time_of_day: encounter.time_of_day,
    weather: encounter.weather,
    created_at: encounter.created_at,
  });
  if (error) throw error;
}

export async function deleteEncounterById(id: string): Promise<void> {
  const { error } = await db.from('encounters').delete().eq('id', id);
  if (error) throw error;
}
