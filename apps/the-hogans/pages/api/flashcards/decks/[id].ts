import {
  addExtraToday,
  deleteDeck,
  getDeck,
  renameDeck,
  todayKey,
  updateDeckOptions,
} from '../../../../lib/server/flashcards/decks';
import {
  bodyOf,
  dayStartFrom,
  flashcardsRoute,
  queryString,
} from '../../../../lib/server/flashcards/route';
import { DeckOptions } from '../../../../components/flashcards/types';

export default flashcardsRoute({
  GET: async ({ req, owner }) => getDeck(owner, queryString(req, 'id') ?? ''),
  PATCH: async ({ req, owner }) => {
    const id = queryString(req, 'id') ?? '';
    const body = bodyOf<{
      name: string;
      options: Partial<DeckOptions>;
      applyToSubdecks: boolean;
      extra: { newCards?: number; reviews?: number };
    }>(req);
    if (typeof body.name === 'string') await renameDeck(owner, id, body.name);
    if (body.options) await updateDeckOptions(owner, id, body.options, !!body.applyToSubdecks);
    if (body.extra) await addExtraToday(owner, id, todayKey(dayStartFrom(req)), body.extra);
    return getDeck(owner, id);
  },
  DELETE: async ({ req, owner }) => {
    await deleteDeck(owner, queryString(req, 'id') ?? '');
  },
});
