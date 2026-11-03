// Reads an Anki package (.apkg / .colpkg) in the browser: a zip holding a
// SQLite collection and numbered media files. Handles both the older
// format (collection.anki2/anki21, JSON media map) and the one current
// Anki writes by default (collection.anki21b and media zstd-compressed,
// note types and media list in protobuf). Parsing here instead of on the
// server keeps big packages clear of the upload size limit.
import { unzipSync } from 'fflate';
import { decompress as zstd } from 'fzstd';
import type { Database, SqlValue } from 'sql.js';

import { fromAnkiSm2 } from './scheduler';
import { AnkiNote, AnkiNoteType, DECK_SEP } from './types';

export interface AnkiPackage {
  noteTypes: AnkiNoteType[];
  notes: AnkiNote[];
  media: { name: string; data: Uint8Array }[];
  decks: string[];
}

const ZSTD_MAGIC = [0x28, 0xb5, 0x2f, 0xfd];
const isZstd = (b: Uint8Array) => ZSTD_MAGIC.every((m, i) => b[i] === m);
const maybeZstd = (b: Uint8Array) => (isZstd(b) ? zstd(b) : b);

// ---- tiny protobuf reader (only what Anki's configs need) -------------------

type ProtoFields = Map<number, (number | Uint8Array)[]>;

function readProto(buf: Uint8Array): ProtoFields {
  const out: ProtoFields = new Map();
  let i = 0;
  const varint = () => {
    let result = 0;
    let shift = 0;
    for (;;) {
      const b = buf[i++];
      result += (b & 0x7f) * 2 ** shift;
      if (b < 0x80) return result;
      shift += 7;
    }
  };
  while (i < buf.length) {
    const key = varint();
    const field = Math.floor(key / 8);
    const wire = key & 7;
    let value: number | Uint8Array;
    if (wire === 0) value = varint();
    else if (wire === 2) {
      const len = varint();
      value = buf.subarray(i, i + len);
      i += len;
    } else if (wire === 1) {
      i += 8;
      continue;
    } else if (wire === 5) {
      i += 4;
      continue;
    } else break;
    const list = out.get(field) ?? [];
    list.push(value);
    out.set(field, list);
  }
  return out;
}

const text = new TextDecoder();
const protoString = (f: ProtoFields, n: number) => {
  const v = f.get(n)?.[0];
  return v instanceof Uint8Array ? text.decode(v) : '';
};
const protoNumber = (f: ProtoFields, n: number) => {
  const v = f.get(n)?.[0];
  return typeof v === 'number' ? v : 0;
};

// ---- collection -------------------------------------------------------------

// sql.js (SQLite in WebAssembly) is served from public/flashcards and
// loaded only when someone imports a package. Bundling it pulls in Node's
// fs, which the browser build can't resolve. Same version as package.json.
type SqlJs = import('sql.js').SqlJsStatic;
let sqlPromise: Promise<SqlJs> | null = null;

function loadSql(): Promise<SqlJs> {
  sqlPromise ??= new Promise<SqlJs>((resolve, reject) => {
    const w = window as unknown as { initSqlJs?: (c: { locateFile: () => string }) => Promise<SqlJs> };
    const init = () => {
      if (!w.initSqlJs) return reject(new Error("Couldn't load the Anki reader."));
      w.initSqlJs({ locateFile: () => '/flashcards/sql-wasm.wasm' }).then(resolve, reject);
    };
    if (w.initSqlJs) return init();
    const script = document.createElement('script');
    script.src = '/flashcards/sql-wasm.js';
    script.onload = init;
    script.onerror = () => reject(new Error("Couldn't load the Anki reader."));
    document.head.appendChild(script);
  }).catch((err) => {
    sqlPromise = null;
    throw err;
  });
  return sqlPromise;
}

function rows(db: Database, sql: string): Record<string, SqlValue>[] {
  const res = db.exec(sql)[0];
  if (!res) return [];
  return res.values.map((v) => Object.fromEntries(res.columns.map((c, i) => [c, v[i]])));
}

function hasTable(db: Database, name: string) {
  return rows(db, `SELECT name FROM sqlite_master WHERE type = 'table' AND name = '${name}'`).length > 0;
}

function noteTypes(db: Database): AnkiNoteType[] {
  if (hasTable(db, 'notetypes')) {
    return rows(db, 'SELECT id, name, config FROM notetypes').map((nt) => {
      const id = String(nt.id);
      const config = readProto(nt.config as Uint8Array);
      const fields = rows(db, `SELECT name FROM fields WHERE ntid = ${id} ORDER BY ord`).map((f) => String(f.name));
      const templates = rows(db, `SELECT name, config FROM templates WHERE ntid = ${id} ORDER BY ord`).map((t) => {
        const c = readProto(t.config as Uint8Array);
        return { name: String(t.name), front: protoString(c, 1), back: protoString(c, 2) };
      });
      return {
        key: id,
        name: String(nt.name),
        kind: protoNumber(config, 1) === 1 ? 'cloze' : 'standard',
        fields,
        templates,
        css: protoString(config, 3),
        sortField: protoNumber(config, 2),
      };
    });
  }
  const col = rows(db, 'SELECT models FROM col')[0];
  const models = JSON.parse(String(col?.models ?? '{}')) as Record<
    string,
    {
      name: string;
      type: number;
      css: string;
      sortf: number;
      flds: { name: string; ord: number }[];
      tmpls: { name: string; qfmt: string; afmt: string; ord: number }[];
    }
  >;
  return Object.entries(models).map(([id, m]) => ({
    key: id,
    name: m.name,
    kind: m.type === 1 ? 'cloze' : 'standard',
    fields: m.flds.slice().sort((a, b) => a.ord - b.ord).map((f) => f.name),
    templates: m.tmpls
      .slice()
      .sort((a, b) => a.ord - b.ord)
      .map((t) => ({ name: t.name, front: t.qfmt, back: t.afmt })),
    css: m.css ?? '',
    sortField: m.sortf ?? 0,
  }));
}

function deckNames(db: Database): Map<string, string> {
  const out = new Map<string, string>();
  if (hasTable(db, 'decks')) {
    for (const d of rows(db, 'SELECT id, name FROM decks')) {
      out.set(String(d.id), String(d.name).split('\u001f').join(DECK_SEP));
    }
    return out;
  }
  const col = rows(db, 'SELECT decks FROM col')[0];
  const decks = JSON.parse(String(col?.decks ?? '{}')) as Record<string, { name: string }>;
  for (const [id, d] of Object.entries(decks)) out.set(id, d.name);
  return out;
}

function mediaList(files: Record<string, Uint8Array>): Map<string, string> {
  const raw = files.media;
  const map = new Map<string, string>();
  if (!raw) return map;
  const bytes = maybeZstd(raw);
  try {
    const json = JSON.parse(text.decode(bytes)) as Record<string, string>;
    for (const [k, name] of Object.entries(json)) map.set(k, name);
    return map;
  } catch {
    // protobuf MediaEntries { repeated MediaEntry entries = 1 }
    const entries = readProto(bytes).get(1) ?? [];
    entries.forEach((e, i) => {
      if (!(e instanceof Uint8Array)) return;
      const entry = readProto(e);
      const legacy = entry.get(255)?.[0];
      map.set(String(typeof legacy === 'number' ? legacy : i), protoString(entry, 1));
    });
    return map;
  }
}

export async function readAnkiPackage(file: File, now = new Date()): Promise<AnkiPackage> {
  const files = unzipSync(new Uint8Array(await file.arrayBuffer()));
  const collection = files['collection.anki21b']
    ? zstd(files['collection.anki21b'])
    : (files['collection.anki21'] ?? files['collection.anki2']);
  if (!collection) throw new Error("That file doesn't look like an Anki package.");

  const SQL = await loadSql();
  const db = new SQL.Database(collection);
  try {
    const types = noteTypes(db);
    const decks = deckNames(db);
    const crt = Number(rows(db, 'SELECT crt FROM col')[0]?.crt ?? 0);

    const cardsByNote = new Map<string, AnkiNote['cards']>();
    for (const c of rows(db, 'SELECT nid, did, odid, ord, type, queue, due, odue, ivl, factor, reps, lapses, flags, data FROM cards')) {
      const inFiltered = Number(c.odid) !== 0;
      const did = String(inFiltered ? c.odid : c.did);
      const rawDue = Number(inFiltered && Number(c.odue) ? c.odue : c.due);
      // Review and day-learning cards count days from the collection's
      // creation; intraday learning cards use a Unix timestamp.
      const dueDate = rawDue > 1e9 ? new Date(rawDue * 1000) : new Date((crt + rawDue * 86400) * 1000);
      let memory: { s: number; d: number } | null = null;
      try {
        const data = JSON.parse(String(c.data || '{}')) as { s?: number; d?: number };
        if (typeof data.s === 'number' && typeof data.d === 'number') memory = { s: data.s, d: data.d };
      } catch {
        // no FSRS data on this card
      }
      const type = Number(c.type);
      const list = cardsByNote.get(String(c.nid)) ?? [];
      list.push({
        ord: Number(c.ord),
        deck: decks.get(did) ?? 'Default',
        schedule:
          type === 0
            ? null
            : fromAnkiSm2({
                type,
                ivlDays: Number(c.ivl),
                factor: Number(c.factor),
                reps: Number(c.reps),
                lapses: Number(c.lapses),
                due: Number.isFinite(dueDate.getTime()) ? dueDate : now,
                memory,
                now,
              }),
        suspended: Number(c.queue) === -1,
        flag: Number(c.flags) & 7,
      });
      cardsByNote.set(String(c.nid), list);
    }

    const notes: AnkiNote[] = rows(db, 'SELECT id, guid, mid, tags, flds FROM notes').map((n) => ({
      guid: String(n.guid),
      typeKey: String(n.mid),
      fields: String(n.flds).split('\u001f'),
      tags: String(n.tags).split(/\s+/).filter(Boolean),
      cards: cardsByNote.get(String(n.id)) ?? [],
    }));

    const usedTypes = new Set(notes.map((n) => n.typeKey));
    const media: AnkiPackage['media'] = [];
    for (const [key, name] of mediaList(files)) {
      const data = files[key];
      if (data && name) media.push({ name, data: maybeZstd(data) });
    }

    const usedDecks = new Set(notes.flatMap((n) => n.cards.map((c) => c.deck)));
    return {
      noteTypes: types.filter((t) => usedTypes.has(t.key)),
      notes,
      media,
      decks: Array.from(usedDecks).sort(),
    };
  } finally {
    db.close();
  }
}

/** Points a note's media references at the names the server stored. */
export function renameMedia(fields: string[], renames: Map<string, string>): string[] {
  if (!renames.size) return fields;
  return fields.map((f) => {
    let out = f;
    for (const [from, to] of renames) {
      out = out
        .split(`src="${from}"`)
        .join(`src="${to}"`)
        .split(`src='${from}'`)
        .join(`src='${to}'`)
        .split(`[sound:${from}]`)
        .join(`[sound:${to}]`);
    }
    return out;
  });
}
