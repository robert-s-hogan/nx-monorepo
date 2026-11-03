// Thin wrapper over ts-fsrs, the FSRS implementation Anki itself uses.
// Runs on both sides: the API route is the one that records an answer, and
// the reviewer uses the same math to label the grade buttons.
import {
  createEmptyCard,
  fsrs,
  generatorParameters,
  Rating,
  State,
  type Card as FsrsCard,
  type FSRS,
  type Grade,
  type StepUnit,
} from 'ts-fsrs';

import { CardSchedule, CardState, DeckOptions } from './types';

export { Rating, State };
export type { Grade };

export const GRADES: { grade: Grade; label: string; key: string }[] = [
  { grade: Rating.Again, label: 'Again', key: '1' },
  { grade: Rating.Hard, label: 'Hard', key: '2' },
  { grade: Rating.Good, label: 'Good', key: '3' },
  { grade: Rating.Easy, label: 'Easy', key: '4' },
];

const STEP = /^\d+(\.\d+)?[mhd]$/;

/** Keeps only steps ts-fsrs understands (`30s` isn't one; `1m` is). */
export function cleanSteps(steps: string[]): StepUnit[] {
  return steps.map((s) => s.trim()).filter((s) => STEP.test(s)) as StepUnit[];
}

const schedulers = new Map<string, FSRS>();

function schedulerFor(o: DeckOptions): FSRS {
  const key = JSON.stringify([
    o.desiredRetention,
    o.maxIntervalDays,
    o.learningSteps,
    o.relearningSteps,
  ]);
  let s = schedulers.get(key);
  if (!s) {
    s = fsrs(
      generatorParameters({
        enable_fuzz: true,
        request_retention: Math.min(0.99, Math.max(0.7, o.desiredRetention)),
        maximum_interval: Math.max(1, o.maxIntervalDays),
        learning_steps: cleanSteps(o.learningSteps),
        relearning_steps: cleanSteps(o.relearningSteps),
      }),
    );
    schedulers.set(key, s);
  }
  return s;
}

export function newSchedule(now: Date): CardSchedule {
  return fromFsrs(createEmptyCard(now));
}

function toFsrs(s: CardSchedule): FsrsCard {
  return {
    due: new Date(s.due),
    stability: s.stability,
    difficulty: s.difficulty,
    elapsed_days: s.elapsedDays,
    scheduled_days: s.scheduledDays,
    learning_steps: s.learningSteps,
    reps: s.reps,
    lapses: s.lapses,
    state: s.state as State,
    last_review: s.lastReview ? new Date(s.lastReview) : undefined,
  };
}

function fromFsrs(c: FsrsCard): CardSchedule {
  return {
    due: c.due.toISOString(),
    stability: c.stability,
    difficulty: c.difficulty,
    elapsedDays: c.elapsed_days,
    scheduledDays: c.scheduled_days,
    learningSteps: c.learning_steps,
    reps: c.reps,
    lapses: c.lapses,
    state: c.state as CardState,
    lastReview: c.last_review ? c.last_review.toISOString() : null,
  };
}

export function answer(
  s: CardSchedule,
  rating: Grade,
  now: Date,
  options: DeckOptions,
): CardSchedule {
  return fromFsrs(schedulerFor(options).next(toFsrs(s), now, rating).card);
}

/** Back to a brand-new card, keeping the review counts like Anki's Forget. */
export function forget(s: CardSchedule, now: Date): CardSchedule {
  return { ...newSchedule(now), reps: s.reps, lapses: s.lapses };
}

/** Time until each grade would bring the card back, e.g. `{1: '1m', 3: '2d'}`. */
export function previewIntervals(
  s: CardSchedule,
  now: Date,
  options: DeckOptions,
): Record<Grade, string> {
  const preview = schedulerFor(options).repeat(toFsrs(s), now);
  const out = {} as Record<Grade, string>;
  for (const { grade: g } of GRADES) {
    out[g] = formatInterval(preview[g].card.due.getTime() - now.getTime());
  }
  return out;
}

/** Estimated chance of recall right now, 0 for cards never studied. */
export function retrievability(
  s: CardSchedule,
  now: Date,
  options: DeckOptions,
): number {
  if (s.state === State.New) return 0;
  return schedulerFor(options).get_retrievability(toFsrs(s), now, false);
}

export function formatInterval(ms: number): string {
  const min = Math.max(1, Math.round(ms / 60000));
  if (min < 60) return `${min}m`;
  const hr = min / 60;
  if (hr < 24) return `${Math.round(hr)}h`;
  const days = hr / 24;
  if (days < 30) return `${Math.round(days)}d`;
  const months = days / 30;
  if (months < 12) return `${Math.round(months * 10) / 10}mo`;
  return `${Math.round((days / 365) * 10) / 10}y`;
}

/**
 * Best guess at an FSRS state for a card imported with Anki's older SM-2
 * scheduling. Uses Anki's own FSRS memory state when the card has one.
 */
export function fromAnkiSm2(input: {
  type: number;
  ivlDays: number;
  factor: number;
  reps: number;
  lapses: number;
  due: Date;
  memory?: { s: number; d: number } | null;
  now: Date;
}): CardSchedule {
  const { now } = input;
  if (input.type === 0) return newSchedule(now);
  const state: CardState =
    input.type === 1 ? 1 : input.type === 3 ? 3 : 2;
  const ivl = Math.max(1, input.ivlDays);
  // SM-2 ease 130%–250%+ maps onto FSRS difficulty 10 (hard) to ~5.
  const difficulty =
    input.memory?.d ??
    Math.min(10, Math.max(1, 10 - ((input.factor || 2500) - 1300) / 240));
  const stability = input.memory?.s ?? ivl;
  const lastReview = new Date(input.due.getTime() - ivl * 86400000);
  return {
    due: input.due.toISOString(),
    stability,
    difficulty,
    elapsedDays: 0,
    scheduledDays: state === 2 ? ivl : 0,
    learningSteps: 0,
    reps: input.reps,
    lapses: input.lapses,
    state,
    lastReview: lastReview.toISOString(),
  };
}
