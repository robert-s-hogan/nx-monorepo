// Anki card templates, rendered the way Anki does: {{Field}}, {{FrontSide}},
// {{#Field}}…{{/Field}} / {{^Field}}…{{/Field}} sections, and the filters
// cloze:, type:, text:, hint:. No DOM here, so the server can use it to
// decide which cards a note gets. The output still needs sanitizeHtml
// before it reaches the page.
import { DECK_SEP, Note, NoteType } from './types';

export interface RenderContext {
  deckName?: string;
  /** What the person typed for {{type:…}}, compared on the answer side. */
  typed?: string;
}

export interface RenderedCard {
  html: string;
  /** Files from [sound:…] in the order they appear. */
  sounds: string[];
  /** The expected answer when the template has a type-in box. */
  typeAnswer: string | null;
}

const CLOZE = /\{\{c(\d+)::([\s\S]*?)(?:::([\s\S]*?))?\}\}/g;
const SOUND = /\[sound:([^\]]+)\]/g;

export const escapeHtml = (s: string) =>
  s
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');

export function stripHtml(html: string): string {
  return html
    .replace(/<br\s*\/?>|<\/(div|p|li)>/gi, ' ')
    .replace(/<[^>]*>/g, '')
    .replace(/\[sound:[^\]]*\]/g, '')
    .replace(/&nbsp;/g, ' ')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&amp;/g, '&')
    .replace(/\s+/g, ' ')
    .trim();
}

const hasContent = (html: string) =>
  stripHtml(html) !== '' || /<img\b|\[sound:/i.test(html);

/** Cloze numbers used anywhere in the note, ascending. */
export function clozeNumbers(fields: string[]): number[] {
  const nums = new Set<number>();
  for (const f of fields) {
    for (const m of f.matchAll(CLOZE)) nums.add(Number(m[1]));
  }
  return Array.from(nums)
    .filter((n) => n > 0)
    .sort((a, b) => a - b);
}

function renderCloze(text: string, ord: number, side: 'q' | 'a'): string {
  const active = ord + 1;
  return text.replace(CLOZE, (_m, n: string, body: string, hint?: string) => {
    if (Number(n) !== active) return body;
    if (side === 'a') return `<span class="cloze">${body}</span>`;
    return `<span class="cloze">[${hint ? escapeHtml(hint) : '...'}]</span>`;
  });
}

/** The answer text of the active cloze, for {{type:cloze:Field}}. */
function clozeAnswer(text: string, ord: number): string {
  const parts: string[] = [];
  for (const m of text.matchAll(CLOZE)) {
    if (Number(m[1]) === ord + 1) parts.push(stripHtml(m[2]));
  }
  return parts.join(', ');
}

/**
 * Anki-style comparison of a typed answer: matching characters green,
 * wrong ones red, and the expected answer underneath when they differ.
 */
export function compareTyped(typed: string, expected: string): string {
  const t = typed.trim();
  const e = expected.trim();
  if (t === e) return `<code class="typeGood">${escapeHtml(e)}</code>`;
  let out = '';
  for (let i = 0; i < t.length; i++) {
    const cls = t[i] === e[i] ? 'typeGood' : 'typeBad';
    out += `<span class="${cls}">${escapeHtml(t[i])}</span>`;
  }
  const typedHtml = t ? `<code>${out}</code><br>↓<br>` : '';
  return `${typedHtml}<code class="typeMissed">${escapeHtml(e)}</code>`;
}

interface Ctx {
  fields: Record<string, string>;
  ord: number;
  side: 'q' | 'a';
  frontSide: string;
  typed?: string;
  typeAnswer: string | null;
  special: Record<string, string>;
}

function applyFilters(name: string, ctx: Ctx): string {
  const parts = name.split(':').map((p) => p.trim());
  const fieldName = parts.pop() ?? '';
  const filters = parts;

  if (fieldName === 'FrontSide' && filters.length === 0) return ctx.frontSide;
  if (fieldName in ctx.special && filters.length === 0) {
    return ctx.special[fieldName];
  }
  if (!(fieldName in ctx.fields)) {
    return filters.length ? '' : `<span class="missing">{{${escapeHtml(name)}}}</span>`;
  }

  let value = ctx.fields[fieldName];

  if (filters[0] === 'type') {
    const isCloze = filters[1] === 'cloze';
    const expected = isCloze
      ? clozeAnswer(value, ctx.ord)
      : stripHtml(value);
    ctx.typeAnswer = expected;
    if (ctx.side === 'q') return '';
    return compareTyped(ctx.typed ?? '', expected);
  }

  // Filters apply innermost first: {{text:cloze:Text}} clozes, then strips.
  for (const f of filters.slice().reverse()) {
    if (f === 'cloze') value = renderCloze(value, ctx.ord, ctx.side);
    else if (f === 'text') value = escapeHtml(stripHtml(value));
    else if (f === 'hint') {
      value = value
        ? `<details class="hint"><summary>Show ${escapeHtml(fieldName)}</summary>${value}</details>`
        : '';
    }
  }
  return value;
}

function isEmptyField(name: string, ctx: Ctx): boolean {
  const v = ctx.fields[name] ?? ctx.special[name];
  if (v === undefined) return true;
  // A cloze card's section is shown only when its own cloze is in the field.
  return !hasContent(v);
}

function renderSections(tpl: string, ctx: Ctx): string {
  // {{#Field}}…{{/Field}} and {{^Field}}…{{/Field}}, innermost first.
  const SECTION = /\{\{([#^])\s*([^}]+?)\s*\}\}([\s\S]*?)\{\{\/\s*\2\s*\}\}/;
  let out = tpl;
  for (let guard = 0; guard < 200; guard++) {
    const m = SECTION.exec(out);
    if (!m) break;
    const [whole, kind, rawName, body] = m;
    const name = rawName.split(':').pop()?.trim() ?? '';
    const empty = isEmptyField(name, ctx);
    const keep = kind === '#' ? !empty : empty;
    out = out.replace(whole, keep ? body : '');
  }
  return out.replace(/\{\{([^#^/{}][^{}]*?)\}\}/g, (_m, name: string) =>
    applyFilters(name.trim(), ctx),
  );
}

function fieldMap(noteType: NoteType, note: Note): Record<string, string> {
  const out: Record<string, string> = {};
  noteType.fields.forEach((name, i) => {
    out[name] = note.fields[i] ?? '';
  });
  return out;
}

function templateFor(noteType: NoteType, ord: number) {
  return noteType.kind === 'cloze'
    ? noteType.templates[0]
    : noteType.templates[ord];
}

function special(noteType: NoteType, note: Note, ord: number, deckName = '') {
  const tpl = templateFor(noteType, ord);
  return {
    Tags: escapeHtml(note.tags.join(' ')),
    Type: escapeHtml(noteType.name),
    Deck: escapeHtml(deckName),
    Subdeck: escapeHtml(deckName.split(DECK_SEP).pop() ?? ''),
    Card:
      noteType.kind === 'cloze'
        ? `Cloze ${ord + 1}`
        : escapeHtml(tpl?.name ?? ''),
  };
}

function extractSounds(html: string): { html: string; sounds: string[] } {
  const sounds: string[] = [];
  const out = html.replace(SOUND, (_m, name: string) => {
    sounds.push(name.trim());
    return `<button type="button" class="replay" data-sound="${sounds.length - 1}" aria-label="Play audio">▶</button>`;
  });
  return { html: out, sounds };
}

export function renderCard(
  noteType: NoteType,
  note: Note,
  ord: number,
  side: 'q' | 'a',
  context: RenderContext = {},
): RenderedCard {
  const tpl = templateFor(noteType, ord);
  if (!tpl) return { html: '', sounds: [], typeAnswer: null };
  const base: Omit<Ctx, 'side' | 'frontSide'> = {
    fields: fieldMap(noteType, note),
    ord,
    typed: context.typed,
    typeAnswer: null,
    special: special(noteType, note, ord, context.deckName),
  };
  const qCtx: Ctx = { ...base, side: 'q', frontSide: '' };
  const question = renderSections(tpl.front, qCtx);
  if (side === 'q') {
    return { ...extractSounds(question), typeAnswer: qCtx.typeAnswer };
  }
  const aCtx: Ctx = { ...base, side: 'a', frontSide: question };
  const answerHtml = renderSections(tpl.back, aCtx);
  return { ...extractSounds(answerHtml), typeAnswer: aCtx.typeAnswer ?? qCtx.typeAnswer };
}

/**
 * Which card ordinals a note should have: one per template whose front
 * comes out non-empty, or one per cloze number for cloze note types.
 */
export function cardOrds(noteType: NoteType, note: Pick<Note, 'fields' | 'tags'>): number[] {
  const full: Note = { id: '', noteTypeId: noteType.id, createdAt: '', updatedAt: '', ...note };
  if (noteType.kind === 'cloze') return clozeNumbers(note.fields).map((n) => n - 1);
  const blank: Note = { ...full, fields: noteType.fields.map(() => '') };
  const ords: number[] = [];
  noteType.templates.forEach((_t, ord) => {
    const q = renderCard(noteType, full, ord, 'q').html;
    const empty = renderCard(noteType, blank, ord, 'q').html;
    if (q !== empty && hasContent(q)) ords.push(ord);
  });
  return ords;
}

/** Media file names a note refers to: <img src> and [sound:]. */
export function mediaRefs(html: string): string[] {
  const out = new Set<string>();
  for (const m of html.matchAll(/<img[^>]+src=["']?([^"' >]+)/gi)) {
    if (!/^(https?:|data:)/i.test(m[1])) out.add(decodeURIComponent(m[1]));
  }
  for (const m of html.matchAll(SOUND)) out.add(m[1].trim());
  return Array.from(out);
}
