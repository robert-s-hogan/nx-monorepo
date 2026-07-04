// Server-only DB access for conquest-mode rest state (one row per campaign).
// Called from pages/api/campaigns/[id]/rest.ts.
import { db } from './db';
import type { RestState } from '../../types';

function rowToRestState(row: Record<string, unknown>): RestState {
  return {
    campaign_id: row.campaign_id as string,
    short_rests_taken: row.short_rests_taken as boolean[],
    long_rest_needed: row.long_rest_needed as boolean,
  };
}

const DEFAULT_REST_STATE = (campaignId: string): RestState => ({
  campaign_id: campaignId,
  short_rests_taken: [false, false],
  long_rest_needed: false,
});

export async function fetchRestState(campaignId: string): Promise<RestState> {
  const { data, error } = await db
    .from('rest_states')
    .select('*')
    .eq('campaign_id', campaignId)
    .maybeSingle();
  if (error) throw error;
  return data ? rowToRestState(data) : DEFAULT_REST_STATE(campaignId);
}

export async function upsertRestState(state: RestState): Promise<void> {
  const { error } = await db.from('rest_states').upsert({
    campaign_id: state.campaign_id,
    short_rests_taken: state.short_rests_taken,
    long_rest_needed: state.long_rest_needed,
  });
  if (error) throw error;
}
