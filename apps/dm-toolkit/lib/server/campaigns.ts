// Server-only DB access for campaigns. Called from pages/api/campaigns/*.
import { db } from './db';
import type { Campaign, ProgressionSystem, SessionMode } from '../../types';

function rowToCampaign(row: Record<string, unknown>): Campaign {
  return {
    id: row.id as string,
    name: row.name as string,
    progression_system: row.progression_system as ProgressionSystem,
    session_mode: row.session_mode as SessionMode,
    current_xp: Number(row.current_xp),
    number_of_players: Number(row.number_of_players),
    created_at: row.created_at as string,
  };
}

export async function fetchCampaigns(): Promise<Campaign[]> {
  const { data, error } = await db
    .from('campaigns')
    .select('*')
    .order('created_at', { ascending: true });
  if (error) throw error;
  return (data ?? []).map((row) => rowToCampaign(row));
}

export async function insertCampaign(campaign: Campaign): Promise<void> {
  const { error } = await db.from('campaigns').insert({
    id: campaign.id,
    name: campaign.name,
    progression_system: campaign.progression_system,
    session_mode: campaign.session_mode,
    current_xp: campaign.current_xp,
    number_of_players: campaign.number_of_players,
    created_at: campaign.created_at,
  });
  if (error) throw error;
}

export async function addCampaignXp(id: string, delta: number): Promise<void> {
  const { data, error: fetchError } = await db
    .from('campaigns')
    .select('current_xp')
    .eq('id', id)
    .single();
  if (fetchError) throw fetchError;

  const { error } = await db
    .from('campaigns')
    .update({ current_xp: Number(data.current_xp) + delta })
    .eq('id', id);
  if (error) throw error;
}

export async function deleteCampaign(id: string): Promise<void> {
  // Postgres enforces the sessions.campaign_id FK as `on delete set null`
  // (see supabase/migrations/0001_init.sql), so no manual cleanup needed here
  // — unlike the old Turso/SQLite schema, which didn't enforce FKs.
  const { error } = await db.from('campaigns').delete().eq('id', id);
  if (error) throw error;
}
