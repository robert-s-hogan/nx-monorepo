import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import type { Character, Ability, AbilityCategory, StatusEffect, CharacterStats, BossConfig } from '../types';
import { useStore } from '../store/useStore';
import { statModifier } from '../lib/dice';

interface Props {
  character: Character;
  onClose: () => void;
}

const STATS = ['str', 'dex', 'con', 'int', 'wis', 'cha'] as const;
type StatKey = (typeof STATS)[number];
const MOD_KEYS = ['ac', 'temp_hp', ...STATS] as const;
type ModKey = (typeof MOD_KEYS)[number];

const emptyAbility = (): Ability => ({ name: '', description: '', stamina_cost: 0 });
const emptyCategory = (): Pick<AbilityCategory, 'name' | 'flavor'> => ({ name: '', flavor: '' });
const emptyStatus = (): Omit<StatusEffect, 'id'> => ({ name: '', type: 'negative', modifiers: {} });
const defaultBossConfig = (level: number): BossConfig => ({
  base_party_level: level,
  scaling: { hp_per_level: 10, ac_per_levels: 2 },
});

interface Draft {
  name: string;
  class: string;
  level: number;
  background: string;
  notes: string;
  stats: CharacterStats;
  armor_class: number;
  hit_points: { max: number; current: number };
  stamina: { max: number; current: number };
  ability_categories: AbilityCategory[];
  status_effects: StatusEffect[];
  boss: BossConfig | null;
}

const STATUS_BADGE: Record<StatusEffect['type'], string> = {
  positive: 'bg-green-950 border-green-700 text-green-300',
  negative: 'bg-red-950 border-red-700 text-red-300',
  neutral: 'bg-stone-800 border-stone-600 text-stone-300',
};

export default function CharacterEditModal({ character, onClose }: Props) {
  const { updateCharacter } = useStore();

  const [draft, setDraft] = useState<Draft>({
    name: character.name,
    class: character.class,
    level: character.level,
    background: character.background,
    notes: character.notes ?? '',
    stats: { ...character.stats },
    armor_class: character.armor_class,
    hit_points: { ...character.hit_points },
    stamina: { ...character.stamina },
    ability_categories: character.ability_categories.map((cat) => ({
      ...cat,
      abilities: [...cat.abilities],
    })),
    status_effects: [...(character.status_effects ?? [])],
    boss: character.boss ?? null,
  });

  // Ability editing
  const [addingAbilityFor, setAddingAbilityFor] = useState<number | null>(null);
  const [newAbility, setNewAbility] = useState(emptyAbility());
  const [addingCategory, setAddingCategory] = useState(false);
  const [newCategory, setNewCategory] = useState(emptyCategory());

  // Status editing
  const [addingStatus, setAddingStatus] = useState(false);
  const [newStatus, setNewStatus] = useState<Omit<StatusEffect, 'id'>>(emptyStatus());

  // ── Helpers ────────────────────────────────────────────────────────────────

  const setField = <K extends keyof Draft>(key: K, value: Draft[K]) =>
    setDraft((d) => ({ ...d, [key]: value }));

  const setStat = (stat: StatKey, raw: string) => {
    const n = parseInt(raw, 10);
    if (isNaN(n)) return;
    setDraft((d) => ({ ...d, stats: { ...d.stats, [stat]: Math.max(1, Math.min(30, n)) } }));
  };

  // ── Ability CRUD ───────────────────────────────────────────────────────────

  const removeAbility = (ci: number, name: string) =>
    setDraft((d) => ({
      ...d,
      ability_categories: d.ability_categories.map((cat, i) =>
        i === ci ? { ...cat, abilities: cat.abilities.filter((a) => a.name !== name) } : cat
      ),
    }));

  const submitAbility = (ci: number) => {
    if (!newAbility.name.trim()) return;
    setDraft((d) => ({
      ...d,
      ability_categories: d.ability_categories.map((cat, i) =>
        i === ci
          ? { ...cat, abilities: [...cat.abilities, { ...newAbility, name: newAbility.name.trim(), description: newAbility.description.trim() }] }
          : cat
      ),
    }));
    setNewAbility(emptyAbility());
    setAddingAbilityFor(null);
  };

  const removeCategory = (ci: number) =>
    setDraft((d) => ({
      ...d,
      ability_categories: d.ability_categories.filter((_, i) => i !== ci),
    }));

  const submitCategory = () => {
    if (!newCategory.name.trim()) return;
    const cat: AbilityCategory = {
      name: newCategory.name.trim(),
      flavor: newCategory.flavor.trim(),
      xp: { current: 0, max: 5 },
      abilities: [],
    };
    setDraft((d) => ({ ...d, ability_categories: [...d.ability_categories, cat] }));
    setNewCategory(emptyCategory());
    setAddingCategory(false);
  };

  // ── Status CRUD ────────────────────────────────────────────────────────────

  const removeStatus = (id: string) =>
    setDraft((d) => ({ ...d, status_effects: d.status_effects.filter((s) => s.id !== id) }));

  const setStatusMod = (key: ModKey, raw: string) => {
    const n = raw === '' ? undefined : parseInt(raw, 10);
    setNewStatus((s) => ({
      ...s,
      modifiers: { ...s.modifiers, [key]: isNaN(n as number) ? undefined : n },
    }));
  };

  const submitStatus = () => {
    if (!newStatus.name.trim()) return;
    const cleanMods = Object.fromEntries(
      Object.entries(newStatus.modifiers ?? {}).filter(([, v]) => v !== undefined && v !== 0)
    ) as StatusEffect['modifiers'];
    const status: StatusEffect = {
      id: uuidv4(),
      name: newStatus.name.trim(),
      type: newStatus.type,
      modifiers: Object.keys(cleanMods ?? {}).length > 0 ? cleanMods : undefined,
    };
    setDraft((d) => ({ ...d, status_effects: [...d.status_effects, status] }));
    setNewStatus(emptyStatus());
    setAddingStatus(false);
  };

  // ── Save ───────────────────────────────────────────────────────────────────

  const handleSave = () => {
    const hp = { max: draft.hit_points.max, current: Math.min(draft.hit_points.current, draft.hit_points.max) };
    const stamina = { max: draft.stamina.max, current: Math.min(draft.stamina.current, draft.stamina.max) };
    updateCharacter(character.id, {
      ...draft,
      notes: draft.notes.trim() || undefined,
      hit_points: hp,
      stamina,
      status_effects: draft.status_effects.length > 0 ? draft.status_effects : undefined,
      boss: draft.boss,
    });
    onClose();
  };

  // ── Styles ─────────────────────────────────────────────────────────────────

  const inputCls = 'bg-stone-800 border border-stone-600 rounded px-2 py-1.5 text-sm text-stone-200 placeholder:text-stone-600 focus:outline-none focus:border-amber-600 w-full';
  const numCls = 'bg-stone-800 border border-stone-600 rounded px-2 py-1.5 text-sm text-stone-200 text-center focus:outline-none focus:border-amber-600 w-full';
  const sectionHeading = 'text-[11px] font-bold uppercase tracking-wider text-stone-500 mb-3';

  return (
    <div
      className="fixed inset-0 z-50 bg-black/70 flex items-start justify-center overflow-y-auto py-8 px-4"
      onMouseDown={(e) => { if (e.target === e.currentTarget) onClose(); }}
    >
      <div className="w-full max-w-2xl bg-stone-900 rounded-xl shadow-2xl border border-stone-700 overflow-hidden">

        {/* Header */}
        <div className="flex justify-between items-center px-6 py-4 border-b border-stone-700" style={{ backgroundColor: '#3a4b20' }}>
          <h2 className="text-lg font-bold text-stone-100 uppercase tracking-widest">
            Edit — {character.name}
          </h2>
          <button onClick={onClose} className="text-stone-400 hover:text-white text-xl leading-none">✕</button>
        </div>

        {/* Scrollable body */}
        <div className="p-6 space-y-8 overflow-y-auto" style={{ maxHeight: 'calc(90vh - 130px)' }}>

          {/* ══ CORE DETAILS ══════════════════════════════════════════════════ */}
          <section>
            <p className={sectionHeading}>Core Details</p>
            <div className="grid grid-cols-3 gap-3 mb-3">
              <div className="col-span-2">
                <label className="block text-[10px] text-stone-500 mb-1">Name</label>
                <input value={draft.name} onChange={(e) => setField('name', e.target.value)} className={inputCls} />
              </div>
              <div>
                <label className="block text-[10px] text-stone-500 mb-1">Level</label>
                <input
                  type="number" min={1} max={20}
                  value={draft.level}
                  onChange={(e) => setField('level', Math.max(1, Math.min(20, Number(e.target.value))))}
                  className={numCls}
                />
              </div>
            </div>
            <div className="mb-3">
              <label className="block text-[10px] text-stone-500 mb-1">Class</label>
              <input value={draft.class} onChange={(e) => setField('class', e.target.value)} className={inputCls} />
            </div>
            <div className="mb-3">
              <label className="block text-[10px] text-stone-500 mb-1">Background</label>
              <textarea
                rows={3}
                value={draft.background}
                onChange={(e) => setField('background', e.target.value)}
                className={`${inputCls} resize-none`}
              />
            </div>
            <div>
              <label className="block text-[10px] text-stone-500 mb-1">Notes</label>
              <textarea
                rows={3}
                placeholder="Session notes, reminders, quest hooks..."
                value={draft.notes}
                onChange={(e) => setField('notes', e.target.value)}
                className={`${inputCls} resize-none`}
              />
            </div>
          </section>

          {/* ══ STATS & NUMBERS ═══════════════════════════════════════════════ */}
          <section>
            <p className={sectionHeading}>Stats &amp; Numbers</p>

            {/* 6 core stats */}
            <div className="grid grid-cols-6 gap-2 mb-5">
              {STATS.map((stat) => (
                <div key={stat} className="text-center">
                  <label className="block text-[10px] text-stone-500 mb-1 uppercase">{stat}</label>
                  <input
                    type="number" min={1} max={30}
                    value={draft.stats[stat]}
                    onChange={(e) => setStat(stat, e.target.value)}
                    className={numCls}
                  />
                  <div className="text-[10px] text-stone-500 mt-1">{statModifier(draft.stats[stat])}</div>
                </div>
              ))}
            </div>

            {/* AC / HP max / Stamina max */}
            <div className="grid grid-cols-3 gap-4">
              <div>
                <label className="block text-[10px] text-stone-500 mb-1">Armor Class</label>
                <input
                  type="number" min={0} max={30}
                  value={draft.armor_class}
                  onChange={(e) => setField('armor_class', Math.max(0, Number(e.target.value)))}
                  className={numCls}
                />
              </div>
              <div>
                <label className="block text-[10px] text-stone-500 mb-1">HP Max</label>
                <input
                  type="number" min={1} max={999}
                  value={draft.hit_points.max}
                  onChange={(e) => setDraft((d) => ({ ...d, hit_points: { ...d.hit_points, max: Math.max(1, Number(e.target.value)) } }))}
                  className={numCls}
                />
              </div>
              <div>
                <label className="block text-[10px] text-stone-500 mb-1">Stamina Max</label>
                <input
                  type="number" min={0} max={20}
                  value={draft.stamina.max}
                  onChange={(e) => setDraft((d) => ({ ...d, stamina: { ...d.stamina, max: Math.max(0, Number(e.target.value)) } }))}
                  className={numCls}
                />
              </div>
            </div>
          </section>

          {/* ══ BOSS ══════════════════════════════════════════════════════════ */}
          <section>
            <div className="flex justify-between items-center mb-3">
              <p className={sectionHeading.replace('mb-3', '')}>Boss</p>
              <label className="flex items-center gap-2 text-xs text-stone-400 cursor-pointer">
                <input
                  type="checkbox"
                  checked={!!draft.boss}
                  onChange={(e) =>
                    setField('boss', e.target.checked ? defaultBossConfig(draft.level) : null)
                  }
                  className="accent-amber-600"
                />
                Boss-eligible (spawnable onto a map, scales to party level)
              </label>
            </div>

            {draft.boss && (
              <div className="bg-stone-800 border border-stone-600 rounded-lg p-3 grid grid-cols-3 gap-3">
                <div>
                  <label className="block text-[10px] text-stone-500 mb-1">Base Party Lvl</label>
                  <input
                    type="number" min={1} max={20}
                    value={draft.boss.base_party_level}
                    onChange={(e) =>
                      setField('boss', {
                        ...draft.boss!,
                        base_party_level: Math.max(1, Math.min(20, Number(e.target.value))),
                      })
                    }
                    className={numCls}
                  />
                </div>
                <div>
                  <label className="block text-[10px] text-stone-500 mb-1">HP / Level</label>
                  <input
                    type="number" min={0} max={100}
                    value={draft.boss.scaling.hp_per_level}
                    onChange={(e) =>
                      setField('boss', {
                        ...draft.boss!,
                        scaling: { ...draft.boss!.scaling, hp_per_level: Math.max(0, Number(e.target.value)) },
                      })
                    }
                    className={numCls}
                  />
                </div>
                <div>
                  <label className="block text-[10px] text-stone-500 mb-1">+1 AC / N Lvls</label>
                  <input
                    type="number" min={1} max={20}
                    value={draft.boss.scaling.ac_per_levels}
                    onChange={(e) =>
                      setField('boss', {
                        ...draft.boss!,
                        scaling: { ...draft.boss!.scaling, ac_per_levels: Math.max(1, Number(e.target.value)) },
                      })
                    }
                    className={numCls}
                  />
                </div>
              </div>
            )}
          </section>

          {/* ══ STATUS EFFECTS ════════════════════════════════════════════════ */}
          <section>
            <div className="flex justify-between items-center mb-3">
              <p className={sectionHeading.replace('mb-3', '')}>Status Effects</p>
              {!addingStatus && (
                <button
                  onClick={() => setAddingStatus(true)}
                  className="text-xs px-3 py-1 bg-stone-800 hover:bg-stone-700 border border-stone-600 text-stone-400 hover:text-amber-400 rounded-lg transition-colors"
                >
                  + Add
                </button>
              )}
            </div>

            {draft.status_effects.length > 0 && (
              <div className="flex flex-wrap gap-2 mb-3">
                {draft.status_effects.map((s) => {
                  const mods = Object.entries(s.modifiers ?? {})
                    .filter(([, v]) => v !== 0)
                    .map(([k, v]) => `${k === 'temp_hp' ? 'Temp HP' : k.toUpperCase()} ${(v as number) > 0 ? '+' : ''}${v}`)
                    .join(', ');
                  return (
                    <div key={s.id} className={`flex items-center gap-1.5 px-2.5 py-1 rounded-lg border text-xs ${STATUS_BADGE[s.type]}`}>
                      <span className="font-semibold">{s.name}</span>
                      {mods && <span className="opacity-70 text-[10px]">{mods}</span>}
                      <button onClick={() => removeStatus(s.id)} className="ml-1 opacity-50 hover:opacity-100 leading-none">✕</button>
                    </div>
                  );
                })}
              </div>
            )}

            {!addingStatus && draft.status_effects.length === 0 && (
              <p className="text-xs text-stone-600 italic">No active status effects.</p>
            )}

            {addingStatus && (
              <div className="bg-stone-800 border border-stone-600 rounded-lg p-4 space-y-3">
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-[10px] text-stone-500 mb-1">Name</label>
                    <input
                      autoFocus
                      placeholder="e.g. Poisoned, Hasted, Blind..."
                      value={newStatus.name}
                      onChange={(e) => setNewStatus((s) => ({ ...s, name: e.target.value }))}
                      className={inputCls}
                    />
                  </div>
                  <div>
                    <label className="block text-[10px] text-stone-500 mb-1">Type</label>
                    <select
                      value={newStatus.type}
                      onChange={(e) => setNewStatus((s) => ({ ...s, type: e.target.value as StatusEffect['type'] }))}
                      className={inputCls}
                    >
                      <option value="negative">Negative</option>
                      <option value="positive">Positive</option>
                      <option value="neutral">Neutral</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-[10px] text-stone-500 mb-2">Modifiers (leave blank if none)</label>
                  <div className="grid grid-cols-4 gap-2">
                    {MOD_KEYS.map((key) => (
                      <div key={key} className="text-center">
                        <label className="block text-[9px] text-stone-500 mb-1 uppercase">
                          {key === 'temp_hp' ? 'Temp HP' : key === 'ac' ? 'AC' : key}
                        </label>
                        <input
                          type="number"
                          min={key === 'temp_hp' ? 0 : -20}
                          max={20}
                          value={newStatus.modifiers?.[key as keyof typeof newStatus.modifiers] ?? ''}
                          onChange={(e) => setStatusMod(key, e.target.value)}
                          placeholder="—"
                          className="bg-stone-700 border border-stone-600 rounded px-1 py-1 text-xs text-stone-200 text-center focus:outline-none focus:border-amber-600 w-full placeholder:text-stone-600"
                        />
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex gap-2 pt-1">
                  <button
                    onClick={submitStatus}
                    disabled={!newStatus.name.trim()}
                    className="text-xs px-3 py-1 bg-green-900 hover:bg-green-800 border border-green-700 text-green-200 rounded-lg transition-colors disabled:opacity-40"
                  >
                    Add Status
                  </button>
                  <button
                    onClick={() => { setAddingStatus(false); setNewStatus(emptyStatus()); }}
                    className="text-xs px-3 py-1 bg-stone-700 hover:bg-stone-600 border border-stone-600 text-stone-400 rounded-lg transition-colors"
                  >
                    Cancel
                  </button>
                </div>
              </div>
            )}
          </section>

          {/* ══ ABILITY CATEGORIES ════════════════════════════════════════════ */}
          <section>
            <p className={sectionHeading}>Ability Categories</p>
            <div className="space-y-3">
              {draft.ability_categories.map((cat, ci) => (
                <div key={ci} className="bg-stone-800 border border-stone-700 rounded-lg p-3">
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <p className="font-semibold text-green-400 text-sm">{cat.name}</p>
                      <p className="text-[11px] text-stone-500 italic">{`"${cat.flavor}"`}</p>
                    </div>
                    <button
                      onClick={() => removeCategory(ci)}
                      className="text-xs px-2 py-0.5 bg-red-950 hover:bg-red-900 border border-red-800 text-red-400 rounded transition-colors"
                    >
                      Remove
                    </button>
                  </div>

                  <div className="space-y-1.5 mb-3">
                    {cat.abilities.map((ability) => (
                      <div key={ability.name} className="flex items-start gap-2 text-xs group">
                        <div className="flex-1">
                          <span className="font-semibold text-stone-200">{ability.name}: </span>
                          <span className="text-stone-400">{ability.description}</span>
                          {ability.stamina_cost > 0 && (
                            <span className="ml-1 text-amber-400 font-bold">[{ability.stamina_cost} ST]</span>
                          )}
                        </div>
                        <button
                          onClick={() => removeAbility(ci, ability.name)}
                          className="text-stone-600 hover:text-red-400 leading-none mt-0.5 shrink-0 transition-colors"
                        >
                          ✕
                        </button>
                      </div>
                    ))}
                  </div>

                  {addingAbilityFor === ci ? (
                    <div className="space-y-1.5 border-t border-stone-700 pt-3">
                      <input
                        autoFocus
                        placeholder="Ability name"
                        value={newAbility.name}
                        onChange={(e) => setNewAbility((p) => ({ ...p, name: e.target.value }))}
                        className={inputCls}
                      />
                      <input
                        placeholder="Description"
                        value={newAbility.description}
                        onChange={(e) => setNewAbility((p) => ({ ...p, description: e.target.value }))}
                        className={inputCls}
                      />
                      <div className="flex items-center gap-2">
                        <label className="text-[11px] text-stone-500 whitespace-nowrap">ST cost</label>
                        <input
                          type="number" min={0} max={9}
                          value={newAbility.stamina_cost}
                          onChange={(e) => setNewAbility((p) => ({ ...p, stamina_cost: Number(e.target.value) }))}
                          className="bg-stone-800 border border-stone-600 rounded px-2 py-1.5 text-sm text-stone-200 text-center focus:outline-none focus:border-amber-600 w-16"
                        />
                      </div>
                      <div className="flex gap-2">
                        <button
                          onClick={() => submitAbility(ci)}
                          disabled={!newAbility.name.trim()}
                          className="text-xs px-3 py-1 bg-green-900 hover:bg-green-800 border border-green-700 text-green-200 rounded-lg transition-colors disabled:opacity-40"
                        >
                          Add
                        </button>
                        <button
                          onClick={() => { setAddingAbilityFor(null); setNewAbility(emptyAbility()); }}
                          className="text-xs px-3 py-1 bg-stone-700 border border-stone-600 text-stone-400 rounded-lg"
                        >
                          Cancel
                        </button>
                      </div>
                    </div>
                  ) : (
                    <button
                      onClick={() => { setAddingAbilityFor(ci); setNewAbility(emptyAbility()); }}
                      className="w-full text-xs py-1 border border-dashed border-stone-600 hover:border-amber-700 text-stone-600 hover:text-amber-500 rounded-lg transition-colors"
                    >
                      + Add ability
                    </button>
                  )}
                </div>
              ))}
            </div>

            {addingCategory ? (
              <div className="mt-3 bg-stone-800 border border-amber-800 rounded-lg p-3 space-y-2">
                <p className="text-xs font-bold text-amber-400 uppercase tracking-wider">New Category</p>
                <input
                  autoFocus
                  placeholder="Category name (e.g. Shadow Arts)"
                  value={newCategory.name}
                  onChange={(e) => setNewCategory((p) => ({ ...p, name: e.target.value }))}
                  className={inputCls}
                />
                <input
                  placeholder="Flavor tagline (e.g. Darkness as a shield.)"
                  value={newCategory.flavor}
                  onChange={(e) => setNewCategory((p) => ({ ...p, flavor: e.target.value }))}
                  className={inputCls}
                />
                <div className="flex gap-2">
                  <button
                    onClick={submitCategory}
                    disabled={!newCategory.name.trim()}
                    className="text-xs px-3 py-1 bg-green-900 hover:bg-green-800 border border-green-700 text-green-200 rounded-lg transition-colors disabled:opacity-40"
                  >
                    Add Category
                  </button>
                  <button
                    onClick={() => { setAddingCategory(false); setNewCategory(emptyCategory()); }}
                    className="text-xs px-3 py-1 bg-stone-700 border border-stone-600 text-stone-400 rounded-lg"
                  >
                    Cancel
                  </button>
                </div>
              </div>
            ) : (
              <button
                onClick={() => setAddingCategory(true)}
                className="mt-3 w-full text-xs py-2 border border-dashed border-stone-600 hover:border-amber-700 text-stone-600 hover:text-amber-500 rounded-lg transition-colors"
              >
                + Add category
              </button>
            )}
          </section>
        </div>

        {/* Footer */}
        <div className="flex justify-end gap-3 px-6 py-4 border-t border-stone-700 bg-stone-950">
          <button
            onClick={onClose}
            className="text-sm px-4 py-2 bg-stone-800 hover:bg-stone-700 border border-stone-600 text-stone-400 rounded-lg transition-colors"
          >
            Cancel
          </button>
          <button
            onClick={handleSave}
            className="text-sm px-5 py-2 font-semibold bg-green-900 hover:bg-green-800 border border-green-700 text-green-200 rounded-lg transition-colors"
          >
            Save Changes
          </button>
        </div>
      </div>
    </div>
  );
}
