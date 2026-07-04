import { useStore } from '../../store/useStore';

export default function CombatLog() {
  const { combatEvents, tokens } = useStore();

  const labelFor = (tokenId: string) => tokens.find((t) => t.id === tokenId)?.label ?? 'Unknown';

  return (
    <div className="bg-stone-800 border border-stone-700 rounded-xl p-5">
      <h3 className="text-xs font-bold uppercase text-stone-500 tracking-wider mb-2">
        Combat Log
      </h3>
      {combatEvents.length === 0 ? (
        <p className="text-xs text-stone-600">No attacks yet.</p>
      ) : (
        <div className="space-y-1 max-h-48 overflow-y-auto">
          {[...combatEvents].reverse().map((e) => (
            <p key={e.id} className="text-sm text-stone-300">
              <span className="text-amber-400">{labelFor(e.attacker_token_id)}</span> attacks{' '}
              <span className="text-red-400">{labelFor(e.defender_token_id)}</span>:{' '}
              {e.hit ? (
                <span className="text-green-400">
                  HIT for {e.damage} damage (roll {e.roll})
                </span>
              ) : (
                <span className="text-stone-500">MISS (roll {e.roll})</span>
              )}
            </p>
          ))}
        </div>
      )}
    </div>
  );
}
