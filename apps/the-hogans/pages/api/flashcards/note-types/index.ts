import { createNoteType, getNoteType, listNoteTypes } from '../../../../lib/server/flashcards/notes';
import { bodyOf, flashcardsRoute, str } from '../../../../lib/server/flashcards/route';
import { NoteType } from '../../../../components/flashcards/types';

export default flashcardsRoute({
  GET: async ({ owner }) => listNoteTypes(owner),
  // Either a full note type, or { cloneFrom, name } to copy one (Anki's "Add: Clone").
  POST: async ({ req, owner }) => {
    const body = bodyOf<NoteType & { cloneFrom: string }>(req);
    const name = str(body.name, 'name');
    if (body.cloneFrom) {
      const source = await getNoteType(owner, body.cloneFrom);
      return createNoteType(owner, { ...source, name });
    }
    return createNoteType(owner, {
      name,
      kind: body.kind === 'cloze' ? 'cloze' : 'standard',
      fields: body.fields ?? [],
      templates: body.templates ?? [],
      css: body.css ?? '',
      sortField: Number(body.sortField ?? 0),
    });
  },
});
