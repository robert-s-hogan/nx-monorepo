// hooks/usePlayerInjury.ts
import { authedFetch } from '../lib/authedFetch';

export type PlayerInjury = { injury: string; expectedReturn: string | null };

export async function fetchInjuryForPlayer(
  name: string
): Promise<PlayerInjury | null> {
  const res = await fetch(`/api/player-injury?name=${encodeURIComponent(name)}`);
  return res.json();
}

export async function setInjuryForPlayer(
  name: string,
  injury: string,
  expectedReturn: string | null
): Promise<PlayerInjury> {
  const res = await authedFetch('/api/player-injury', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ name, injury, expectedReturn }),
  });
  return res.json();
}

export async function clearInjuryForPlayer(name: string): Promise<void> {
  await authedFetch('/api/player-injury', {
    method: 'DELETE',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ name }),
  });
}
