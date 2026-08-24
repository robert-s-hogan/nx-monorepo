// Fixed icon palette for user-created custom tags. Curated on purpose (not
// free-text icon names) — keeps tag creation to a simple grid pick and
// avoids dynamic-import/typo risk. `custom_tags.icon` stores one of these
// keys.
import {
  FiStar,
  FiFlag,
  FiHeart,
  FiAlertTriangle,
  FiAlertCircle,
  FiTrendingUp,
  FiTrendingDown,
  FiMoon,
  FiVideo,
  FiFilm,
  FiGift,
  FiBriefcase,
  FiZap,
  FiShield,
  FiEye,
  FiClock,
  FiTarget,
  FiUsers,
  FiThumbsUp,
  FiThumbsDown,
  FiAward,
  FiHelpCircle,
  FiSlash,
} from 'react-icons/fi';
// Deliberate exceptions to the all-Feather palette — Feather has nothing
// for "swing player", "gross/sick", "superhero", or "bust", so these pull
// from Game Icons instead. Visibly a different, more detailed style than
// the rest of the grid, but the closest real match for what they represent.
// (Tried GiPendulumSwing for "swing" first — too easy to mistake for a
// clock/gauge at a glance — GiTreeSwing reads immediately as an actual
// swing. GiStoneBust is a literal pun on "bust" the same way GiCape is for
// "hero".)
import { GiTreeSwing, GiVomiting, GiCape, GiStoneBust } from 'react-icons/gi';
import type { IconType } from 'react-icons';

export const TAG_ICONS: Record<string, IconType> = {
  star: FiStar,
  flag: FiFlag,
  heart: FiHeart,
  'alert-triangle': FiAlertTriangle,
  'alert-circle': FiAlertCircle,
  'trending-up': FiTrendingUp,
  'trending-down': FiTrendingDown,
  moon: FiMoon,
  video: FiVideo,
  film: FiFilm,
  gift: FiGift,
  briefcase: FiBriefcase,
  zap: FiZap,
  shield: FiShield,
  eye: FiEye,
  clock: FiClock,
  target: FiTarget,
  users: FiUsers,
  'thumbs-up': FiThumbsUp,
  'thumbs-down': FiThumbsDown,
  award: FiAward,
  help: FiHelpCircle,
  slash: FiSlash,
  'tree-swing': GiTreeSwing,
  vomiting: GiVomiting,
  cape: GiCape,
  bust: GiStoneBust,
};

export const TAG_ICON_KEYS = Object.keys(TAG_ICONS);

// Auto-assigned at tag creation, cycling by existing tag count — keeps tag
// creation to just "name + icon" without also asking the user to pick a
// color. Full literal class names (not template-built) so Tailwind's JIT
// scanner can find them.
const TAG_COLOR_PALETTE = [
  'text-indigo-500',
  'text-emerald-600',
  'text-sky-600',
  'text-amber-600',
  'text-rose-500',
  'text-violet-500',
  'text-cyan-600',
  'text-orange-500',
] as const;

export function nextTagColor(existingTagCount: number): string {
  return TAG_COLOR_PALETTE[existingTagCount % TAG_COLOR_PALETTE.length];
}
