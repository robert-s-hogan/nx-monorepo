// Shapes shared by the /flashcards pages and pages/api/flashcards. They
// follow Anki's model: a note holds the fields, its note type's templates
// turn it into one or more cards, and each card is scheduled on its own.

export const DAY_MS = 86400000;

/** Deck names nest with `::`, as in Anki (`Spanish::Verbs`). */
export const DECK_SEP = '::';

export interface DeckOptions {
  newPerDay: number;
  reviewsPerDay: number;
  /** ts-fsrs step strings such as `1m`, `10m`, `1d`. */
  learningSteps: string[];
  relearningSteps: string[];
  desiredRetention: number;
  maxIntervalDays: number;
  newOrder: 'added' | 'random';
  leechThreshold: number;
  leechAction: 'suspend' | 'tag';
  /** Hide a card's siblings until tomorrow once one of them is answered. */
  burySiblings: boolean;
  autoplayAudio: boolean;
}

export const defaultDeckOptions = (): DeckOptions => ({
  newPerDay: 20,
  reviewsPerDay: 200,
  learningSteps: ['1m', '10m'],
  relearningSteps: ['10m'],
  desiredRetention: 0.9,
  maxIntervalDays: 36500,
  newOrder: 'added',
  leechThreshold: 8,
  leechAction: 'tag',
  burySiblings: false,
  autoplayAudio: true,
});

export interface Deck {
  id: string;
  name: string;
  options: DeckOptions;
  /** Custom study's "increase today's limit", only for `date`. */
  extra: { date: string; newCards: number; reviews: number } | null;
  createdAt: string;
}

export interface DeckCounts {
  newCount: number;
  learnCount: number;
  reviewCount: number;
  total: number;
}

export type DeckWithCounts = Deck & DeckCounts;

export interface NoteTemplate {
  name: string;
  front: string;
  back: string;
}

export interface NoteType {
  id: string;
  name: string;
  kind: 'standard' | 'cloze';
  fields: string[];
  templates: NoteTemplate[];
  css: string;
  /** Index of the field shown in the browser's Sort Field column. */
  sortField: number;
}

export interface Note {
  id: string;
  noteTypeId: string;
  /** Lined up with the note type's `fields`. HTML. */
  fields: string[];
  tags: string[];
  createdAt: string;
  updatedAt: string;
}

/** ts-fsrs State: 0 new, 1 learning, 2 review, 3 relearning. */
export type CardState = 0 | 1 | 2 | 3;

export interface CardSchedule {
  due: string;
  stability: number;
  difficulty: number;
  elapsedDays: number;
  scheduledDays: number;
  learningSteps: number;
  reps: number;
  lapses: number;
  state: CardState;
  lastReview: string | null;
}

export interface Card extends CardSchedule {
  id: string;
  noteId: string;
  deckId: string;
  /** Template index, or cloze number minus one for cloze notes. */
  ord: number;
  suspended: boolean;
  /** Hidden until this time (bury). */
  buriedUntil: string | null;
  /** 0 none, 1–7 Anki's flag colors. */
  flag: number;
  createdAt: string;
}

/** What can be put back by undo. */
export type CardSnapshot = CardSchedule &
  Pick<Card, 'id' | 'suspended' | 'buriedUntil' | 'flag'>;

export const FLAGS = [
  { id: 1, name: 'Red', color: '#d4473f' },
  { id: 2, name: 'Orange', color: '#e38a1e' },
  { id: 3, name: 'Green', color: '#2f9a54' },
  { id: 4, name: 'Blue', color: '#2c6fd6' },
  { id: 5, name: 'Pink', color: '#d256a8' },
  { id: 6, name: 'Turquoise', color: '#1fa5a5' },
  { id: 7, name: 'Purple', color: '#7c4dcc' },
] as const;

/** A card plus what it takes to render it: its note, note type and deck. */
export interface CardBundle {
  card: Card;
  note: Note;
  deckName: string;
}

export interface QueueResponse {
  cards: CardBundle[];
  noteTypes: NoteType[];
  options: DeckOptions;
  /** Left today after the limits, for the counts above the card. */
  counts: { newCount: number; learnCount: number; reviewCount: number };
}

export interface ReviewResponse {
  card: Card;
  snapshot: CardSnapshot;
  reviewId: string;
  /** Set when this answer made the card a leech. */
  leech: 'tagged' | 'suspended' | null;
  /** Siblings hidden until tomorrow by `burySiblings`. */
  buried: string[];
}

export interface BrowserRow {
  card: Card;
  note: Note;
  deckName: string;
  noteTypeName: string;
  sortField: string;
}

export type BulkAction =
  | { action: 'move'; deckId: string }
  | { action: 'addTags'; tags: string[] }
  | { action: 'removeTags'; tags: string[] }
  | { action: 'suspend' }
  | { action: 'unsuspend' }
  | { action: 'bury' }
  | { action: 'unbury' }
  | { action: 'flag'; flag: number }
  | { action: 'forget' }
  | { action: 'deleteNotes' };

export interface ImportSummary {
  added: number;
  updated: number;
  skipped: number;
  cards: number;
  /** Row-level problems, capped so a bad file doesn't flood the response. */
  errors: string[];
  deckId?: string;
}

export type DupeMode = 'update' | 'skip' | 'add';

/** A note type read out of an Anki package (components/flashcards/apkg.ts). */
export interface AnkiNoteType {
  /** The package's own id for it, used to link notes in the same batch. */
  key: string;
  name: string;
  kind: 'standard' | 'cloze';
  fields: string[];
  templates: NoteTemplate[];
  css: string;
  sortField: number;
}

export interface AnkiNote {
  guid: string;
  typeKey: string;
  fields: string[];
  tags: string[];
  cards: { ord: number; deck: string; schedule: CardSchedule | null; suspended: boolean; flag: number }[];
}

export interface ApiKeyInfo {
  id: string;
  label: string;
  prefix: string;
  createdAt: string;
  lastUsedAt: string | null;
}

export const isParentDeck = (parent: string, child: string) =>
  child.startsWith(parent + DECK_SEP);

export const splitTags = (s: string) =>
  s
    .split(/[\s,]+/)
    .map((t) => t.trim())
    .filter(Boolean);
