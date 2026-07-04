import type { LevelDetails, ProgressionSystem } from '../../types';
import { getLevelDetails as getLevelDetailsDnd5e } from './dnd5e';

const PROGRESSION_SYSTEMS: Record<
  ProgressionSystem,
  (totalXp: number) => LevelDetails
> = {
  dnd5e: getLevelDetailsDnd5e,
};

export function getLevelDetailsFor(
  system: ProgressionSystem,
  totalXp: number
): LevelDetails {
  return PROGRESSION_SYSTEMS[system](totalXp);
}
