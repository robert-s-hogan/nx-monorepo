// hooks/usePlayerFlags.ts
import { authedFetch } from '../lib/authedFetch';
import type { BooleanFlag, PlayerFlags } from '../lib/flags';

export async function fetchFlagsForPlayer(name: string): Promise<PlayerFlags> {
  const res = await fetch(`/api/player-flags?name=${encodeURIComponent(name)}`);
  return res.json();
}

export async function toggleBooleanFlag(
  name: string,
  flag: BooleanFlag
): Promise<PlayerFlags> {
  const res = await authedFetch('/api/player-flags', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ name, flag }),
  });
  return res.json();
}

export async function setRiskFactor(
  name: string,
  value: number | null
): Promise<PlayerFlags> {
  const res = await authedFetch('/api/player-flags', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ name, flag: 'risk_factor', value }),
  });
  return res.json();
}
