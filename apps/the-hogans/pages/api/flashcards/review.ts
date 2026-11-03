import { review } from '../../../lib/server/flashcards/cards';
import { bodyOf, dayStartFrom, flashcardsRoute, HttpError, str } from '../../../lib/server/flashcards/route';
import { Grade } from '../../../components/flashcards/scheduler';

export default flashcardsRoute({
  POST: async ({ req, owner }) => {
    const body = bodyOf<{ cardId: string; rating: number; cram: boolean; durationMs: number }>(req);
    const rating = Number(body.rating);
    if (![1, 2, 3, 4].includes(rating)) throw new HttpError(400, 'rating must be 1-4');
    return review(owner, {
      cardId: str(body.cardId, 'cardId'),
      rating: rating as Grade,
      cram: !!body.cram,
      durationMs: Number(body.durationMs) || 0,
      dayStart: dayStartFrom(req),
    });
  },
});
