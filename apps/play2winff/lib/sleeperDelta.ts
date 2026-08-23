// Sleeper Delta: how much later (or earlier) Sleeper's default ADP ranks a
// player vs. your own board. Positive = value steal (Sleeper ranks them
// later, safe to wait); negative = overdraft trap (Sleeper ranks them
// earlier than you do).

export function draftPosition(
  rank: number,
  teams: number
): { round: number; pick: number } {
  const size = Math.max(1, teams);
  const round = Math.floor((rank - 1) / size) + 1;
  const pick = ((rank - 1) % size) + 1;
  return { round, pick };
}

export function formatPick(rank: number, teams: number): string {
  const { round, pick } = draftPosition(rank, teams);
  return `${round}.${String(pick).padStart(2, '0')}`;
}

export type DeltaTier =
  | 'steal-big'
  | 'steal-med'
  | 'steal-small'
  | 'fair'
  | 'overdraft';

// Thresholds are expressed in rounds-to-wait rather than the raw pick delta,
// so they scale correctly across leagues of different sizes (a 30-pick delta
// is 3 rounds in a 10-team league but only 2 rounds in a 15-team one).
export function sleeperDeltaTier(roundsToWait: number): DeltaTier {
  if (roundsToWait >= 3) return 'steal-big';
  if (roundsToWait >= 2) return 'steal-med';
  if (roundsToWait >= 1) return 'steal-small';
  if (roundsToWait >= 0) return 'fair';
  return 'overdraft';
}

// Full literal Tailwind classes (not template-built) so the JIT scanner
// finds them — same constraint as lib/riskColors.ts.
export const DELTA_TIER_CLASSES: Record<DeltaTier, string> = {
  'steal-big': 'bg-emerald-500 text-black font-bold',
  'steal-med': 'bg-amber-400 text-black font-semibold',
  'steal-small': 'bg-yellow-200 text-yellow-900',
  fair: 'bg-disabled-color text-text-color opacity-70',
  overdraft: 'bg-rose-900/40 text-rose-300 border border-rose-700',
};

// Subtler tints for washing an entire row (vs. the bold pill colors above),
// so body text and the other per-row controls stay legible on top of them.
// `fair` gets no tint — reserve color for rows worth a second look.
export const DELTA_TIER_ROW_CLASSES: Record<DeltaTier, string> = {
  'steal-big': 'bg-emerald-500/20',
  'steal-med': 'bg-amber-400/15',
  'steal-small': 'bg-yellow-200/10',
  fair: '',
  overdraft: 'bg-rose-500/15',
};

// Row-tint class for a player, or '' if they have no Sleeper ADP data (in
// which case the caller should fall back to the table's normal row color).
export function sleeperRowTint(
  yourRank: number,
  sleeperRank: number | null,
  teams: number,
  currentPick: number
): string {
  if (sleeperRank == null) return '';
  const { tier } = sleeperDelta(yourRank, sleeperRank, teams, currentPick);
  return DELTA_TIER_ROW_CLASSES[tier];
}

// Labels for the two very different situations that can produce the same
// tier: a forward-looking prediction ("wait, they'll still be there") vs.
// confirmed history ("they already outlasted their ADP — this proved out").
export function deltaLabel(
  tier: DeltaTier,
  rounds: number,
  pastAdp: boolean
): string {
  if (pastAdp) {
    return tier === 'fair'
      ? 'Fell Past ADP'
      : `Fell ${rounds}+ Rd${rounds === 1 ? '' : 's'} Past ADP`;
  }
  switch (tier) {
    case 'steal-big':
      return `Wait ${rounds}+ Rds`;
    case 'steal-med':
      return `Wait ${rounds} Rds`;
    case 'steal-small':
      return `Wait ${rounds} Rd`;
    case 'fair':
      return 'Fair Value';
    case 'overdraft':
    default:
      return 'Overdraft';
  }
}

// `currentPick` is the live "on the clock" overall pick number (1 at the
// start of the draft, incrementing with every pick made by anyone). Until
// the draft catches up to a player's own rank, this compares against their
// preseason rank as before; once picks have passed that rank without them
// being drafted, the comparison point shifts to "right now" so the badge
// counts down in real time against the actual board instead of a number
// frozen at draft-day-minus-one.
//
// Once live picks pass a player's *Sleeper* ADP and they're still on the
// board, that's confirmed evidence the real draft disagrees with Sleeper —
// not a worsening overdraft. Flip the comparison at that point so the badge
// grows as a bigger steal the longer they keep falling, instead of an
// ever-more-alarming "overdraft" warning for a prediction that already
// didn't happen.
export function sleeperDelta(
  yourRank: number,
  sleeperRank: number,
  teams: number,
  currentPick = 1
): { delta: number; roundsToWait: number; tier: DeltaTier; pastAdp: boolean } {
  const size = Math.max(1, teams);

  if (currentPick > sleeperRank) {
    const delta = currentPick - sleeperRank;
    const roundsToWait = Math.floor(delta / size);
    return {
      delta,
      roundsToWait,
      tier: sleeperDeltaTier(roundsToWait),
      pastAdp: true,
    };
  }

  const referenceRank = Math.max(yourRank, currentPick);
  const delta = sleeperRank - referenceRank;
  const roundsToWait = Math.floor(delta / size);
  return {
    delta,
    roundsToWait,
    tier: sleeperDeltaTier(roundsToWait),
    pastAdp: false,
  };
}
