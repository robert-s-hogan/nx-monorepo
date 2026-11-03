import { studyStats } from '../../../../lib/server/flashcards/cards';
import { decksWithCounts, ensureDeck } from '../../../../lib/server/flashcards/decks';
import { bodyOf, dayStartFrom, flashcardsRoute, str } from '../../../../lib/server/flashcards/route';

export default flashcardsRoute({
  GET: async ({ req, owner }) => {
    const dayStart = dayStartFrom(req);
    const [decks, stats] = await Promise.all([
      decksWithCounts(owner, dayStart, new Date()),
      studyStats(owner, dayStart),
    ]);
    return { decks, stats };
  },
  POST: async ({ req, owner }) => {
    const body = bodyOf<{ name: string }>(req);
    return { id: await ensureDeck(owner, str(body.name, 'name')) };
  },
});
