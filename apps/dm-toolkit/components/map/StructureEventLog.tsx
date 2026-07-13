import { useStore } from '../../store/useStore';
import type { OutcomeTier } from '../../types';

const TIER_COLOR: Record<OutcomeTier, string> = {
  crit_fail: 'text-red-400',
  fail: 'text-stone-500',
  success: 'text-green-400',
  crit_success: 'text-amber-400',
};

export default function StructureEventLog() {
  const { structureEvents, structures, characters } = useStore();

  const structureName = (structureId: string) =>
    structures.find((s) => s.id === structureId)?.name ?? 'Unknown structure';
  const characterName = (characterId?: string | null) =>
    characterId ? characters.find((c) => c.id === characterId)?.name ?? 'Someone' : 'Someone';

  return (
    <div className="bg-stone-800 border border-stone-700 rounded-xl p-5">
      <h3 className="text-xs font-bold uppercase text-stone-500 tracking-wider mb-2">
        Structure Log
      </h3>
      {structureEvents.length === 0 ? (
        <p className="text-xs text-stone-600">No structures investigated yet.</p>
      ) : (
        <div className="space-y-2 max-h-64 overflow-y-auto">
          {[...structureEvents].reverse().map((e) => (
            <div key={e.id} className="text-sm text-stone-300">
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
          ))}
        </div>
      )}
    </div>
  );
}
