// Position → theme-aware Tailwind background token, backed by CSS vars in
// apps/play2winff/styles/themes.ts (already wired into tailwind.config.js).
const POS_CLASS: Record<string, string> = {
  QB: 'bg-qb',
  WR: 'bg-wr',
  RB: 'bg-rb',
  TE: 'bg-te',
  K: 'bg-pk',
  DST: 'bg-def',
};

export function posClass(pos: string | null): string {
  return POS_CLASS[pos ?? ''] ?? 'bg-slate-100';
}
