import { deleteKey } from '../../../../lib/server/flashcards/keys';
import { flashcardsRoute, queryString } from '../../../../lib/server/flashcards/route';

export default flashcardsRoute(
  {
    DELETE: async ({ req, owner }) => {
      await deleteKey(owner, queryString(req, 'id') ?? '');
    },
  },
  { allowApiKey: false },
);
