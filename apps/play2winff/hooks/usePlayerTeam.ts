// hooks/usePlayerTeam.ts
import { authedFetch } from '../lib/authedFetch';

export async function setTeamForPlayer(
  name: string,
  team: string
): Promise<string> {
  const res = await authedFetch('/api/player-team', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ name, team }),
  });
  const body = await res.json();
  return body.team;
}

export async function clearTeamForPlayer(name: string): Promise<void> {
  await authedFetch('/api/player-team', {
    method: 'DELETE',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ name }),
  });
}
