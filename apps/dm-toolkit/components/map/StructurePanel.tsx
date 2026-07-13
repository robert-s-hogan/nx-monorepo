import { useEffect, useState } from 'react';
import { useStore } from '../../store/useStore';
import type { OutcomeTier, StructureOutcome } from '../../types';

interface StructurePanelProps {
  mapId: string;
  selectedStructureId: string | null;
  onSelectStructure: (structureId: string | null) => void;
}

const TIERS: OutcomeTier[] = ['crit_fail', 'fail', 'success', 'crit_success'];
const TIER_LABEL: Record<OutcomeTier, string> = {
  crit_fail: 'Crit Fail (nat 1)',
  fail: 'Fail',
  success: 'Success',
  crit_success: 'Crit Success (nat 20)',
};

type DraftOutcome = Omit<StructureOutcome, 'id' | 'check_id'>;

const emptyOutcome = (tier: OutcomeTier): DraftOutcome => ({
  tier,
  narrative: '',
  damage_dice: null,
  insight: null,
  item: null,
  spawns_boss_character_id: null,
});

export default function StructurePanel({
  mapId,
  selectedStructureId,
  onSelectStructure,
}: StructurePanelProps) {
  const {
    structures,
    structureChecks,
    characters,
    addStructure,
    removeStructure,
    loadStructureChecks,
    addStructureCheck,
    rollStructureCheck,
  } = useStore();

  const [newName, setNewName] = useState('');
  const [newType, setNewType] = useState('building');

  const [addingCheck, setAddingCheck] = useState(false);
  const [skill, setSkill] = useState('Investigation');
  const [dc, setDc] = useState('12');
  const [label, setLabel] = useState('');
  const [outcomes, setOutcomes] = useState<DraftOutcome[]>([emptyOutcome('success'), emptyOutcome('fail')]);

  const [rollingCheckId, setRollingCheckId] = useState<string | null>(null);
  const [rollerCharacterId, setRollerCharacterId] = useState('');

  const selectedStructure = structures.find((s) => s.id === selectedStructureId) ?? null;
  const checksForSelected = selectedStructureId ? structureChecks[selectedStructureId] ?? [] : [];

  useEffect(() => {
    if (selectedStructureId) loadStructureChecks(selectedStructureId);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedStructureId]);

  const handleAddStructure = () => {
    const name = newName.trim();
    if (!name) return;
    addStructure(mapId, {
      name,
      structure_type: newType.trim() || 'building',
      x: 150 + Math.random() * 300,
      y: 150 + Math.random() * 300,
      width: 60,
      height: 60,
      revealed: true,
    });
    setNewName('');
  };

  const setOutcomeField = <K extends keyof DraftOutcome>(index: number, key: K, value: DraftOutcome[K]) => {
    setOutcomes((prev) => prev.map((o, i) => (i === index ? { ...o, [key]: value } : o)));
  };

  const addOutcomeRow = () => {
    const usedTiers = outcomes.map((o) => o.tier);
    const nextTier = TIERS.find((t) => !usedTiers.includes(t)) ?? 'success';
    setOutcomes((prev) => [...prev, emptyOutcome(nextTier)]);
  };

  const removeOutcomeRow = (index: number) => {
    setOutcomes((prev) => prev.filter((_, i) => i !== index));
  };

  const resetCheckForm = () => {
    setSkill('Investigation');
    setDc('12');
    setLabel('');
    setOutcomes([emptyOutcome('success'), emptyOutcome('fail')]);
    setAddingCheck(false);
  };

  const handleSaveCheck = async () => {
    if (!selectedStructureId || !label.trim()) return;
    const cleanOutcomes = outcomes
      .filter((o) => o.narrative.trim())
      .map((o) => ({
        ...o,
        narrative: o.narrative.trim(),
        damage_dice: o.damage_dice?.trim() || null,
        insight: o.insight?.trim() || null,
      }));
    await addStructureCheck(
      selectedStructureId,
      { skill: skill.trim(), dc: parseInt(dc, 10) || 10, label: label.trim() },
      cleanOutcomes
    );
    resetCheckForm();
  };

  const handleRoll = async (checkId: string) => {
    if (!selectedStructureId) return;
    const event = await rollStructureCheck(mapId, selectedStructureId, checkId, rollerCharacterId || null);
    setRollingCheckId(null);
    // eslint-disable-next-line no-console
    console.info(`[${event.tier}] ${event.narrative}`);
  };

  return (
    <div className="bg-stone-800 border border-stone-700 rounded-xl p-5 space-y-4">
      <div>
        <h3 className="text-xs font-bold uppercase text-stone-500 tracking-wider mb-2">
          Add Structure
        </h3>
        <div className="flex gap-2">
          <input
            value={newName}
            onChange={(e) => setNewName(e.target.value)}
            placeholder="Structure name…"
            className="flex-1 bg-stone-950 border border-stone-700 rounded-lg px-2 py-1.5 text-sm text-stone-300 placeholder:text-stone-600"
          />
          <input
            value={newType}
            onChange={(e) => setNewType(e.target.value)}
            placeholder="type"
            className="w-24 bg-stone-950 border border-stone-700 rounded-lg px-2 py-1.5 text-sm text-stone-300 placeholder:text-stone-600"
          />
          <button
            onClick={handleAddStructure}
            disabled={!newName.trim()}
            className="px-3 py-1.5 bg-green-800 hover:bg-green-700 disabled:opacity-40 text-green-100 text-xs rounded-lg transition-colors"
          >
            Add
          </button>
        </div>
      </div>

      {structures.length > 0 && (
        <div>
          <h3 className="text-xs font-bold uppercase text-stone-500 tracking-wider mb-2">Structures</h3>
          <div className="space-y-1">
            {structures.map((s) => (
              <div
                key={s.id}
                onClick={() => onSelectStructure(s.id === selectedStructureId ? null : s.id)}
                className={`flex items-center justify-between px-2 py-1.5 rounded-lg text-sm cursor-pointer border ${
                  s.id === selectedStructureId
                    ? 'bg-amber-950 border-amber-700 text-amber-200'
                    : 'bg-stone-900 border-stone-700 text-stone-300 hover:border-stone-600'
                }`}
              >
                <span>
                  {s.name} <span className="text-stone-600 text-xs">({s.structure_type})</span>
                </span>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    removeStructure(mapId, s.id);
                    if (s.id === selectedStructureId) onSelectStructure(null);
                  }}
                  className="text-stone-600 hover:text-red-400 transition-colors"
                  title="Remove structure"
                >
                  ✕
                </button>
              </div>
            ))}
          </div>
        </div>
      )}

      {selectedStructure && (
        <div className="border-t border-stone-700 pt-4">
          <h3 className="text-xs font-bold uppercase text-amber-500 tracking-wider mb-2">
            {selectedStructure.name} — Checks
          </h3>

          <div className="space-y-2 mb-3">
            {checksForSelected.map((check) => (
              <div key={check.id} className="bg-stone-900 border border-stone-700 rounded-lg p-2.5">
                <div className="flex items-center justify-between mb-1.5">
                  <span className="text-sm text-stone-200 font-semibold">{check.label}</span>
                  <span className="text-xs text-stone-500">
                    {check.skill} DC {check.dc}
                  </span>
                </div>
                <div className="flex flex-wrap gap-1 mb-2">
                  {check.outcomes.map((o) => (
                    <span
                      key={o.id}
                      className="text-[10px] px-1.5 py-0.5 rounded bg-stone-800 border border-stone-700 text-stone-500"
                    >
                      {TIER_LABEL[o.tier]}
                    </span>
                  ))}
                </div>
                {rollingCheckId === check.id ? (
                  <div className="flex gap-2">
                    <select
                      value={rollerCharacterId}
                      onChange={(e) => setRollerCharacterId(e.target.value)}
                      className="flex-1 bg-stone-950 border border-stone-700 rounded px-2 py-1 text-xs text-stone-300"
                    >
                      <option value="">No character (flat roll)</option>
                      {characters.map((c) => (
                        <option key={c.id} value={c.id}>
                          {c.name}
                        </option>
                      ))}
                    </select>
                    <button
                      onClick={() => handleRoll(check.id)}
                      className="px-2 py-1 bg-amber-800 hover:bg-amber-700 text-amber-100 text-xs rounded transition-colors"
                    >
                      Roll
                    </button>
                    <button
                      onClick={() => setRollingCheckId(null)}
                      className="px-2 py-1 bg-stone-700 text-stone-400 text-xs rounded transition-colors"
                    >
                      Cancel
                    </button>
                  </div>
                ) : (
                  <button
                    onClick={() => setRollingCheckId(check.id)}
                    className="w-full text-xs py-1 bg-stone-800 hover:bg-stone-700 border border-stone-600 text-stone-400 rounded transition-colors"
                  >
                    Roll this check
                  </button>
                )}
              </div>
            ))}
            {checksForSelected.length === 0 && (
              <p className="text-xs text-stone-600 italic">No checks authored yet.</p>
            )}
          </div>

          {addingCheck ? (
            <div className="bg-stone-900 border border-amber-800 rounded-lg p-3 space-y-2">
              <div className="grid grid-cols-3 gap-2">
                <input
                  value={skill}
                  onChange={(e) => setSkill(e.target.value)}
                  placeholder="Skill"
                  className="bg-stone-950 border border-stone-700 rounded px-2 py-1 text-xs text-stone-300"
                />
                <input
                  type="number"
                  value={dc}
                  onChange={(e) => setDc(e.target.value)}
                  placeholder="DC"
                  className="bg-stone-950 border border-stone-700 rounded px-2 py-1 text-xs text-stone-300"
                />
                <input
                  value={label}
                  onChange={(e) => setLabel(e.target.value)}
                  placeholder="Label"
                  className="bg-stone-950 border border-stone-700 rounded px-2 py-1 text-xs text-stone-300"
                />
              </div>

              <div className="space-y-2">
                {outcomes.map((o, i) => (
                  <div key={i} className="bg-stone-800 border border-stone-700 rounded p-2 space-y-1.5">
                    <div className="flex gap-2 items-center">
                      <select
                        value={o.tier}
                        onChange={(e) => setOutcomeField(i, 'tier', e.target.value as OutcomeTier)}
                        className="bg-stone-950 border border-stone-700 rounded px-1.5 py-1 text-[11px] text-stone-300"
                      >
                        {TIERS.map((t) => (
                          <option key={t} value={t}>
                            {TIER_LABEL[t]}
                          </option>
                        ))}
                      </select>
                      <button
                        onClick={() => removeOutcomeRow(i)}
                        className="ml-auto text-stone-600 hover:text-red-400 text-xs"
                      >
                        ✕
                      </button>
                    </div>
                    <textarea
                      value={o.narrative}
                      onChange={(e) => setOutcomeField(i, 'narrative', e.target.value)}
                      placeholder="Narrative outcome text…"
                      rows={2}
                      className="w-full bg-stone-950 border border-stone-700 rounded px-2 py-1 text-xs text-stone-300 resize-none"
                    />
                    <div className="grid grid-cols-2 gap-1.5">
                      <input
                        value={o.damage_dice ?? ''}
                        onChange={(e) => setOutcomeField(i, 'damage_dice', e.target.value || null)}
                        placeholder="Damage (e.g. 2d6)"
                        className="bg-stone-950 border border-stone-700 rounded px-2 py-1 text-xs text-stone-300 placeholder:text-stone-600"
                      />
                      <select
                        value={o.spawns_boss_character_id ?? ''}
                        onChange={(e) => setOutcomeField(i, 'spawns_boss_character_id', e.target.value || null)}
                        className="bg-stone-950 border border-stone-700 rounded px-2 py-1 text-xs text-stone-300"
                      >
                        <option value="">No boss spawn</option>
                        {characters.filter((c) => c.boss).map((c) => (
                          <option key={c.id} value={c.id}>
                            Spawn: {c.name}
                          </option>
                        ))}
                      </select>
                    </div>
                    <input
                      value={o.insight ?? ''}
                      onChange={(e) => setOutcomeField(i, 'insight', e.target.value || null)}
                      placeholder="Insight / lore revealed (optional)"
                      className="w-full bg-stone-950 border border-stone-700 rounded px-2 py-1 text-xs text-stone-300 placeholder:text-stone-600"
                    />
                  </div>
                ))}
                <button
                  onClick={addOutcomeRow}
                  className="w-full text-xs py-1 border border-dashed border-stone-600 hover:border-amber-700 text-stone-600 hover:text-amber-500 rounded transition-colors"
                >
                  + Add outcome tier
                </button>
              </div>

              <div className="flex gap-2 pt-1">
                <button
                  onClick={handleSaveCheck}
                  disabled={!label.trim()}
                  className="text-xs px-3 py-1 bg-green-900 hover:bg-green-800 border border-green-700 text-green-200 rounded-lg transition-colors disabled:opacity-40"
                >
                  Save Check
                </button>
                <button
                  onClick={resetCheckForm}
                  className="text-xs px-3 py-1 bg-stone-700 hover:bg-stone-600 border border-stone-600 text-stone-400 rounded-lg transition-colors"
                >
                  Cancel
                </button>
              </div>
            </div>
          ) : (
            <button
              onClick={() => setAddingCheck(true)}
              className="w-full text-xs py-2 border border-dashed border-stone-600 hover:border-amber-700 text-stone-600 hover:text-amber-500 rounded-lg transition-colors"
            >
              + Add check
            </button>
          )}
        </div>
      )}
    </div>
  );
}
