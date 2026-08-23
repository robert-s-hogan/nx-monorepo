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
