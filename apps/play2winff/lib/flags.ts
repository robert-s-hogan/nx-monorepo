// Draft-board tags. Four are plain on/off toggles; risk_factor carries a
// 1-10 rating instead, so it gets its own tier color/label helpers.
import { FiMoon, FiShuffle, FiVideo, FiHeart, FiThermometer } from 'react-icons/fi';
import type { IconType } from 'react-icons';

export const BOOLEAN_FLAGS = [
  'post_hype_sleeper',
  'swing_player',
  'film_room_zero',
  'andys_favorite',
] as const;

export type BooleanFlag = (typeof BOOLEAN_FLAGS)[number];
export type FlagType = BooleanFlag | 'risk_factor';

export const ALL_FLAG_TYPES: FlagType[] = ['risk_factor', ...BOOLEAN_FLAGS];

export type PlayerFlags = {
  risk_factor: number | null;
  post_hype_sleeper: boolean;
  swing_player: boolean;
  film_room_zero: boolean;
  andys_favorite: boolean;
};

export const emptyFlags = (): PlayerFlags => ({
  risk_factor: null,
  post_hype_sleeper: false,
  swing_player: false,
  film_room_zero: false,
  andys_favorite: false,
});

export const BOOLEAN_FLAG_META: Record<
  BooleanFlag,
  { label: string; icon: IconType; activeColor: string }
> = {
  post_hype_sleeper: {
    label: 'Post-Hype Sleeper',
    icon: FiMoon,
    activeColor: 'text-indigo-500',
  },
  swing_player: {
    label: 'Swing Player',
    icon: FiShuffle,
    activeColor: 'text-orange-500',
  },
  film_room_zero: {
    label: 'Film Room Zero',
    icon: FiVideo,
    activeColor: 'text-red-600',
  },
  andys_favorite: {
    label: "Andy's Favorite",
    icon: FiHeart,
    activeColor: 'text-pink-500',
  },
};

export const ALL_FLAG_META: Record<
  FlagType,
  { label: string; icon: IconType; activeColor: string }
> = {
  risk_factor: {
    label: 'Risk Factor',
    icon: FiThermometer,
    activeColor: 'text-amber-600',
  },
  ...BOOLEAN_FLAG_META,
};

export const RISK_ICON = FiThermometer;

// 1-3 low / 4-6 medium / 7+ high, same icon throughout, color signals tier.
export function riskTierColor(value: number | null): string {
  if (value == null) return 'text-slate-300';
  if (value <= 3) return 'text-green-600';
  if (value <= 6) return 'text-amber-500';
  return 'text-red-600';
}

export function riskTierLabel(value: number | null): string {
  if (value == null) return 'No risk rating';
  if (value <= 3) return `Low risk (${value})`;
  if (value <= 6) return `Medium risk (${value})`;
  return `High risk (${value})`;
}
