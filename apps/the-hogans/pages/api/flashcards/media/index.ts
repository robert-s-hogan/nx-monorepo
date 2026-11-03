import {
  deleteUnusedMedia,
  listMedia,
  MAX_MEDIA_BYTES,
  saveMedia,
} from '../../../../lib/server/flashcards/media';
import {
  flashcardsRoute,
  HttpError,
  queryString,
  readRawBody,
} from '../../../../lib/server/flashcards/route';

// The file is the raw request body, named by ?name=
//   curl -X POST -H "Authorization: Bearer hfc_…" --data-binary @dog.jpg \
//     "https://www.the-hogans.com/api/flashcards/media?name=dog.jpg"
export const config = { api: { bodyParser: false } };

export default flashcardsRoute({
  GET: async ({ owner }) => listMedia(owner),
  POST: async ({ req, owner }) => {
    const name = queryString(req, 'name');
    if (!name) throw new HttpError(400, 'Pass the file name as ?name=');
    const data = await readRawBody(req, MAX_MEDIA_BYTES);
    return { name: await saveMedia(owner, name, data) };
  },
  // Anki's Check Media: removes files no note uses.
  DELETE: async ({ owner }) => ({ deleted: await deleteUnusedMedia(owner) }),
});
