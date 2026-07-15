// Auto-generates a flavorful name + one-line description for a one-off
// enemy token, so the DM doesn't have to type "Bandit 3" every time. Reuses
// the shared @with-nx/constants D&D data pools (species/specialTraits/
// alignments) rather than inventing new lists, same "connect it for both"
// reuse as lib/rulesets/structureGen.ts.
import { species, specialTraits, alignments } from '@with-nx/constants';
import { pickRandom } from './pickRandom';

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
}

export function generateEnemyDraft(): EnemyDraft {
  const speciesName = pickRandom(species);
  const name = `${pickRandom(EPITHETS)} ${capitalize(speciesName)}`;
  const flavor = `A ${pickRandom(alignments)} ${speciesName} known for its ${pickRandom(specialTraits)}.`;
  return { name, flavor };
}
