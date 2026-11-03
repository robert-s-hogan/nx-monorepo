import { updateCard } from '../../../../lib/server/flashcards/cards';
import { bodyOf, dayStartFrom, flashcardsRoute, queryString } from '../../../../lib/server/flashcards/route';

// Flag, suspend, bury or move one card (the reviewer's More menu).
export default flashcardsRoute({
  PATCH: async ({ req, owner }) => {
    const body = bodyOf<{ flag: number; suspended: boolean; buried: boolean; deckId: string }>(req);
    return updateCard(owner, queryString(req, 'id') ?? '', {
      flag: typeof body.flag === 'number' ? body.flag : undefined,
      suspended: typeof body.suspended === 'boolean' ? body.suspended : undefined,
      buried: typeof body.buried === 'boolean' ? body.buried : undefined,
      deckId: typeof body.deckId === 'string' ? body.deckId : undefined,
      dayStart: dayStartFrom(req),
    });
  },
});
