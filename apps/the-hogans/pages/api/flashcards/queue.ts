import { deckQueue, searchQueue } from '../../../lib/server/flashcards/cards';
import { dayStartFrom, flashcardsRoute, HttpError, queryString } from '../../../lib/server/flashcards/route';

// ?deck=<id> for a normal session within the deck's daily limits, or
// ?q=<search>&limit=N for a custom study session.
export default flashcardsRoute({
  GET: async ({ req, owner }) => {
    const dayStart = dayStartFrom(req);
    const deck = queryString(req, 'deck');
    if (deck) return deckQueue(owner, deck, dayStart, new Date());
    const q = queryString(req, 'q');
    if (q !== undefined) {
      return searchQueue(owner, q, Number(queryString(req, 'limit') ?? 100), dayStart, new Date());
    }
    throw new HttpError(400, 'Pass deck or q');
  },
});
