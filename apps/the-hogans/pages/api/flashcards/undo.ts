import { restore } from '../../../lib/server/flashcards/cards';
import { bodyOf, flashcardsRoute, HttpError } from '../../../lib/server/flashcards/route';
import { CardSnapshot } from '../../../components/flashcards/types';

// Puts a card back the way it was before the last answer or card action.
export default flashcardsRoute({
  POST: async ({ req, owner }) => {
    const body = bodyOf<{ snapshot: CardSnapshot; reviewId: string; unbury: string[]; leech: boolean }>(req);
    if (!body.snapshot?.id) throw new HttpError(400, 'snapshot is required');
    return restore(owner, {
      snapshot: body.snapshot,
      reviewId: typeof body.reviewId === 'string' ? body.reviewId : undefined,
      unbury: Array.isArray(body.unbury) ? body.unbury.map(String) : undefined,
      leech: !!body.leech,
    });
  },
});
