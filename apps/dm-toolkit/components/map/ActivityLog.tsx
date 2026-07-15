import { useStore } from '../../store/useStore';
import type { CombatEvent, MovementEvent, OutcomeTier, StructureEvent } from '../../types';

const TIER_COLOR: Record<OutcomeTier, string> = {
  crit_fail: 'text-red-400',
  fail: 'text-stone-500',
  success: 'text-green-400',
  crit_success: 'text-amber-400',
};

type FeedItem =
  | { type: 'attack'; id: string; created_at: string; event: CombatEvent }
  | { type: 'structure'; id: string; created_at: string; event: StructureEvent }
  | { type: 'movement'; id: string; created_at: string; event: MovementEvent };

// Everything that happened on the map — attacks, structure checks, and
// moves — merged and time-ordered. Public, always visible in the watch
// rail (see pages/map.tsx). Turn/round state lives in MapStatusBar now;
// this is purely the history feed.
export default function ActivityLog() {
  const { tokens, combatEvents, movementEvents, structureEvents, structures, characters } = useStore();

  const tokenLabel = (tokenId: string) => tokens.find((t) => t.id === tokenId)?.label ?? 'Unknown';
  const structureName = (structureId: string) =>
    structures.find((s) => s.id === structureId)?.name ?? 'Unknown structure';
  const characterName = (characterId?: string | null) =>
    characterId ? characters.find((c) => c.id === characterId)?.name ?? 'Someone' : 'Someone';

  const feed: FeedItem[] = [
    ...combatEvents.map((event) => ({ type: 'attack' as const, id: event.id, created_at: event.created_at, event })),
    ...structureEvents.map((event) => ({
      type: 'structure' as const,
      id: event.id,
      created_at: event.created_at,
      event,
    })),
    ...movementEvents.map((event) => ({
      type: 'movement' as const,
      id: event.id,
      created_at: event.created_at,
      event,
    })),
  ].sort((a, b) => b.created_at.localeCompare(a.created_at));

  return (
    <div className="bg-stone-800 border border-stone-700 rounded-xl p-5">
      <h3 className="text-xs font-bold uppercase text-stone-500 tracking-wider mb-2">Activity Log</h3>
      {feed.length === 0 ? (
        <p className="text-xs text-stone-600">Nothing has happened yet.</p>
      ) : (
        <div className="space-y-2 max-h-96 overflow-y-auto">
          {feed.map((item) => {
            if (item.type === 'attack') {
              const e = item.event;
              return (
                <p key={item.id} className="text-sm text-stone-300">
                  <span className="text-amber-400">{tokenLabel(e.attacker_token_id)}</span> attacks{' '}
                  <span className="text-red-400">{tokenLabel(e.defender_token_id)}</span>:{' '}
                  {e.hit ? (
                    <span className="text-green-400">
                      HIT for {e.damage} damage (roll {e.roll})
                    </span>
                  ) : (
                    <span className="text-stone-500">MISS (roll {e.roll})</span>
                  )}
                </p>
              );
            }

            if (item.type === 'structure') {
              const e = item.event;
              return (
                <div key={item.id} className="text-sm text-stone-300">
                  <p>
                    <span className="text-amber-300">{characterName(e.character_id)}</span> investigates{' '}
                    <span className="text-stone-100">{structureName(e.structure_id)}</span>:{' '}
                    <span className={TIER_COLOR[e.tier]}>
                      {e.tier.replace('_', ' ')} (roll {e.total})
                    </span>
                  </p>
                  <p className="text-xs text-stone-400 mt-0.5">{e.narrative}</p>
                  {(e.damage_dealt || e.insight || e.item) && (
                    <p className="text-xs text-stone-500 mt-0.5">
                      {e.damage_dealt ? `${e.damage_dealt} damage` : null}
                      {e.damage_dealt && (e.insight || e.item) ? ' · ' : null}
                      {e.insight ?? null}
                      {e.insight && e.item ? ' · ' : null}
                      {e.item ? `Found: ${e.item.name}` : null}
                    </p>
                  )}
                </div>
              );
            }

            const e = item.event;
            return (
              <p key={item.id} className="text-sm text-stone-500">
                <span className="text-stone-300">{tokenLabel(e.token_id)}</span> moved
              </p>
            );
          })}
        </div>
      )}
    </div>
  );
}
