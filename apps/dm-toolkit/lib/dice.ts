import type { CharacterStats } from '../types';

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

// Shared by lib/server/combat.ts (authoritative) and AttackControls.tsx (live
// hit preview as the DM types in a roll) so both sides of the wire agree on
// the same number without duplicating the formula. STR/DEX-based, matching
// the melee-or-finesse assumption combat already made pre-manual-rolls.
export function meleeAttackModifier(character: { stats: CharacterStats } | null | undefined): number {
  if (!character) return 0;
  return Math.max(modifier(character.stats.str), modifier(character.stats.dex));
}
