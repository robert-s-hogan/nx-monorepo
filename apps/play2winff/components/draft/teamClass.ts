// Team → brand-colored badge classes, mirroring posClass.ts's pattern but
// keyed by NFL team abbreviation instead of position. Arbitrary hex values
// (not Tailwind's default palette — 32 teams' brand colors don't map onto
// it) written as full literal classes so the Tailwind JIT scanner can find
// them. Unlike position badges (fixed white text, only bg varies), several
// teams need dark or accent text for contrast against their own brand
// color, so each entry carries its own bg + text pair.
const TEAM_BADGE_CLASS: Record<string, string> = {
  ARI: 'bg-[#97233F] text-white',
  ATL: 'bg-[#A71930] text-white',
  BAL: 'bg-[#241773] text-white',
  BUF: 'bg-[#00338D] text-white',
  CAR: 'bg-[#0085CA] text-white',
  CHI: 'bg-[#0B162A] text-white',
  CIN: 'bg-[#FB4F14] text-black',
  CLE: 'bg-[#311D00] text-white',
  DAL: 'bg-[#041E42] text-white',
  DEN: 'bg-[#FB4F14] text-black',
  DET: 'bg-[#0076B6] text-white',
  GB: 'bg-[#203731] text-[#FFB612]',
  HOU: 'bg-[#03202F] text-white',
  IND: 'bg-[#002C5F] text-white',
  JAC: 'bg-[#006778] text-white',
  JAX: 'bg-[#006778] text-white',
  KC: 'bg-[#E31837] text-white',
  LAC: 'bg-[#0080C6] text-white',
  LAR: 'bg-[#003594] text-[#FFA300]',
  LV: 'bg-black text-white',
  MIA: 'bg-[#008E97] text-white',
  MIN: 'bg-[#4F2683] text-[#FFC62F]',
  NE: 'bg-[#002244] text-white',
  NO: 'bg-black text-[#D3BC8D]',
  NYG: 'bg-[#0B2265] text-white',
  NYJ: 'bg-[#125740] text-white',
  PHI: 'bg-[#004C54] text-white',
  PIT: 'bg-[#101820] text-[#FFB612]',
  SEA: 'bg-[#002244] text-[#69BE28]',
  SF: 'bg-[#AA0000] text-[#B3995D]',
  TB: 'bg-[#D50A0A] text-white',
  TEN: 'bg-[#0C2340] text-[#4B92DB]',
  WAS: 'bg-[#5A1414] text-[#FFB612]',
  WSH: 'bg-[#5A1414] text-[#FFB612]',
};

export function teamBadgeClass(team: string | null): string {
  return TEAM_BADGE_CLASS[team ?? ''] ?? 'bg-disabled-color text-text-color';
}

// Self-hosted (public/nfl-logos/) rather than hotlinked — Sleeper's CDN only
// guarantees a 31-day browser cache (`cache-control: max-age=2678400`), and
// isn't an official public API with any uptime/stability guarantee. Fetched
// once from sleepercdn.com and committed to the repo so these keep working
// indefinitely regardless of what Sleeper's CDN does later. Only one file
// per real team — JAC/JAX are the same team (Jacksonville) and share
// jax.png; WSH shares was.png with WAS.
const LOGO_ABBR_OVERRIDES: Record<string, string> = {
  JAC: 'jax',
  WSH: 'was',
};

export function teamLogoUrl(team: string | null): string | null {
  if (!team) return null;
  const abbr = LOGO_ABBR_OVERRIDES[team] ?? team.toLowerCase();
  return `/nfl-logos/${abbr}.png`;
}

// One canonical entry per real team (JAX not JAC, WAS not WSH) for a team
// picker — the alias handling above is only needed for values that already
// exist in imported data, not for new manual selections.
export const TEAM_OPTIONS: { code: string; name: string }[] = [
  { code: 'ARI', name: 'Arizona Cardinals' },
  { code: 'ATL', name: 'Atlanta Falcons' },
  { code: 'BAL', name: 'Baltimore Ravens' },
  { code: 'BUF', name: 'Buffalo Bills' },
  { code: 'CAR', name: 'Carolina Panthers' },
  { code: 'CHI', name: 'Chicago Bears' },
  { code: 'CIN', name: 'Cincinnati Bengals' },
  { code: 'CLE', name: 'Cleveland Browns' },
  { code: 'DAL', name: 'Dallas Cowboys' },
  { code: 'DEN', name: 'Denver Broncos' },
  { code: 'DET', name: 'Detroit Lions' },
  { code: 'GB', name: 'Green Bay Packers' },
  { code: 'HOU', name: 'Houston Texans' },
  { code: 'IND', name: 'Indianapolis Colts' },
  { code: 'JAX', name: 'Jacksonville Jaguars' },
  { code: 'KC', name: 'Kansas City Chiefs' },
  { code: 'LAC', name: 'Los Angeles Chargers' },
  { code: 'LAR', name: 'Los Angeles Rams' },
  { code: 'LV', name: 'Las Vegas Raiders' },
  { code: 'MIA', name: 'Miami Dolphins' },
  { code: 'MIN', name: 'Minnesota Vikings' },
  { code: 'NE', name: 'New England Patriots' },
  { code: 'NO', name: 'New Orleans Saints' },
  { code: 'NYG', name: 'New York Giants' },
  { code: 'NYJ', name: 'New York Jets' },
  { code: 'PHI', name: 'Philadelphia Eagles' },
  { code: 'PIT', name: 'Pittsburgh Steelers' },
  { code: 'SEA', name: 'Seattle Seahawks' },
  { code: 'SF', name: 'San Francisco 49ers' },
  { code: 'TB', name: 'Tampa Bay Buccaneers' },
  { code: 'TEN', name: 'Tennessee Titans' },
  { code: 'WAS', name: 'Washington Commanders' },
];
