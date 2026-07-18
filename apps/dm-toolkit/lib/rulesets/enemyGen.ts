// Auto-generates a flavorful name + one-line description for a one-off
// enemy token, so the DM doesn't have to type "Bandit 3" every time. Reuses
// the shared @with-nx/constants D&D data pools (species/specialTraits/
// alignments) rather than inventing new lists, same "connect it for both"
// reuse as lib/rulesets/structureGen.ts.
import { species, specialTraits, alignments } from '@with-nx/constants';
import { pickRandom } from './pickRandom';
import { rollDiceExpression } from '../dice';

// Hand-authored — no equivalent pool exists in @with-nx/constants, and this
// is presentation flavor specific to this feature, not shared D&D data.
const EPITHETS = [
  'Ruthless', 'Bloodfang', 'Grim', 'Wretched', 'Feral', 'Ashen', 'Vile',
  'Cunning', 'Savage', 'Wicked', 'Gnarled', 'Rotting', 'Shrieking',
  'Iron-Fisted', 'Blood-Soaked', 'Hollow-Eyed', 'Rabid', 'Cruel',
];

function capitalize(s: string): string {
  return s.charAt(0).toUpperCase() + s.slice(1);
}

export interface EnemyDraft {
  name: string;
  flavor: string;
  hp: number;
  armorClass: number;
}

// One-off enemies are filler, not a combat action a player watches get
// rolled at the table (unlike attacks/structure checks) — so per the DM's
// request, HP/AC are fully randomized off the party's average level
// instead of a manual DiePicker roll. Curve invented, no prior art existed;
// same clamp style as structureGen.ts's dcForPartyLevel.
export function hpDiceForPartyLevel(level: number): string {
  const numDice = 1 + Math.floor(level / 2);
  return `${numDice}d8+${level}`;
}

export function acForPartyLevel(level: number): number {
  return Math.min(18, Math.max(10, 10 + Math.floor(level / 3)));
}

export function generateEnemyDraft(partyLevel: number): EnemyDraft {
  const speciesName = pickRandom(species);
  const name = `${pickRandom(EPITHETS)} ${capitalize(speciesName)}`;
  const flavor = `A ${pickRandom(alignments)} ${speciesName} known for its ${pickRandom(specialTraits)}.`;
  const hp = rollDiceExpression(hpDiceForPartyLevel(partyLevel));
  const armorClass = acForPartyLevel(partyLevel);
  return { name, flavor, hp, armorClass };
}
