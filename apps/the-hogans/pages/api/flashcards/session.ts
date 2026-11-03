import { bootstrap } from '../../../lib/server/flashcards/notes';
import { mediaToken } from '../../../lib/server/flashcards/media';
import { flashcardsRoute } from '../../../lib/server/flashcards/route';

// First call on every /flashcards page: sets a new person up with the stock
// note types and sample deck, and returns the media URL signature.
export default flashcardsRoute({
  GET: async ({ owner }) => {
    await bootstrap(owner);
    return { email: owner, mediaToken: mediaToken(owner) };
  },
});
