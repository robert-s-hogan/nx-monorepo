import type { CharacterStats, OutcomeTier } from '../types';

export function roll(sides: number): number {
  return Math.floor(Math.random() * sides) + 1;
}

export const rollD4 = () => roll(4);
export const rollD6 = () => roll(6);
export const rollD8 = () => roll(8);
export const rollD10 = () => roll(10);
export const rollD12 = () => roll(12);
export const rollD20 = () => roll(20);
export const rollD100 = () => roll(100);

export function modifier(stat: number): number {
  return Math.floor((stat - 10) / 2);
}

export function formatModifier(mod: number): string {
  return mod >= 0 ? `+${mod}` : `${mod}`;
}

export function statModifier(stat: number): string {
  return formatModifier(modifier(stat));
}

// Returns true if a d20 roll qualifies as a failure trigger (nat 1-3)
export function isFailureTrigger(d20Result: number): boolean {
  return d20Result <= 3;
}

// Returns true if a d6 roll should trigger a session-start random skill (odd)
export function isSessionStartTrigger(): boolean {
  return rollD6() % 2 !== 0;
}

// Rolls a free-text 5e dice expression like "2d6+1" or "1d4". Structure
// outcomes store damage this way since the count/sides/modifier vary per
// outcome and are authored ad-hoc per session (see structure_outcomes.damage_dice).
const DICE_EXPR = /^(\d+)d(\d+)(?:\s*([+-])\s*(\d+))?$/i;

export function rollDiceExpression(expr: string): number {
  const match = DICE_EXPR.exec(expr.trim());
  if (!match) throw new Error(`Invalid dice expression: "${expr}"`);
  const [, countStr, sidesStr, sign, modStr] = match;
  const count = parseInt(countStr, 10);
  const sides = parseInt(sidesStr, 10);
  const mod = modStr ? parseInt(modStr, 10) * (sign === '-' ? -1 : 1) : 0;
  let total = mod;
  for (let i = 0; i < count; i++) total += roll(sides);
  return total;
}

// Returns the side count for a plain single-die expression like "1d8", or
// null for anything a single DiePicker click can't represent (multi-die,
// modifiers) — those fall back to a manual number input instead.
export function diceSidesIfSingleDie(expr: string): number | null {
  const match = /^1d(\d+)$/i.exec(expr.trim());
  return match ? parseInt(match[1], 10) : null;
}

// Maps a 5e skill name to the ability score it's checked against, for
// structure investigation rolls. Falls back to 'int' for unlisted skills
// since most investigate-a-structure checks (History, Arcana, Investigation)
// are Intelligence-based.
const SKILL_ABILITY: Record<string, keyof CharacterStats> = {
  investigation: 'int',
  history: 'int',
  arcana: 'int',
  religion: 'int',
  nature: 'int',
  perception: 'wis',
  insight: 'wis',
  survival: 'wis',
  medicine: 'wis',
  athletics: 'str',
  acrobatics: 'dex',
  'sleight of hand': 'dex',
  stealth: 'dex',
  intimidation: 'cha',
  persuasion: 'cha',
  deception: 'cha',
  performance: 'cha',
};

export function skillModifier(skill: string, stats: CharacterStats): number {
  const ability = SKILL_ABILITY[skill.trim().toLowerCase()] ?? 'int';
  return modifier(stats[ability]);
}

// The skill pool for auto-generated structure checks — reuses the same set
// skillModifier() already knows how to score, rather than a separate list.
export const INVESTIGATE_SKILLS = Object.keys(SKILL_ABILITY);

// A small, capped bonus from landing attacks over time — "practice makes
// perfect" — stacked on top of the STR/DEX modifier rather than touching
// the character's actual ability scores. +1 every 20 lifetime hits landed,
// capped at +5 (100 hits) so it stays a flavorful nudge rather than a power
// spike alongside normal leveling.
const PRACTICED_HITS_PER_BONUS = 20;
const PRACTICED_MAX_BONUS = 5;

export function practicedBonus(hitsLanded: number): number {
  return Math.min(PRACTICED_MAX_BONUS, Math.floor(hitsLanded / PRACTICED_HITS_PER_BONUS));
}

// Shared by lib/server/combat.ts (authoritative) and AttackPanel.tsx (live
// hit preview as the DM types in a roll) so both sides of the wire agree on
// the same number without duplicating the formula. STR/DEX-based, matching
// the melee-or-finesse assumption combat already made pre-manual-rolls, plus
// the practiced bonus above.
export function meleeAttackModifier(
  character: { stats: CharacterStats; hits_landed?: number } | null | undefined
): number {
  if (!character) return 0;
  const base = Math.max(modifier(character.stats.str), modifier(character.stats.dex));
  return base + practicedBonus(character.hits_landed ?? 0);
}

// Structure investigation checks no longer roll against a DC — a flat
// 7-band table replaces roll-vs-DC + margin math (decided over DC-relative
// bands specifically so a natural 1/20 always crits regardless of
// modifier, 5e convention, while a modifier still matters everywhere else
// by shifting the total across band boundaries). Shared by
// lib/server/structureResolution.ts (authoritative) and
// InvestigatePanel.tsx (live preview) so both sides of the wire agree.
export interface StructureBand {
  tier: OutcomeTier;
  band_order: number;
}

export function structureCheckBand(rawRoll: number, mod: number): StructureBand {
  if (rawRoll === 1) return { tier: 'crit_fail', band_order: 0 };
  if (rawRoll === 20) return { tier: 'crit_success', band_order: 0 };
  const total = rawRoll + mod;
  if (total >= 17) return { tier: 'success', band_order: 1 };
  if (total >= 13) return { tier: 'success', band_order: 0 };
  if (total >= 9) return { tier: 'fail', band_order: 2 };
  if (total >= 5) return { tier: 'fail', band_order: 1 };
  return { tier: 'fail', band_order: 0 };
}
