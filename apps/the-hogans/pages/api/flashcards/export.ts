import { getDb } from '../../../lib/server/db';
import { compileSearch } from '../../../lib/server/flashcards/search';
import { dayStartFrom, flashcardsRoute, queryString } from '../../../lib/server/flashcards/route';
import { getDeck } from '../../../lib/server/flashcards/decks';
import { parseTags } from '../../../lib/server/flashcards/rows';
import { toCsv } from '../../../components/flashcards/csv';

// Anki-compatible CSV of the notes in a deck (?deck=<id>) or a search (?q=).
export default flashcardsRoute({
  GET: async ({ req, res, owner }) => {
    const deckId = queryString(req, 'deck');
    let query = queryString(req, 'q') ?? '';
    let filename = 'flashcards';
    if (deckId) {
      const deck = await getDeck(owner, deckId);
      query = `deck:"${deck.name}"`;
      filename = deck.name.replace(/[^\w-]+/g, '-');
    }
    const where = compileSearch(query, { now: new Date(), dayStart: dayStartFrom(req) });
    const result = await getDb().execute({
      sql: `SELECT n.fields, n.tags, t.name AS type_name, MIN(d.name) AS deck_name
            FROM fc_cards c
            JOIN fc_notes n ON n.id = c.note_id
            JOIN fc_decks d ON d.id = c.deck_id
            JOIN fc_note_types t ON t.id = n.note_type_id
            WHERE c.owner = ? AND ${where.sql}
            GROUP BY n.id ORDER BY n.created_at`,
      args: [owner, ...where.args],
    });
    const csv = toCsv(
      result.rows.map((r) => ({
        noteType: r.type_name as string,
        deck: r.deck_name as string,
        tags: parseTags(r.tags),
        fields: JSON.parse(r.fields as string) as string[],
      })),
    );
    res.setHeader('Content-Type', 'text/csv; charset=utf-8');
    res.setHeader('Content-Disposition', `attachment; filename="${filename}.csv"`);
    res.status(200).send(csv);
  },
});
