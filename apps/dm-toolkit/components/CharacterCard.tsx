import { useState } from 'react';
import type { Character, RandomSkill } from '../types';
import { useStore } from '../store/useStore';
import { statModifier } from '../lib/dice';
import SkillBadge from './SkillBadge';
import CharacterSheetModal from './CharacterSheetModal';
import CharacterEditModal from './CharacterEditModal';
import randomSkillsData from '../data/random_skills.json';

interface Props {
  character: Character;
  compact?: boolean;
  onRemoveFromSession?: () => void;
  canEdit: boolean;
}

const STATS = ['str', 'dex', 'con', 'int', 'wis', 'cha'] as const;

const STATUS_BADGE: Record<string, string> = {
  positive: 'bg-green-950 border-green-700 text-green-300',
  negative: 'bg-red-950 border-red-700 text-red-300',
  neutral: 'bg-stone-900 border-stone-600 text-stone-300',
};

export default function CharacterCard({ character, compact = false, onRemoveFromSession, canEdit }: Props) {
  const { updateCharacter, assignRandomSkill } = useStore();

  const [sheetOpen, setSheetOpen] = useState(false);
  const [editOpen, setEditOpen] = useState(false);

  // ── Derived: status effect values ─────────────────────────────────────────

  const statusEffects = character.status_effects ?? [];

  const effectiveAC = statusEffects.reduce((acc, s) => acc + (s.modifiers?.ac ?? 0), character.armor_class);

  const tempHP = statusEffects.reduce((acc, s) => acc + (s.modifiers?.temp_hp ?? 0), 0);

  const statBonus = (stat: (typeof STATS)[number]) =>
    statusEffects.reduce((acc, s) => acc + (s.modifiers?.[stat] ?? 0), 0);

  // ── Play controls ─────────────────────────────────────────────────────────

  const setHP = (delta: number) => {
    const next = Math.min(character.hit_points.max, Math.max(0, character.hit_points.current + delta));
    updateCharacter(character.id, { hit_points: { ...character.hit_points, current: next } });
  };

  const toggleStamina = (index: number) => {
    const isFilled = index < character.stamina.current;
    const next = isFilled
      ? character.stamina.current - 1
      : character.stamina.current + 1;
    updateCharacter(character.id, {
      stamina: { ...character.stamina, current: Math.max(0, Math.min(character.stamina.max, next)) },
    });
  };

  const cycleXP = (categoryIndex: number) => {
    const cats = character.ability_categories.map((cat, i) => {
      if (i !== categoryIndex) return cat;
      const next = cat.xp.current < cat.xp.max ? cat.xp.current + 1 : 0;
      return { ...cat, xp: { ...cat.xp, current: next } };
    });
    updateCharacter(character.id, { ability_categories: cats });
  };

  const removeRandomSkill = (skillId: string) => {
    updateCharacter(character.id, {
      random_skills: character.random_skills.filter((s) => s.skill_id !== skillId),
    });
  };

  // ── Derived ───────────────────────────────────────────────────────────────

  const hpPct = Math.round((character.hit_points.current / character.hit_points.max) * 100);
  const hpColor = hpPct > 60 ? 'bg-green-600' : hpPct > 25 ? 'bg-amber-500' : 'bg-red-600';

  return (
    <>
      {sheetOpen && <CharacterSheetModal character={character} onClose={() => setSheetOpen(false)} />}
      {editOpen && canEdit && <CharacterEditModal character={character} onClose={() => setEditOpen(false)} />}

      <div className="bg-stone-800 rounded-xl overflow-hidden shadow-2xl flex flex-col border border-stone-700">

        {/* Header */}
        <div className="px-5 py-4 flex justify-between items-start" style={{ backgroundColor: '#3a4b20' }}>
          <div>
            <h2 className="text-xl font-bold text-stone-100 uppercase tracking-widest">
              {character.name}
            </h2>
            <p className="text-stone-400 text-sm italic">
              {character.class} — Lvl {character.level}
            </p>
          </div>
          <div className="flex items-center gap-2 mt-1">
            {!compact && (
              <button
                onClick={() => setSheetOpen(true)}
                className="text-xs px-2.5 py-1 rounded-lg border bg-stone-800 border-stone-600 text-stone-400 hover:text-stone-200 transition-colors"
                title="View printable character sheet"
              >
                Sheet
              </button>
            )}
            {!compact && canEdit && (
              <button
                onClick={() => setEditOpen(true)}
                className="text-xs px-2.5 py-1 rounded-lg border bg-stone-800 border-stone-600 text-stone-400 hover:text-stone-200 transition-colors"
                title="Edit character"
              >
                Edit
              </button>
            )}
            {onRemoveFromSession && canEdit && (
              <button
                onClick={onRemoveFromSession}
                className="text-stone-500 hover:text-red-400 text-lg leading-none"
                title="Remove from session"
              >
                ✕
              </button>
            )}
          </div>
        </div>

        {/* HP bar */}
        <div className="h-1.5 w-full bg-stone-700">
          <div className={`h-full ${hpColor} transition-all duration-300`} style={{ width: `${hpPct}%` }} />
        </div>

        {/* Core stats row */}
        <div className="grid grid-cols-4 divide-x divide-stone-700 border-b border-stone-700 bg-stone-900">
          {/* AC */}
          <div className="flex flex-col items-center py-3">
            <span className="text-xs font-bold uppercase text-stone-500">AC</span>
            <span className="text-2xl font-bold text-stone-100">{effectiveAC}</span>
            {effectiveAC !== character.armor_class && (
              <span className="text-[10px] text-stone-500">base {character.armor_class}</span>
            )}
          </div>

          {/* Speed */}
          <div className="flex flex-col items-center py-3">
            <span className="text-xs font-bold uppercase text-stone-500">Speed</span>
            <span className="text-2xl font-bold text-stone-100">{character.speed ?? 30}</span>
            <span className="text-[10px] text-stone-500">ft</span>
          </div>

          {/* HP */}
          <div className="flex flex-col items-center py-3 gap-1">
            <span className="text-xs font-bold uppercase text-stone-500">HP</span>
            <span className="text-2xl font-bold text-stone-100">
              {character.hit_points.current}
              <span className="text-stone-500 text-base">/{character.hit_points.max}</span>
            </span>
            {tempHP > 0 && (
              <span className="text-xs font-semibold text-green-400">+{tempHP} temp</span>
            )}
            {canEdit && (
              <div className="flex gap-1">
                <button onClick={() => setHP(-1)} className="text-xs px-2 py-0.5 bg-red-900 hover:bg-red-800 text-red-200 rounded">−1</button>
                <button onClick={() => setHP(1)} className="text-xs px-2 py-0.5 bg-green-900 hover:bg-green-800 text-green-200 rounded">+1</button>
              </div>
            )}
          </div>

          {/* Stamina */}
          <div className="flex flex-col items-center py-3 gap-1">
            <span className="text-xs font-bold uppercase text-stone-500">Stamina</span>
            <div className="flex gap-1 flex-wrap justify-center">
              {Array.from({ length: character.stamina.max }).map((_, i) => (
                <button
                  key={i}
                  onClick={canEdit ? () => toggleStamina(i) : undefined}
                  disabled={!canEdit}
                  className={`stamina-bubble ${i < character.stamina.current ? 'filled' : ''}`}
                  title={`Stamina ${i + 1}`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Stat block */}
        <div className="grid grid-cols-6 text-center border-b border-stone-700 bg-stone-950">
          {STATS.map((stat) => {
            const bonus = statBonus(stat);
            const baseMod = statModifier(character.stats[stat]);
            const effectiveMod = statModifier(character.stats[stat] + bonus);
            const isModified = bonus !== 0;
            return (
              <div key={stat} className="py-2 border-r border-stone-800 last:border-r-0">
                <div className="text-[10px] font-bold uppercase text-stone-500">{stat}</div>
                <div className="text-base font-bold text-stone-100">{character.stats[stat]}</div>
                <div
                  className={`text-[10px] ${isModified ? (bonus > 0 ? 'text-green-400' : 'text-red-400') : 'text-stone-500'}`}
                  title={isModified ? `Base: ${baseMod}` : undefined}
                >
                  {effectiveMod}
                </div>
              </div>
            );
          })}
        </div>

        {/* Background */}
        {!compact && (
          <div className="px-4 py-3 border-b border-stone-700">
            <p className="text-[11px] font-bold uppercase text-stone-500 mb-1">Background</p>
            <p className="text-stone-400 text-xs italic leading-relaxed">{`"${character.background}"`}</p>
          </div>
        )}

        {/* Notes */}
        {!compact && character.notes && (
          <div className="px-4 py-3 border-b border-stone-700">
            <p className="text-[11px] font-bold uppercase text-stone-500 mb-1">Notes</p>
            <p className="text-stone-400 text-xs leading-relaxed whitespace-pre-wrap">{character.notes}</p>
          </div>
        )}

        {/* Status effects */}
        {!compact && statusEffects.length > 0 && (
          <div className="px-4 py-3 border-b border-stone-700">
            <p className="text-[11px] font-bold uppercase text-stone-500 mb-2">Status</p>
            <div className="flex flex-wrap gap-1.5">
              {statusEffects.map((s) => {
                const mods = Object.entries(s.modifiers ?? {})
                  .filter(([, v]) => v !== 0)
                  .map(([k, v]) => `${k === 'temp_hp' ? 'THP' : k.toUpperCase()} ${(v as number) > 0 ? '+' : ''}${v}`)
                  .join(' ');
                return (
                  <span
                    key={s.id}
                    className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-md border text-xs ${STATUS_BADGE[s.type]}`}
                  >
                    <span className="font-semibold">{s.name}</span>
                    {mods && <span className="opacity-60 text-[10px]">{mods}</span>}
                  </span>
                );
              })}
            </div>
          </div>
        )}

        {/* Ability categories */}
        {!compact && (
          <div className="p-4 space-y-3">
            <div className="grid grid-cols-2 gap-3">
              {character.ability_categories.map((cat, ci) => (
                <div
                  key={`${cat.name}-${ci}`}
                  className="bg-stone-900 rounded-lg p-3 border border-stone-700"
                >
                  <div className="flex justify-between items-start mb-2">
                    <div className="flex-1 min-w-0">
                      <h4 className="font-bold text-green-400 text-sm truncate">{cat.name}</h4>
                      <p className="text-[11px] text-stone-500 italic truncate">{`"${cat.flavor}"`}</p>
                    </div>
                    <div
                      className={`flex gap-0.5 flex-wrap justify-end mt-0.5 ml-2 shrink-0 ${canEdit ? 'cursor-pointer' : ''}`}
                      onClick={canEdit ? () => cycleXP(ci) : undefined}
                      title={canEdit ? 'Click to advance XP' : undefined}
                    >
                      {Array.from({ length: cat.xp.max }).map((_, i) => (
                        <span key={i} className={`xp-bubble ${i < cat.xp.current ? 'filled' : ''}`} />
                      ))}
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    {cat.abilities.map((ability) => (
                      <div key={ability.name} className="text-xs">
                        <span className="font-semibold text-stone-200">{ability.name}: </span>
                        <span className="text-stone-400">{ability.description}</span>
                        {ability.stamina_cost > 0 && (
                          <span className="ml-1 text-amber-400 font-bold">[{ability.stamina_cost} ST]</span>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Random skills */}
        {character.random_skills.length > 0 && (
          <div className="px-4 pb-4">
            <p className="text-[11px] font-bold uppercase text-stone-500 mb-2">Random Skills</p>
            <div className="flex flex-col gap-2">
              {character.random_skills.map((assigned) => {
                const skill = (randomSkillsData.skills as RandomSkill[]).find(
                  (s) => s.id === assigned.skill_id
                );
                return skill ? (
                  <SkillBadge
                    key={assigned.skill_id}
                    skill={skill}
                    onRemove={canEdit ? () => removeRandomSkill(assigned.skill_id) : undefined}
                  />
                ) : null;
              })}
            </div>
          </div>
        )}

        {/* Session trigger buttons */}
        {!compact && canEdit && (
          <div className="px-4 pb-4 flex gap-2 flex-wrap">
            <button
              onClick={() => assignRandomSkill(character.id, 'failure')}
              className="text-xs px-3 py-1.5 bg-red-950 hover:bg-red-900 border border-red-800 text-red-300 rounded-lg transition-colors"
            >
              Trigger Failure
            </button>
            <button
              onClick={() => assignRandomSkill(character.id, 'random')}
              className="text-xs px-3 py-1.5 bg-stone-900 hover:bg-stone-700 border border-stone-600 text-stone-300 rounded-lg transition-colors"
            >
              Random Event
            </button>
          </div>
        )}
      </div>
    </>
  );
}
