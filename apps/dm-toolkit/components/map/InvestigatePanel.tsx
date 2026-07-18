import { useEffect, useState } from 'react';
import { useStore } from '../../store/useStore';
import {
  INVESTIGATE_SKILLS,
  diceSidesIfSingleDie,
  formatModifier,
  skillModifier,
  structureCheckBand,
} from '../../lib/dice';
import { dcForPartyLevel } from '../../lib/rulesets/structureGen';
import { averagePartyLevel } from '../../lib/party';
import DiePicker from './DiePicker';
import type { OutcomeTier, StructureEvent, StructureRollPreview } from '../../types';

function titleCase(s: string): string {
  return s.replace(/\b\w/g, (c) => c.toUpperCase());
}

const SKILL_OPTIONS = INVESTIGATE_SKILLS.map(titleCase);

const TIER_LABEL: Record<OutcomeTier, string> = {
  crit_fail: 'Crit Fail',
  fail: 'Fail',
  success: 'Success',
  crit_success: 'Crit Success',
};

const TIER_COLOR: Record<OutcomeTier, string> = {
  crit_fail: 'text-red-400',
  fail: 'text-stone-500',
  success: 'text-green-400',
  crit_success: 'text-amber-400',
};

interface InvestigatePanelProps {
  mapId: string;
  selectedInvestigatorId: string | null; // a map_token id — click a token in Investigate mode
  selectedStructureId: string | null; // click a structure in Investigate mode
  onClearSelection: () => void;
}

// Mirrors AttackPanel's click-then-roll shape: click a token (investigator)
// then a structure (target) on the map, then roll a d20 exactly like an
// attack roll. If no structure is targeted, falls back to a freeform
// skill+DC check (same as the old dropdown-driven Quick Check) — for
// something that isn't tied to a physical Lego structure at all.
export default function InvestigatePanel({
  mapId,
  selectedInvestigatorId,
  selectedStructureId,
  onClearSelection,
}: InvestigatePanelProps) {
  const { characters, tokens, structures, structureChecks, loadStructureChecks, rollStructureCheck, rollGeneralCheck } =
    useStore();

  const investigatorToken = tokens.find((t) => t.id === selectedInvestigatorId) ?? null;
  const investigatorCharacter = characters.find((c) => c.id === investigatorToken?.character_id) ?? null;
  const targetStructure = structures.find((s) => s.id === selectedStructureId) ?? null;

  const partyLevel = averagePartyLevel(
    tokens
      .filter((t) => t.map_id === mapId && t.character_id)
      .map((t) => characters.find((c) => c.id === t.character_id)?.level)
      .filter((l): l is number => typeof l === 'number')
  );

  useEffect(() => {
    if (targetStructure) loadStructureChecks(targetStructure.id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [targetStructure?.id]);

  const checksForStructure = targetStructure ? structureChecks[targetStructure.id] ?? [] : [];

  const [pickedCheckId, setPickedCheckId] = useState('');
  const activeCheck =
    checksForStructure.length === 1
      ? checksForStructure[0]
      : checksForStructure.find((c) => c.id === pickedCheckId) ?? null;

  const [freeformSkill, setFreeformSkill] = useState('Investigation');
  const [freeformDc, setFreeformDc] = useState(String(dcForPartyLevel(partyLevel)));
  const freeformDcNumber = parseInt(freeformDc, 10) || 10;

  const skill = targetStructure ? activeCheck?.skill ?? null : freeformSkill;

  const [rolling, setRolling] = useState(false);
  const [rollInput, setRollInput] = useState('');
  const [damagePreview, setDamagePreview] = useState<StructureRollPreview | null>(null);
  const [damageRollValue, setDamageRollValue] = useState<number | null>(null);
  const [damageRollText, setDamageRollText] = useState('');
  // What the player actually gets from a resolved structure check —
  // narrative/damage/insight/item — kept on screen after resolving instead
  // of clearing immediately, so the DM can read it off without hunting
  // through the Activity Log.
  const [resolvedEvent, setResolvedEvent] = useState<StructureEvent | null>(null);

  // A stale roll/damage-preview/result from a previous investigator/
  // structure pairing would apply to the wrong target, so any change to
  // either selection clears it.
  useEffect(() => {
    setPickedCheckId('');
    setRollInput('');
    setDamagePreview(null);
    setDamageRollValue(null);
    setDamageRollText('');
    setResolvedEvent(null);
  }, [selectedInvestigatorId, selectedStructureId]);

  const mod = investigatorCharacter && skill ? skillModifier(skill, investigatorCharacter.stats) : 0;
  const roll = parseInt(rollInput, 10);
  const hasValidRoll = Number.isInteger(roll) && roll >= 1 && roll <= 20;
  const total = hasValidRoll ? roll + mod : null;
  // Structure checks resolve off the flat 7-band table (no DC); freeform
  // checks still roll against a DC — see lib/dice.ts's structureCheckBand.
  const tier: OutcomeTier | null = !hasValidRoll
    ? null
    : targetStructure
    ? structureCheckBand(roll, mod).tier
    : roll === 1
    ? 'crit_fail'
    : roll === 20
    ? 'crit_success'
    : (total ?? 0) >= freeformDcNumber
    ? 'success'
    : 'fail';

  const damageDieSides = damagePreview ? diceSidesIfSingleDie(damagePreview.outcome.damage_dice ?? '') : null;
  const validDamage = damageDieSides !== null ? damageRollValue !== null : parseInt(damageRollText, 10) > 0;

  const resetRoll = () => {
    setRollInput('');
    setDamagePreview(null);
    setDamageRollValue(null);
    setDamageRollText('');
  };

  const canRoll = hasValidRoll && !rolling && !damagePreview && !resolvedEvent && (targetStructure ? !!activeCheck : true);

  const handleRoll = async () => {
    if (!canRoll) return;
    setRolling(true);
    try {
      if (targetStructure && activeCheck) {
        const result = await rollStructureCheck(
          mapId,
          targetStructure.id,
          activeCheck.id,
          investigatorCharacter?.id ?? null,
          roll
        );
        if ('preview' in result) {
          setDamagePreview(result);
        } else {
          setRollInput('');
          setResolvedEvent(result);
        }
      } else {
        await rollGeneralCheck(mapId, investigatorCharacter?.id ?? null, freeformSkill, freeformDcNumber, roll);
        resetRoll();
        onClearSelection();
      }
    } finally {
      setRolling(false);
    }
  };

  const handleApplyDamage = async () => {
    if (!targetStructure || !activeCheck || !damagePreview || !hasValidRoll) return;
    const damage = damageDieSides !== null ? damageRollValue : parseInt(damageRollText, 10);
    if (!damage || damage < 1) return;
    setRolling(true);
    try {
      const result = await rollStructureCheck(
        mapId,
        targetStructure.id,
        activeCheck.id,
        investigatorCharacter?.id ?? null,
        roll,
        damagePreview.outcome.id,
        damage
      );
      setDamagePreview(null);
      if (!('preview' in result)) setResolvedEvent(result);
    } finally {
      setRolling(false);
    }
  };

  // Rolls again against the same investigator/structure pairing (left
  // selected on purpose — e.g. re-checking after a fail, or a second
  // structure check) rather than forcing a fresh pair of map clicks.
  const handleRollAgain = () => {
    setResolvedEvent(null);
    resetRoll();
  };

  return (
    <div>
      <div>
        <div className="text-sm text-stone-400 space-y-1 mb-2">
          <p>
            Investigator: <span className="text-teal-400">{investigatorToken?.label ?? 'click a token'}</span>
          </p>
          <p>
            Structure: <span className="text-amber-400">{targetStructure?.name ?? 'click a structure (optional)'}</span>
          </p>
        </div>

        {targetStructure && checksForStructure.length === 0 && (
          <p className="text-xs text-stone-600 italic mb-2">
            No checks authored for this structure yet — add one in the Structures tab below.
          </p>
        )}

        {targetStructure && checksForStructure.length > 1 && !damagePreview && (
          <select
            value={pickedCheckId}
            onChange={(e) => setPickedCheckId(e.target.value)}
            className="w-full mb-2 bg-stone-950 border border-stone-700 rounded-lg px-2 py-1.5 text-sm text-stone-300"
          >
            <option value="">Select check…</option>
            {checksForStructure.map((c) => (
              <option key={c.id} value={c.id}>
                {c.label} ({c.skill})
              </option>
            ))}
          </select>
        )}

        {!targetStructure && (
          <div className="grid grid-cols-2 gap-2 mb-2">
            <select
              value={freeformSkill}
              onChange={(e) => setFreeformSkill(e.target.value)}
              className="bg-stone-950 border border-stone-700 rounded-lg px-2 py-1.5 text-sm text-stone-300"
            >
              {SKILL_OPTIONS.map((s) => (
                <option key={s} value={s}>
                  {s}
                </option>
              ))}
            </select>
            <input
              type="number"
              value={freeformDc}
              onChange={(e) => setFreeformDc(e.target.value)}
              title={`DC (suggested ${dcForPartyLevel(partyLevel)} for party level ${partyLevel})`}
              className="bg-stone-950 border border-stone-700 rounded-lg px-2 py-1.5 text-sm text-stone-300"
            />
          </div>
        )}

        {resolvedEvent ? (
          <div className="bg-stone-900 border border-stone-700 rounded-lg p-2.5 mb-2 space-y-1.5">
            <p className={`text-xs font-semibold ${TIER_COLOR[resolvedEvent.tier]}`}>
              {TIER_LABEL[resolvedEvent.tier]} (roll {resolvedEvent.total})
            </p>
            <p className="text-sm text-stone-300">{resolvedEvent.narrative}</p>
            {(resolvedEvent.damage_dealt || resolvedEvent.insight || resolvedEvent.item) && (
              <p className="text-xs text-stone-500">
                {resolvedEvent.damage_dealt ? `${resolvedEvent.damage_dealt} damage` : null}
                {resolvedEvent.damage_dealt && (resolvedEvent.insight || resolvedEvent.item) ? ' · ' : null}
                {resolvedEvent.insight ?? null}
                {resolvedEvent.insight && resolvedEvent.item ? ' · ' : null}
                {resolvedEvent.item ? `Found: ${resolvedEvent.item.name}` : null}
              </p>
            )}
          </div>
        ) : damagePreview ? (
          <div className="bg-stone-900 border border-amber-800 rounded-lg p-2.5 mb-2 space-y-2">
            <p className="text-xs text-amber-400">
              [{TIER_LABEL[damagePreview.tier]}] {damagePreview.outcome.narrative}
            </p>
            <div className="flex gap-2 items-center">
              {damageDieSides !== null ? (
                <DiePicker sides={damageDieSides} value={damageRollValue} onSelect={setDamageRollValue} />
              ) : (
                <input
                  type="number"
                  value={damageRollText}
                  onChange={(e) => setDamageRollText(e.target.value)}
                  placeholder={damagePreview.outcome.damage_dice ?? 'damage'}
                  className="w-24 bg-stone-950 border border-stone-700 rounded-lg px-2 py-1.5 text-xs text-stone-300"
                />
              )}
              <button
                onClick={handleApplyDamage}
                disabled={!validDamage || rolling}
                className="px-3 py-1.5 bg-amber-800 hover:bg-amber-700 disabled:opacity-40 text-amber-100 text-xs rounded-lg transition-colors"
              >
                {rolling ? 'Applying…' : 'Apply Damage'}
              </button>
            </div>
          </div>
        ) : (
          <div className="flex gap-2 items-start mb-2">
            <DiePicker sides={20} value={hasValidRoll ? roll : null} onSelect={(v) => setRollInput(String(v))} />
            <div className="flex-1 flex items-center text-xs h-9">
              {hasValidRoll ? (
                <span className={tier === 'success' || tier === 'crit_success' ? 'text-green-400' : 'text-stone-500'}>
                  {roll} {formatModifier(mod)} = {total} — {TIER_LABEL[tier as OutcomeTier]}
                </span>
              ) : (
                <span className="text-stone-600">click the d20 for the roll</span>
              )}
            </div>
          </div>
        )}

        <div className="flex gap-2">
          {resolvedEvent ? (
            <button
              onClick={handleRollAgain}
              className="flex-1 px-3 py-2 bg-teal-800 hover:bg-teal-700 text-teal-100 text-sm font-bold rounded-lg transition-colors"
            >
              Roll Again
            </button>
          ) : (
            <button
              onClick={handleRoll}
              disabled={!canRoll}
              className="flex-1 px-3 py-2 bg-teal-800 hover:bg-teal-700 disabled:opacity-40 text-teal-100 text-sm font-bold rounded-lg transition-colors"
            >
              {rolling ? 'Resolving…' : 'Resolve Check'}
            </button>
          )}
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
