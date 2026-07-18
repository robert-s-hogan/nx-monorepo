// Shared by lib/server/structureResolution.ts (boss scaling, from
// DB-fetched characters) and AddTokenPanel.tsx (one-off enemy generation,
// from already-loaded store state) so both agree on the same "average
// level of characters currently on the map" definition.
export function averagePartyLevel(levels: number[]): number {
  if (levels.length === 0) return 1;
  return Math.round(levels.reduce((sum, l) => sum + l, 0) / levels.length);
}
