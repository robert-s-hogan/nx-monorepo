import { searchCards } from '../../../lib/server/flashcards/cards';
import { dayStartFrom, flashcardsRoute, queryString } from '../../../lib/server/flashcards/route';

// The card browser: Anki search syntax in ?q=, sorted and paged.
export default flashcardsRoute({
  GET: async ({ req, owner }) =>
    searchCards(owner, {
      query: queryString(req, 'q') ?? '',
      sort: queryString(req, 'sort') ?? 'sort',
      desc: queryString(req, 'desc') === '1',
      limit: Number(queryString(req, 'limit') ?? 100),
      offset: Number(queryString(req, 'offset') ?? 0),
      dayStart: dayStartFrom(req),
    }),
});
