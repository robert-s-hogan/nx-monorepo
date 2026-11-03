import { getDb } from '../../../../lib/server/db';
import { deleteNotes, getNote, getNoteType, updateNote } from '../../../../lib/server/flashcards/notes';
import { bodyOf, flashcardsRoute, queryString, strArray } from '../../../../lib/server/flashcards/route';
import { CARD_COLUMNS, cardFromRow } from '../../../../lib/server/flashcards/rows';

export default flashcardsRoute({
  GET: async ({ req, owner }) => {
    const note = await getNote(owner, queryString(req, 'id') ?? '');
    const cards = await getDb().execute({
      sql: `SELECT ${CARD_COLUMNS} FROM fc_cards c WHERE c.owner = ? AND c.note_id = ? ORDER BY c.ord`,
      args: [owner, note.id],
    });
    return {
      note,
      noteType: await getNoteType(owner, note.noteTypeId),
      cards: cards.rows.map(cardFromRow),
    };
  },
  PATCH: async ({ req, owner }) => {
    const body = bodyOf<{ fields: string[]; tags: string[]; deckId: string }>(req);
    return updateNote(owner, queryString(req, 'id') ?? '', {
      fields: body.fields ? strArray(body.fields, 'fields') : undefined,
      tags: body.tags ? strArray(body.tags, 'tags') : undefined,
      deckId: typeof body.deckId === 'string' ? body.deckId : undefined,
    });
  },
  DELETE: async ({ req, owner }) => {
    await deleteNotes(owner, [queryString(req, 'id') ?? '']);
  },
});
