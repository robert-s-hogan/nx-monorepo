import { useState } from 'react';
import { useStore } from '../../store/useStore';
import { meleeAttackModifier, formatModifier, practicedBonus } from '../../lib/dice';
import DiePicker from './DiePicker';

const DAMAGE_DICE = [4, 6, 8, 10, 12];

interface AttackPanelProps {
  mapId: string;
  selectedAttackerId: string | null;
  selectedDefenderId: string | null;
  onClearSelection: () => void;
}

export default function AttackPanel({
  mapId,
  selectedAttackerId,
  selectedDefenderId,
  onClearSelection,
}: AttackPanelProps) {
  const { characters, tokens, attack } = useStore();
  const [attacking, setAttacking] = useState(false);
  const [attackRollInput, setAttackRollInput] = useState('');
  const [damageRollInput, setDamageRollInput] = useState('');
  const [damageDieSides, setDamageDieSides] = useState(8);

  const attackerToken = tokens.find((t) => t.id === selectedAttackerId) ?? null;
  const defenderToken = tokens.find((t) => t.id === selectedDefenderId) ?? null;

  // Live preview as the DM types in the attacker's physical dice roll —
  // mirrors the same formula lib/server/combat.ts uses to resolve it, so
  // "will this hit" is visible before submitting.
  const attackerCharacter = characters.find((c) => c.id === attackerToken?.character_id) ?? null;
  const attackMod = meleeAttackModifier(attackerCharacter);
  const attackerPracticedBonus = practicedBonus(attackerCharacter?.hits_landed ?? 0);
  const attackRoll = parseInt(attackRollInput, 10);
  const hasValidAttackRoll = Number.isInteger(attackRoll) && attackRoll >= 1 && attackRoll <= 20;
  const previewTotal = hasValidAttackRoll ? attackRoll + attackMod : null;
  const previewHit =
    previewTotal !== null && defenderToken ? previewTotal >= defenderToken.armor_class : null;
  const damageRollValue = damageRollInput ? parseInt(damageRollInput, 10) : null;

  const handleAttack = async () => {
    if (!selectedAttackerId || !selectedDefenderId || !hasValidAttackRoll) return;
    const damageRoll = previewHit ? parseInt(damageRollInput, 10) || 0 : 0;
    setAttacking(true);
    try {
      await attack(mapId, selectedAttackerId, selectedDefenderId, attackRoll, damageRoll);
      setAttackRollInput('');
      setDamageRollInput('');
      onClearSelection();
    } finally {
      setAttacking(false);
    }
  };

  return (
    <div>
      <div>
        <div className="text-sm text-stone-400 space-y-1 mb-2">
          <p>
            Attacker:{' '}
            <span className="text-amber-400">{attackerToken?.label ?? 'click a token'}</span>
            {attackerToken && (
              <span className="text-stone-600">
                {' '}
                (mod {formatModifier(attackMod)}
                {attackerPracticedBonus > 0 ? `, +${attackerPracticedBonus} practiced` : ''})
              </span>
            )}
          </p>
          <p>
            Defender:{' '}
            <span className="text-red-400">{defenderToken?.label ?? 'click a token'}</span>
            {defenderToken && <span className="text-stone-600"> (AC {defenderToken.armor_class})</span>}
          </p>
        </div>

        <div className="flex gap-2 items-start mb-2">
          <DiePicker
            sides={20}
            value={hasValidAttackRoll ? attackRoll : null}
            onSelect={(v) => setAttackRollInput(String(v))}
          />

          <div>
            <DiePicker
              sides={damageDieSides}
              value={damageRollValue}
              onSelect={(v) => setDamageRollInput(String(v))}
              disabled={previewHit === false}
            />
            <div className="flex gap-1 mt-1">
              {DAMAGE_DICE.map((sides) => (
                <button
                  key={sides}
                  type="button"
                  onClick={() => {
                    setDamageDieSides(sides);
                    setDamageRollInput('');
                  }}
                  className={`px-1.5 py-0.5 rounded text-[10px] font-mono transition-colors ${
                    damageDieSides === sides
                      ? 'bg-stone-700 text-stone-200'
                      : 'text-stone-600 hover:text-stone-400'
                  }`}
                >
                  d{sides}
                </button>
              ))}
            </div>
          </div>

          <div className="flex-1 flex items-center text-xs h-9">
            {hasValidAttackRoll ? (
              <span className={previewHit ? 'text-green-400' : 'text-stone-500'}>
                {attackRoll} {formatModifier(attackMod)} = {previewTotal}
                {defenderToken ? (previewHit ? ' — HIT' : ' — MISS') : ''}
              </span>
            ) : (
              <span className="text-stone-600">click the d20 for the attacker&apos;s roll</span>
            )}
          </div>
        </div>

        <div className="flex gap-2">
          <button
            onClick={handleAttack}
            disabled={!attackerToken || !defenderToken || !hasValidAttackRoll || attacking}
            className="flex-1 px-3 py-2 bg-red-800 hover:bg-red-700 disabled:opacity-40 text-red-100 text-sm font-bold rounded-lg transition-colors"
          >
            {attacking ? 'Resolving…' : 'Resolve Attack'}
          </button>
          <button
            onClick={onClearSelection}
            className="px-3 py-2 bg-stone-900 border border-stone-700 text-stone-400 text-sm rounded-lg transition-colors hover:border-stone-600"
          >
            Clear
          </button>
        </div>
      </div>
    </div>
  );
}
