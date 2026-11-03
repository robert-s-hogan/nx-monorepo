import { createNote } from '../../../../lib/server/flashcards/notes';
import { getDeck } from '../../../../lib/server/flashcards/decks';
import { bodyOf, flashcardsRoute, str, strArray } from '../../../../lib/server/flashcards/route';

export default flashcardsRoute({
  POST: async ({ req, owner }) => {
    const body = bodyOf<{ noteTypeId: string; deckId: string; fields: string[]; tags: string[] }>(req);
    const deckId = str(body.deckId, 'deckId');
    await getDeck(owner, deckId);
    return createNote(owner, {
      noteTypeId: str(body.noteTypeId, 'noteTypeId'),
      deckId,
      fields: strArray(body.fields, 'fields'),
      tags: body.tags ? strArray(body.tags, 'tags') : [],
    });
  },
});
