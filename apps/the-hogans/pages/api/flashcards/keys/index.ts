import { createKey, listKeys } from '../../../../lib/server/flashcards/keys';
import { bodyOf, flashcardsRoute, str } from '../../../../lib/server/flashcards/route';

// Managing keys needs a real sign-in; a key can't make more keys.
export default flashcardsRoute(
  {
    GET: async ({ owner }) => listKeys(owner),
    POST: async ({ req, owner }) => createKey(owner, str(bodyOf<{ label: string }>(req).label, 'label')),
  },
  { allowApiKey: false },
);
