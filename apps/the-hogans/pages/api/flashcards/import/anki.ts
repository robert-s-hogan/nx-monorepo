import { AnkiNote, AnkiNoteType, DupeMode, importAnkiBatch } from '../../../../lib/server/flashcards/importer';
import { bodyOf, flashcardsRoute, HttpError } from '../../../../lib/server/flashcards/route';

// One batch of notes read out of an .apkg in the browser (see
// components/flashcards/apkg.ts). Media is uploaded separately first.
export const config = { api: { bodyParser: { sizeLimit: '4mb' } } };

export default flashcardsRoute({
  POST: async ({ req, owner }) => {
    const body = bodyOf<{
      noteTypes: AnkiNoteType[];
      notes: AnkiNote[];
      dupes: DupeMode;
      withScheduling: boolean;
    }>(req);
    if (!Array.isArray(body.noteTypes) || !Array.isArray(body.notes)) {
      throw new HttpError(400, 'Expected noteTypes and notes');
    }
    return importAnkiBatch(owner, {
      noteTypes: body.noteTypes,
      notes: body.notes,
      dupes: body.dupes === 'skip' || body.dupes === 'add' ? body.dupes : 'update',
      withScheduling: body.withScheduling !== false,
    });
  },
});
