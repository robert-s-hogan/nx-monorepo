import { BASE_STATS } from '../data';
import { StatName, Stats } from '../types';

export function computeTotalStats(
  baseStats: Stats,
  classModifiers: Stats,
  speciesModifiers: Stats,
  difficulty: number = 1
): Stats {
  // Validate inputs
  if (!baseStats || !classModifiers || !speciesModifiers) {
    throw new Error('Invalid stats provided');
  }

  // Combine class and species modifiers
  const combinedModifiers: Stats = { ...baseStats };
  for (const [key, value] of Object.entries(baseStats)) {
    combinedModifiers[key as keyof Stats] =
      (classModifiers[key as keyof Stats] ?? 0) +
      (speciesModifiers[key as keyof Stats] ?? 0);
  }

  // Apply combined modifiers to base stats
  const newStats: Stats = { ...baseStats };
  for (const [key, value] of Object.entries(baseStats)) {
    newStats[key as keyof Stats] =
      value + (combinedModifiers[key as keyof Stats] ?? 0);
  }

  // Custom calculations for specific stats
  newStats.HP = newStats.CON * 6;
  newStats.PHYSICAL_ATTACK = Math.max(newStats.STR, newStats.DEX) * 2;
  newStats.MAGICAL_ATTACK = newStats.INT * 2;
  newStats.DEF = newStats.DEF + newStats.STR;

  // Apply difficulty multiplier
  for (const [key, value] of Object.entries(newStats)) {
    newStats[key as keyof Stats] = Math.round(value * difficulty);
  }

  return newStats;
}
