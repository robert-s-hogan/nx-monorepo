import { bulk, searchCardIds } from '../../../lib/server/flashcards/cards';
import { bodyOf, dayStartFrom, flashcardsRoute, HttpError } from '../../../lib/server/flashcards/route';
import { BulkAction } from '../../../components/flashcards/types';

// Browser bulk actions on picked cards ({cardIds}) or a whole search ({query}).
export default flashcardsRoute({
  POST: async ({ req, owner }) => {
    const body = bodyOf<{ cardIds: string[]; query: string } & { op: BulkAction }>(req);
    if (!body.op?.action) throw new HttpError(400, 'op is required');
    const dayStart = dayStartFrom(req);
    const ids = Array.isArray(body.cardIds)
      ? body.cardIds.map(String)
      : typeof body.query === 'string'
        ? await searchCardIds(owner, body.query, dayStart)
        : [];
    await bulk(owner, ids, body.op, dayStart);
    return { count: ids.length };
  },
});
