// Pure, client-safe ranking-paste parsing. No DB access here — see lib/server/rankings.ts.

export type ListType = 'ppr' | 'superflex';
export type SnapshotRole = 'original' | 'latest';

export type ParsedRow = {
  rank: number;
  name: string;
  name_canon: string;
  team: string | null;
  position: string | null;
  parseOk: boolean;
  rawLine: string;
};

export type RankingSnapshot = {
  id: number;
  list_type: ListType;
  role: SnapshotRole | null;
  label: string;
  created_at: string;
  count?: number;
};

const VALID_POSITIONS = new Set([
  'QB',
  'RB',
  'WR',
  'TE',
  'K',
  'DST',
  'DEF',
  'D/ST',
]);
const NORM_POS: Record<string, string> = { DEF: 'DST', 'D/ST': 'DST' };

// Common NFL team abbreviations — used to anchor the parse
const TEAM_ABBREVS = new Set([
  'ARI', 'ATL', 'BAL', 'BUF', 'CAR', 'CHI', 'CIN', 'CLE', 'DAL', 'DEN',
  'DET', 'GB', 'HOU', 'IND', 'JAC', 'JAX', 'KC', 'LAC', 'LAR', 'LV',
  'MIA', 'MIN', 'NE', 'NO', 'NYG', 'NYJ', 'PHI', 'PIT', 'SEA', 'SF',
  'TB', 'TEN', 'WAS', 'WSH',
]);

export function canonName(name: string): string {
  return name
    .toLowerCase()
    .replace(/\b(jr|sr|ii|iii|iv|v)\b/gi, '')
    .replace(/[^a-z0-9 ]+/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

export function parsePaste(raw: string): ParsedRow[] {
  const lines = raw
    .split('\n')
    .map((l) => l.trim())
    .filter(Boolean);

  const rows: ParsedRow[] = [];

  for (const line of lines) {
    const tokens = line.split(/[\t ]+/);

    const rankNum = parseInt(tokens[0], 10);
    if (!Number.isFinite(rankNum) || rankNum <= 0) continue;

    let posIdx: number | null = null;
    let teamIdx: number | null = null;
    // Some sources (e.g. a plain "positional rank" chart) fuse position and
    // positional-rank into one token with no team column at all, e.g.
    // "RB1", "WR42" instead of "DET RB". Strip trailing digits and retry
    // against VALID_POSITIONS when the bare last token doesn't match.
    let fusedPos: string | null = null;

    const lastToken = tokens[tokens.length - 1]?.toUpperCase();
    if (lastToken && VALID_POSITIONS.has(lastToken)) {
      posIdx = tokens.length - 1;
    } else if (lastToken) {
      const stripped = lastToken.replace(/\d+$/, '');
      if (stripped && stripped !== lastToken && VALID_POSITIONS.has(stripped)) {
        posIdx = tokens.length - 1;
        fusedPos = stripped;
      }
    }

    const teamSearch = posIdx != null ? posIdx - 1 : tokens.length - 1;
    const maybeTeam = tokens[teamSearch]?.toUpperCase();
    if (fusedPos == null && maybeTeam && TEAM_ABBREVS.has(maybeTeam)) {
      teamIdx = teamSearch;
    }

    const nameEnd = teamIdx ?? posIdx ?? tokens.length;
    const nameParts = tokens.slice(1, nameEnd);
    const name = nameParts.join(' ').trim();

    const rawPos = fusedPos ?? (posIdx != null ? tokens[posIdx].toUpperCase() : null);
    const position = rawPos ? NORM_POS[rawPos] ?? rawPos : null;
    const team = teamIdx != null ? tokens[teamIdx].toUpperCase() : null;

    const parseOk = name.length > 0 && (team != null || position != null);

    rows.push({
      rank: rankNum,
      name,
      name_canon: canonName(name),
      team,
      position,
      parseOk,
      rawLine: line,
    });
  }

  return rows;
}
