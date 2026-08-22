// Position → theme-aware Tailwind color tokens, backed by CSS vars in
// apps/play2winff/styles/themes.ts (wired into tailwind.config.js as
// qb/rb/wr/te/pk/def). Used as a small badge + left-border accent per row
// rather than a full-row background wash, so body text keeps consistent
// contrast against the theme's surface color instead of fighting six
// different tinted backgrounds.
const POS_BADGE_CLASS: Record<string, string> = {
  QB: 'bg-qb',
  WR: 'bg-wr',
  RB: 'bg-rb',
  TE: 'bg-te',
  K: 'bg-pk',
  DST: 'bg-def',
};

const POS_BORDER_CLASS: Record<string, string> = {
  QB: 'border-l-qb',
  WR: 'border-l-wr',
  RB: 'border-l-rb',
  TE: 'border-l-te',
  K: 'border-l-pk',
  DST: 'border-l-def',
};

export function posBadgeClass(pos: string | null): string {
  return POS_BADGE_CLASS[pos ?? ''] ?? 'bg-disabled-color';
}

export function posBorderClass(pos: string | null): string {
  return POS_BORDER_CLASS[pos ?? ''] ?? 'border-l-border-color';
}
