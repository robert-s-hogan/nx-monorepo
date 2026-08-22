// hooks/usePlayerRisk.ts
import { authedFetch } from '../lib/authedFetch';

export async function setRiskForPlayer(
  name: string,
  value: number
): Promise<number> {
  const res = await authedFetch('/api/player-risk', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ name, value }),
  });
  const body = await res.json();
  return body.value;
}

export async function clearRiskForPlayer(name: string): Promise<void> {
  await authedFetch('/api/player-risk', {
    method: 'DELETE',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ name }),
  });
}
