// The reviewer's in-browser queue for one sitting. The server hands over
// today's cards; this decides the order: learning cards as soon as they're
// due, then reviews with new cards spread evenly through them, as in Anki.
import { CardBundle } from './types';

/** Learning cards may be shown this early when nothing else is left (Anki's default). */
export const LEARN_AHEAD_MS = 20 * 60 * 1000;

export interface SessionQueue {
  learning: CardBundle[];
  main: CardBundle[];
}

export function buildSession(cards: CardBundle[], cram: boolean): SessionQueue {
  if (cram) return { learning: [], main: cards.slice() };
  const learning = cards
    .filter((b) => b.card.state === 1 || b.card.state === 3)
    .sort((a, b) => a.card.due.localeCompare(b.card.due));
  const reviews = cards.filter((b) => b.card.state === 2);
  const fresh = cards.filter((b) => b.card.state === 0);
  return { learning, main: interleave(reviews, fresh) };
}

/** Spreads `b` evenly through `a`. */
export function interleave<T>(a: T[], b: T[]): T[] {
  if (!b.length) return a.slice();
  if (!a.length) return b.slice();
  const out: T[] = [];
  const every = (a.length + b.length) / b.length;
  let ai = 0;
  let bi = 0;
  for (let i = 0; i < a.length + b.length; i++) {
    const wantB = bi < b.length && (ai >= a.length || Math.floor((i + 1) / every) > bi);
    if (wantB) out.push(b[bi++]);
    else out.push(a[ai++]);
  }
  return out;
}

export type Next =
  | { kind: 'card'; bundle: CardBundle; queue: SessionQueue }
  | { kind: 'wait'; until: number }
  | { kind: 'done' };

/** Takes the next card to show, without changing `q`. */
export function nextCard(q: SessionQueue, now: number): Next {
  const [firstLearn, ...restLearn] = q.learning;
  if (firstLearn && Date.parse(firstLearn.card.due) <= now) {
    return { kind: 'card', bundle: firstLearn, queue: { learning: restLearn, main: q.main } };
  }
  const [firstMain, ...restMain] = q.main;
  if (firstMain) return { kind: 'card', bundle: firstMain, queue: { learning: q.learning, main: restMain } };
  if (firstLearn) {
    const due = Date.parse(firstLearn.card.due);
    if (due <= now + LEARN_AHEAD_MS) {
      return { kind: 'card', bundle: firstLearn, queue: { learning: restLearn, main: q.main } };
    }
    return { kind: 'wait', until: due };
  }
  return { kind: 'done' };
}

export function addLearning(q: SessionQueue, bundle: CardBundle): SessionQueue {
  const learning = [...q.learning, bundle].sort((a, b) => a.card.due.localeCompare(b.card.due));
  return { learning, main: q.main };
}

/** Removes cards (buried siblings, deleted notes) from the sitting. */
export function without(q: SessionQueue, drop: (b: CardBundle) => boolean): SessionQueue {
  return { learning: q.learning.filter((b) => !drop(b)), main: q.main.filter((b) => !drop(b)) };
}

export function counts(q: SessionQueue, current: CardBundle | null) {
  const all = current ? [current, ...q.learning, ...q.main] : [...q.learning, ...q.main];
  let newCount = 0;
  let learnCount = 0;
  let reviewCount = 0;
  for (const b of all) {
    if (b.card.state === 0) newCount++;
    else if (b.card.state === 2) reviewCount++;
    else learnCount++;
  }
  return { newCount, learnCount, reviewCount };
}
