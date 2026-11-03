// Anki's text import/export format. Rows are fields separated by comma,
// tab, etc., quoted with "" escapes. Optional `#key:value` header lines
// steer the import, the same ones Anki writes and reads:
//   #separator:Tab        Comma, Semicolon, Tab, Space, Pipe, Colon or a character
//   #html:false           treat fields as plain text (escape < and &)
//   #tags:a b             tags added to every note
//   #columns:Front,Back,Tags   names the columns (separated by the separator)
//   #notetype:Cloze  #deck:Spanish::Verbs
//   #notetype column:1  #deck column:2  #tags column:5  #guid column:6  (1-based)
// Without headers, columns fill the note type's fields in order and one
// extra column after them is the tags.

export interface CsvHeader {
  separator: string;
  html: boolean;
  tags: string[];
  columns: string[] | null;
  notetype: string | null;
  deck: string | null;
  notetypeColumn: number | null;
  deckColumn: number | null;
  tagsColumn: number | null;
  guidColumn: number | null;
}

export interface ParsedCsv {
  header: CsvHeader;
  rows: string[][];
}

const NAMED_SEPARATORS: Record<string, string> = {
  tab: '\t',
  comma: ',',
  semicolon: ';',
  pipe: '|',
  space: ' ',
  colon: ':',
};

function parseRows(text: string, sep: string): string[][] {
  const rows: string[][] = [];
  let row: string[] = [];
  let field = '';
  let inQuotes = false;
  // Tracks whether the current field opened with a quote, so `a,"b"` and
  // `a,b"c` both parse the way spreadsheets do.
  let fieldStarted = false;

  for (let i = 0; i < text.length; i++) {
    const ch = text[i];
    if (inQuotes) {
      if (ch === '"') {
        if (text[i + 1] === '"') {
          field += '"';
          i++;
        } else {
          inQuotes = false;
        }
      } else {
        field += ch;
      }
      continue;
    }
    if (ch === '"' && !fieldStarted) {
      inQuotes = true;
      fieldStarted = true;
    } else if (ch === sep) {
      row.push(field);
      field = '';
      fieldStarted = false;
    } else if (ch === '\n') {
      row.push(field);
      rows.push(row);
      row = [];
      field = '';
      fieldStarted = false;
    } else if (ch !== '\r') {
      field += ch;
      fieldStarted = true;
    }
  }
  if (fieldStarted || row.length) {
    row.push(field);
    rows.push(row);
  }
  return rows;
}

const column = (v: string) => {
  const n = parseInt(v, 10);
  return Number.isFinite(n) && n > 0 ? n - 1 : null;
};

export function parseCsv(input: string): ParsedCsv {
  const lines = input.replace(/^﻿/, '').split('\n');
  const header: CsvHeader = {
    separator: '',
    html: true,
    tags: [],
    columns: null,
    notetype: null,
    deck: null,
    notetypeColumn: null,
    deckColumn: null,
    tagsColumn: null,
    guidColumn: null,
  };
  const raw: Record<string, string> = {};
  let start = 0;
  while (start < lines.length && lines[start].startsWith('#')) {
    const m = lines[start].replace(/\r$/, '').match(/^#([^:]+):(.*)$/);
    if (m) raw[m[1].trim().toLowerCase()] = m[2];
    start++;
  }
  const body = lines.slice(start).join('\n');

  if (raw.separator !== undefined) {
    const value = raw.separator.trim() || raw.separator;
    header.separator = NAMED_SEPARATORS[value.toLowerCase()] ?? value;
  } else {
    const firstLine = body.split('\n').find((l) => l.trim()) ?? '';
    header.separator = firstLine.includes('\t')
      ? '\t'
      : firstLine.includes(';') && !firstLine.includes(',')
        ? ';'
        : ',';
  }
  if (raw.html !== undefined) header.html = raw.html.trim().toLowerCase() !== 'false';
  if (raw.tags) header.tags = raw.tags.trim().split(/\s+/).filter(Boolean);
  if (raw.columns) header.columns = raw.columns.split(header.separator).map((c) => c.trim());
  if (raw.notetype) header.notetype = raw.notetype.trim();
  if (raw.deck) header.deck = raw.deck.trim();
  if (raw['notetype column']) header.notetypeColumn = column(raw['notetype column']);
  if (raw['deck column']) header.deckColumn = column(raw['deck column']);
  if (raw['tags column']) header.tagsColumn = column(raw['tags column']);
  if (raw['guid column']) header.guidColumn = column(raw['guid column']);

  // #columns can name the special columns too.
  header.columns?.forEach((name, i) => {
    const n = name.toLowerCase();
    if (n === 'tags' && header.tagsColumn === null) header.tagsColumn = i;
    if ((n === 'deck') && header.deckColumn === null) header.deckColumn = i;
    if ((n === 'notetype' || n === 'note type') && header.notetypeColumn === null) {
      header.notetypeColumn = i;
    }
    if (n === 'guid' && header.guidColumn === null) header.guidColumn = i;
  });

  const rows = parseRows(body, header.separator).filter((r) => r.some((f) => f.trim()));
  return { header, rows };
}

export interface CsvNote {
  noteType: string | null;
  deck: string | null;
  guid: string | null;
  tags: string[];
  /** In the note type's field order when `#columns` named them, else positional. */
  values: string[];
  /** Field names from `#columns`, lined up with `values`. */
  names: string[] | null;
}

const escapeText = (s: string) =>
  s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/\n/g, '<br>');

/** Splits each row into its special columns and its field values. */
export function csvNotes({ header, rows }: ParsedCsv): CsvNote[] {
  const special = new Set(
    [header.notetypeColumn, header.deckColumn, header.tagsColumn, header.guidColumn].filter(
      (c): c is number => c !== null,
    ),
  );
  return rows.map((row) => {
    const cell = (i: number | null) => (i === null ? null : (row[i] ?? '').trim() || null);
    const values: string[] = [];
    const names: string[] = [];
    row.forEach((v, i) => {
      if (special.has(i)) return;
      values.push(header.html ? v.trim() : escapeText(v.trim()));
      if (header.columns) names.push(header.columns[i] ?? '');
    });
    return {
      noteType: cell(header.notetypeColumn) ?? header.notetype,
      deck: cell(header.deckColumn) ?? header.deck,
      guid: cell(header.guidColumn),
      tags: [
        ...header.tags,
        ...(cell(header.tagsColumn) ?? '').split(/\s+/).filter(Boolean),
      ],
      values,
      names: header.columns ? names : null,
    };
  });
}

/**
 * Puts a row's values into the note type's fields. Returns the fields and
 * any tags taken from a trailing extra column (header-less files).
 */
export function mapToFields(
  note: CsvNote,
  fieldNames: string[],
): { fields: string[]; tags: string[] } {
  const fields = fieldNames.map(() => '');
  const tags = [...note.tags];
  if (note.names) {
    note.names.forEach((name, i) => {
      // Columns that don't name one of this note type's fields are ignored.
      const idx = fieldNames.findIndex((f) => f.toLowerCase() === name.toLowerCase());
      if (idx >= 0) fields[idx] = note.values[i];
    });
    return { fields, tags };
  }
  note.values.forEach((v, i) => {
    if (i < fields.length) fields[i] = v;
    else if (i === fields.length) tags.push(...v.split(/\s+/).filter(Boolean));
  });
  return { fields, tags };
}

const quote = (s: string) => `"${s.replace(/"/g, '""')}"`;

/** Anki-compatible export: note type, deck and tags columns, then fields. */
export function toCsv(
  notes: { noteType: string; deck: string; tags: string[]; fields: string[] }[],
): string {
  const head = ['#separator:Comma', '#html:true', '#notetype column:1', '#deck column:2', '#tags column:3'];
  const body = notes.map((n) =>
    [n.noteType, n.deck, n.tags.join(' '), ...n.fields].map(quote).join(','),
  );
  return [...head, ...body].join('\n') + '\n';
}
