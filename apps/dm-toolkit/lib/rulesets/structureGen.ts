// Auto-generates a map structure + its investigate check + tiered outcomes,
// so a DM doesn't have to hand-author every Lego structure on the table.
// Pulls from the shared @with-nx/constants D&D data pools (the same
// "connect it for both" reuse as lib/rulesets/conquest's ported encounter
// generation) rather than inventing new flavor lists.
import { Structures, dndConditionTypes, dndConditionDescriptions } from '@with-nx/constants';
import { INVESTIGATE_SKILLS } from '../dice';
import type { StructureOutcome } from '../../types';
import { pickRandom } from './pickRandom';

export type DraftOutcome = Omit<StructureOutcome, 'id' | 'check_id'>;

export interface StructureDraft {
  name: string;
  structure_type: string;
  check: { skill: string; dc: number; label: string };
  outcomes: DraftOutcome[];
}

const STRUCTURE_TYPES = ['building', 'ruins', 'nature', 'hazard', 'landmark'];

// No DC-by-level table exists elsewhere in the codebase (checks are
// hand-typed today) — this is a simple monotonic curve, clamped to keep
// early/late-game checks from becoming trivial or impossible.
export function dcForPartyLevel(level: number): number {
  return Math.min(20, Math.max(8, 10 + Math.floor(level / 2)));
}

// Single-die only (no "2d6") so a roll always fits in one DiePicker click.
// Escalates with band_order: the worse the miss, the bigger the die.
const CRIT_FAIL_DAMAGE_DICE = ['1d10', '1d12'];
const FAIL_BAD_DAMAGE_DICE = ['1d6', '1d8'];
const FAIL_ROUGH_DAMAGE_DICE = ['1d4'];

function conditionFlavor(): { condition: string; description: string } {
  const condition = pickRandom(dndConditionTypes);
  return { condition, description: dndConditionDescriptions[condition] ?? '' };
}

function critFailOutcome(structureName: string): DraftOutcome {
  const { condition, description } = conditionFlavor();
  return {
    tier: 'crit_fail',
    band_order: 0,
    narrative: `The ${structureName.toLowerCase()} violently turns against you — you are ${condition.toLowerCase()} (${description}).`,
    damage_dice: pickRandom(CRIT_FAIL_DAMAGE_DICE),
    insight: null,
    item: null,
    spawns_boss_character_id: null,
  };
}

// band 0 = worst-authored fail (deep miss lands here), band 1 = mildest
// fail (a narrow miss lands here) — still a fail, but graced with a partial
// clue, matching a near-miss "you didn't pass, but you learned something".
function failOutcome(band: 0 | 1, structureName: string): DraftOutcome {
  const { condition, description } = conditionFlavor();
  return {
    tier: 'fail',
    band_order: band,
    narrative:
      band === 0
        ? `The ${structureName.toLowerCase()} turns against you — you are ${condition.toLowerCase()} (${description}).`
        : `You fumble investigating the ${structureName.toLowerCase()} — you are ${condition.toLowerCase()} (${description}), but you spot something useful in the process.`,
    damage_dice: pickRandom(band === 0 ? FAIL_BAD_DAMAGE_DICE : FAIL_ROUGH_DAMAGE_DICE),
    insight: band === 1 ? `A partial clue about the ${structureName.toLowerCase()}, despite the setback.` : null,
    item: null,
    spawns_boss_character_id: null,
  };
}

// band 0 = weakest-authored success (barely-passed roll lands here), band 1
// = strongest (a roll that cleared the DC by a wide margin lands here).
function successOutcome(band: 0 | 1, structureName: string): DraftOutcome {
  return {
    tier: 'success',
    band_order: band,
    narrative:
      band === 0
        ? `You learn something useful from the ${structureName.toLowerCase()}.`
        : `You thoroughly figure out the ${structureName.toLowerCase()}, learning more than expected.`,
    damage_dice: null,
    insight: band === 1 ? `A deeper detail about the ${structureName.toLowerCase()} comes into focus.` : null,
    item: null,
    spawns_boss_character_id: null,
  };
}

function critSuccessOutcome(structureName: string): DraftOutcome {
  return {
    tier: 'crit_success',
    band_order: 0,
    narrative: `You fully uncover the secrets of the ${structureName.toLowerCase()}.`,
    damage_dice: null,
    insight: `A deeper truth about the ${structureName.toLowerCase()} is revealed.`,
    item: null,
    spawns_boss_character_id: null,
  };
}

export function generateStructureDraft(partyLevel: number): StructureDraft {
  const name = pickRandom(Structures).name;
  const skill = pickRandom(INVESTIGATE_SKILLS);
  const skillLabel = skill.charAt(0).toUpperCase() + skill.slice(1);

  // Symmetric 6-band spread: crit_fail, fail (worse/milder), success
  // (weaker/stronger), crit_success. Resolution picks among the two fail
  // and two success variants by how far the roll's margin from the DC
  // landed (see lib/server/structureResolution.ts's pickOutcome), not at
  // random, so a deep miss and a narrow miss genuinely read differently.
  const outcomes: DraftOutcome[] = [
    critFailOutcome(name),
    failOutcome(0, name),
    failOutcome(1, name),
    successOutcome(0, name),
    successOutcome(1, name),
    critSuccessOutcome(name),
  ];

  return {
    name,
    structure_type: pickRandom(STRUCTURE_TYPES),
    check: {
      skill: skillLabel,
      dc: dcForPartyLevel(partyLevel),
      label: `${skillLabel} check: ${name}`,
    },
    outcomes,
  };
}
