import { deleteNoteType, updateNoteType } from '../../../../lib/server/flashcards/notes';
import { bodyOf, flashcardsRoute, HttpError, queryString } from '../../../../lib/server/flashcards/route';
import { NoteType } from '../../../../components/flashcards/types';

export default flashcardsRoute({
  PATCH: async ({ req, owner }) => {
    const body = bodyOf<{
      noteType: NoteType;
      fieldMap: (number | null)[];
      templateMap: (number | null)[];
    }>(req);
    const t = body.noteType;
    if (!t || !Array.isArray(body.fieldMap) || !Array.isArray(body.templateMap)) {
      throw new HttpError(400, 'Expected noteType, fieldMap and templateMap');
    }
    return updateNoteType(
      owner,
      queryString(req, 'id') ?? '',
      {
        name: String(t.name ?? ''),
        kind: t.kind,
        fields: (t.fields ?? []).map(String),
        templates: (t.templates ?? []).map((x) => ({
          name: String(x.name ?? ''),
          front: String(x.front ?? ''),
          back: String(x.back ?? ''),
        })),
        css: String(t.css ?? ''),
        sortField: Number(t.sortField ?? 0),
      },
      body.fieldMap,
      body.templateMap,
    );
  },
  DELETE: async ({ req, owner }) => {
    await deleteNoteType(owner, queryString(req, 'id') ?? '');
  },
});
