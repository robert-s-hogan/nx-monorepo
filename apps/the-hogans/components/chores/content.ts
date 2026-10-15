// Chart content for pages/chores.tsx, ported from the original printable
// "Theodore's Chores" artifact. These are the defaults; edits made on the
// page are saved in the browser (see pages/chores.tsx) and "Reset" comes
// back here.

export type SectionId = 'daily' | 'bigger' | 'initiative' | 'beyond';

export interface Chore {
  id: string;
  section: SectionId;
  emoji: string;
  name: string;
  /** Pay per check mark (or per tally, for above-and-beyond), in cents. */
  cents: number;
}

export interface ChartState {
  chores: Chore[];
  /** Bonus for checking a daily chore all seven days, in cents. */
  streakBonus: number;
}

export const SECTIONS: { id: SectionId; title: string; note: string }[] = [
  { id: 'daily', title: 'Every day', note: 'all seven days earns the streak' },
  { id: 'bigger', title: 'Bigger jobs', note: 'as needed, not every day' },
  { id: 'initiative', title: 'Start it yourself', note: 'nobody had to ask' },
  { id: 'beyond', title: 'Above and beyond', note: 'one tally mark each time' },
];

export const DAYS = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

const DEFAULT_CHORES: Omit<Chore, 'id'>[] = [
  { section: 'daily', emoji: '📬', name: 'Mail', cents: 5 },
  { section: 'daily', emoji: '🍽️', name: 'Clear the dinner table', cents: 5 },
  { section: 'daily', emoji: '🛏️', name: 'Make bed', cents: 5 },
  { section: 'daily', emoji: '🖥️', name: 'Clean desk', cents: 5 },
  { section: 'daily', emoji: '🐱', name: 'Feed Rupert', cents: 5 },
  { section: 'daily', emoji: '🧼', name: 'Dishes', cents: 5 },
  { section: 'daily', emoji: '🗑️', name: 'Garbage', cents: 5 },
  { section: 'daily', emoji: '🤝', name: 'How can I help?', cents: 5 },
  { section: 'bigger', emoji: '🧺', name: 'Laundry', cents: 25 },
  { section: 'bigger', emoji: '🌀', name: 'Vacuum', cents: 50 },
  { section: 'bigger', emoji: '🐕', name: 'Take the dogs out to potty', cents: 25 },
  { section: 'bigger', emoji: '🦮', name: 'Walk the dogs', cents: 25 },
  { section: 'initiative', emoji: '🏃', name: 'Be active', cents: 25 },
  { section: 'initiative', emoji: '📚', name: 'Finish homework', cents: 25 },
  { section: 'beyond', emoji: '🏅', name: 'Went above and beyond', cents: 25 },
];

export const defaultState = (): ChartState => ({
  chores: DEFAULT_CHORES.map((c, i) => ({ ...c, id: `c${i}` })),
  streakBonus: 25,
});

export const newChoreId = () =>
  `c${Date.now().toString(36)}${Math.random().toString(36).slice(2, 6)}`;

/** 5 → "5¢", 150 → "$1.50" */
export const formatCents = (cents: number) =>
  cents >= 100 ? `$${(cents / 100).toFixed(2)}` : `${cents}¢`;
