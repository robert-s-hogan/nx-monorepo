import { importCsv, DupeMode } from '../../../../lib/server/flashcards/importer';
import {
  flashcardsRoute,
  queryString,
  readRawBody,
} from '../../../../lib/server/flashcards/route';
import { splitTags } from '../../../../components/flashcards/types';

// Mass upload of an Anki-format CSV. The raw file is the request body:
//   curl -X POST -H "Authorization: Bearer hfc_…" -H "Content-Type: text/csv" \
//     --data-binary @cards.csv \
//     "https://www.the-hogans.com/api/flashcards/import/csv?deck=Spanish::Verbs&noteType=Basic"
// Query options (all optional; #deck:/#notetype:/#tags: headers in the file work too):
//   deck=Name       deck to put cards in (created if missing; default "Default")
//   deckId=<id>     or an existing deck by id
//   noteType=Basic  note type by name or id (default Basic)
//   tags=a,b        tags added to every note
//   dupes=update|skip|add   what to do when the first field matches (default update)
export const config = { api: { bodyParser: false } };

const MAX_CSV_BYTES = 4 * 1024 * 1024;

export default flashcardsRoute({
  POST: async ({ req, owner }) => {
    const text = new TextDecoder().decode(await readRawBody(req, MAX_CSV_BYTES));
    const dupes = queryString(req, 'dupes');
    return importCsv(owner, text, {
      deck: queryString(req, 'deck'),
      deckId: queryString(req, 'deckId'),
      noteType: queryString(req, 'noteType'),
      tags: splitTags(queryString(req, 'tags') ?? ''),
      dupes: dupes === 'skip' || dupes === 'add' ? (dupes as DupeMode) : 'update',
    });
  },
});
