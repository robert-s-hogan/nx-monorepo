// Auto-generates a map structure + its investigate check + a full 7-band
// outcome table, so a DM doesn't have to hand-author every Lego structure
// on the table. Pulls from the shared @with-nx/constants D&D data pools
// (the same "connect it for both" reuse as lib/rulesets/conquest's ported
// encounter generation) rather than inventing new flavor lists.
//
// Bands are keyed to the natural d20 roll + skill modifier (see
// lib/dice.ts's structureCheckBand) instead of a DC — nat 1/20 always
// crit, otherwise the total lands in one of 5 severity bands. Each band's
// narrative is picked from a small phrasing pool (not a single fixed
// sentence) so repeated structures don't read identically, same
// combinatorial-variety pattern enemyGen.ts uses for epithet+species+trait.
import { Structures, dndConditionTypes, dndConditionDescriptions } from '@with-nx/constants';
import { INVESTIGATE_SKILLS } from '../dice';
import type { MapStory, StructureOutcome } from '../../types';
import { pickRandom } from './pickRandom';

export type DraftOutcome = Omit<StructureOutcome, 'id' | 'check_id'>;

export interface StructureDraft {
  name: string;
  structure_type: string;
  check: { skill: string; label: string };
  outcomes: DraftOutcome[];
  // Story clue ids consumed while building this draft — the caller should
  // mark these used on the map's story once the draft is actually saved
  // (not on every reroll of an eventually-discarded preview).
  usedClueIds: string[];
}

const STRUCTURE_TYPES = ['building', 'ruins', 'nature', 'hazard', 'landmark'];

// Structure checks themselves don't use a DC anymore (see the 7-band
// system above), but freeform Quick Checks (InvestigatePanel.tsx, no
// structure targeted) still do — this is a simple monotonic curve, clamped
// to keep early/late-game checks from becoming trivial or impossible.
export function dcForPartyLevel(level: number): number {
  return Math.min(20, Math.max(8, 10 + Math.floor(level / 2)));
}

// Single-die only (no "2d6") so a roll always fits in one DiePicker click.
// Escalates with severity band — the worse the band, the bigger the die.
const CRIT_FAIL_DAMAGE_DICE = ['1d10', '1d12'];
const FAIL_BAD_DAMAGE_DICE = ['1d8', '1d10'];
const FAIL_MILD_DAMAGE_DICE = ['1d4', '1d6'];

function conditionFlavor(): { condition: string; description: string } {
  const condition = pickRandom(dndConditionTypes);
  return { condition, description: dndConditionDescriptions[condition] ?? '' };
}

function critFailNarrative(name: string, condition: string, description: string): string {
  const n = name.toLowerCase();
  const c = condition.toLowerCase();
  return pickRandom([
    `The ${n} violently turns against you — you are ${c} (${description}).`,
    `Something ancient stirs the moment you touch the ${n} — you are ${c} (${description}).`,
    `The ${n} lashes out with brutal force — you are ${c} (${description}).`,
  ]);
}

function failBadNarrative(name: string, condition: string, description: string): string {
  const n = name.toLowerCase();
  const c = condition.toLowerCase();
  return pickRandom([
    `The ${n} turns against you — you are ${c} (${description}).`,
    `Your investigation of the ${n} goes badly wrong — you are ${c} (${description}).`,
    `The ${n} reacts violently to your touch — you are ${c} (${description}).`,
  ]);
}

function failMildNarrative(name: string, condition: string, description: string): string {
  const n = name.toLowerCase();
  const c = condition.toLowerCase();
  return pickRandom([
    `You fumble investigating the ${n} — you are ${c} (${description}).`,
    `A misstep with the ${n} leaves you ${c} (${description}).`,
    `The ${n} catches you off guard — you are ${c} (${description}).`,
  ]);
}

// The "so-close" band (total 9-12) — no damage, and always hands back a
// clue (see generateStructureDraft's claimClue calls) even though the
// check itself didn't pan out, matching the original "a narrow miss still
// teaches you something" design intent.
function failMixedNarrative(name: string): string {
  const n = name.toLowerCase();
  return pickRandom([
    `Your search of the ${n} turns up little — but something catches your eye.`,
    `You don't crack the ${n}'s secrets, but you notice something worth remembering.`,
    `The ${n} keeps most of its secrets, though not all of them.`,
  ]);
}

function successWeakNarrative(name: string): string {
  const n = name.toLowerCase();
  return pickRandom([
    `You learn something useful from the ${n}.`,
    `You piece together a few useful details about the ${n}.`,
    `The ${n} gives up a little of what it's hiding.`,
  ]);
}

function successStrongNarrative(name: string): string {
  const n = name.toLowerCase();
  return pickRandom([
    `You thoroughly figure out the ${n}, learning more than expected.`,
    `You read the ${n} like an open book.`,
    `Everything about the ${n} clicks into place at once.`,
  ]);
}

function critSuccessNarrative(name: string): string {
  const n = name.toLowerCase();
  return pickRandom([
    `You fully uncover the secrets of the ${n}.`,
    `Every hidden detail of the ${n} lays bare before you.`,
    `You understand the ${n} completely, as if it were built for you to find.`,
  ]);
}

export function generateStructureDraft(story?: MapStory | null): StructureDraft {
  const name = pickRandom(Structures).name;
  const skill = pickRandom(INVESTIGATE_SKILLS);
  const skillLabel = skill.charAt(0).toUpperCase() + skill.slice(1);

  // A flat pool, no dependency graph (see storyGen.ts) — each insight slot
  // just claims whatever unused clue is next. Local copy + shift() so
  // rerolling an unsaved draft can't double-claim the same clue twice, but
  // nothing is marked used on the map's story itself until the caller
  // actually saves this draft (see StructurePanel.tsx's handleSaveDraft).
  const availableClues = (story?.clues ?? []).filter((c) => !c.used);
  const usedClueIds: string[] = [];
  const claimClue = (): string | null => {
    const clue = availableClues.shift();
    if (!clue) return null;
    usedClueIds.push(clue.id);
    return clue.text;
  };

  const crit = conditionFlavor();
  const bad = conditionFlavor();
  const mild = conditionFlavor();

  // 7 bands, keyed to structureCheckBand's (tier, band_order) pairs — see
  // lib/dice.ts. Every pass-side band (mixed-fail 9-12, both success bands,
  // crit-success) claims a clue — up to 4 per structure. The two genuine-
  // fail bands (<=4, 5-8) still deal damage but teach nothing.
  const outcomes: DraftOutcome[] = [
    {
      tier: 'crit_fail',
      band_order: 0,
      narrative: critFailNarrative(name, crit.condition, crit.description),
      damage_dice: pickRandom(CRIT_FAIL_DAMAGE_DICE),
      insight: null,
      item: null,
      spawns_boss_character_id: null,
    },
    {
      tier: 'fail',
      band_order: 0,
      narrative: failBadNarrative(name, bad.condition, bad.description),
      damage_dice: pickRandom(FAIL_BAD_DAMAGE_DICE),
      insight: null,
      item: null,
      spawns_boss_character_id: null,
    },
    {
      tier: 'fail',
      band_order: 1,
      narrative: failMildNarrative(name, mild.condition, mild.description),
      damage_dice: pickRandom(FAIL_MILD_DAMAGE_DICE),
      insight: null,
      item: null,
      spawns_boss_character_id: null,
    },
    {
      tier: 'fail',
      band_order: 2,
      narrative: failMixedNarrative(name),
      damage_dice: null,
      insight: claimClue() ?? `A partial clue about the ${name.toLowerCase()}, despite the setback.`,
      item: null,
      spawns_boss_character_id: null,
    },
    {
      tier: 'success',
      band_order: 0,
      narrative: successWeakNarrative(name),
      damage_dice: null,
      insight: claimClue() ?? `A minor detail about the ${name.toLowerCase()} stands out.`,
      item: null,
      spawns_boss_character_id: null,
    },
    {
      tier: 'success',
      band_order: 1,
      narrative: successStrongNarrative(name),
      damage_dice: null,
      insight: claimClue() ?? `A deeper detail about the ${name.toLowerCase()} comes into focus.`,
      item: null,
      spawns_boss_character_id: null,
    },
    {
      tier: 'crit_success',
      band_order: 0,
      narrative: critSuccessNarrative(name),
      damage_dice: null,
      insight: claimClue() ?? `A deeper truth about the ${name.toLowerCase()} is revealed.`,
      item: null,
      spawns_boss_character_id: null,
    },
  ];

  return {
    name,
    structure_type: pickRandom(STRUCTURE_TYPES),
    check: {
      skill: skillLabel,
      label: `${skillLabel} check: ${name}`,
    },
    outcomes,
    usedClueIds,
  };
}
