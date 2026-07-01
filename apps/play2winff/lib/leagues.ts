// Client-safe league-profile types and slot presets. No DB access here — see lib/server/leagues.ts.

export type SlotDef = {
  id: string;
  label: string;
  positions: string[];
};

export type LeagueProfile = {
  id: number;
  name: string;
  teams: number;
  bench_spots: number;
  roster_config: SlotDef[];
  default_list_type: 'ppr' | 'superflex';
  created_at: string;
};

export const POSITION_OPTIONS = ['QB', 'RB', 'WR', 'TE', 'K', 'DST'] as const;

export const SLOT_PRESETS: { label: string; def: Omit<SlotDef, 'id'> }[] = [
  { label: 'QB', def: { label: 'QB', positions: ['QB'] } },
  { label: 'WR', def: { label: 'WR', positions: ['WR'] } },
  { label: 'RB', def: { label: 'RB', positions: ['RB'] } },
  { label: 'TE', def: { label: 'TE', positions: ['TE'] } },
  { label: 'K', def: { label: 'K', positions: ['K'] } },
  { label: 'DST', def: { label: 'DST', positions: ['DST'] } },
  { label: 'FLEX', def: { label: 'FLEX', positions: ['WR', 'RB', 'TE'] } },
  {
    label: 'Superflex',
    def: { label: 'Superflex', positions: ['QB', 'WR', 'RB', 'TE'] },
  },
  { label: 'OP', def: { label: 'OP', positions: ['QB', 'WR', 'RB', 'TE'] } },
];
