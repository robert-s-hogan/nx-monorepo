// Anki's search syntax, turned into a SQL condition over
// fc_cards c JOIN fc_notes n JOIN fc_decks d JOIN fc_note_types t.
// Supported: plain words and "quoted phrases" (with * wildcards), -negation,
// OR, parentheses, deck:, tag:, note:, card:, is:new/learn/review/due/
// suspended/buried/marked/leech, flag:N, prop:ivl/due/reps/lapses/s/d with
// < <= = >= > !=, rated:N[:R], added:N, edited:N, nid:, cid:.
import type { InValue } from '@libsql/client';

import { HttpError } from './errors';
import { DAY_MS } from '../../../components/flashcards/types';

export interface SqlPart {
  sql: string;
  args: InValue[];
}

type Token = { kind: 'word'; value: string; negated: boolean } | { kind: '(' | ')' | 'or' };

function tokenize(input: string): Token[] {
  const tokens: Token[] = [];
  let i = 0;
  while (i < input.length) {
    const ch = input[i];
    if (/\s/.test(ch)) {
      i++;
      continue;
    }
    let negated = false;
    if (ch === '-' && i + 1 < input.length && !/\s/.test(input[i + 1])) {
      negated = true;
      i++;
    }
    if (input[i] === '(' || input[i] === ')') {
      if (negated) tokens.push({ kind: 'word', value: '', negated: true });
      tokens.push({ kind: input[i] as '(' | ')' });
      i++;
      continue;
    }
    let value = '';
    while (i < input.length && !/\s/.test(input[i]) && input[i] !== ')' && (input[i] !== '(' || value)) {
      if (input[i] === '"') {
        i++;
        while (i < input.length && input[i] !== '"') value += input[i++];
        i++;
      } else {
        value += input[i++];
      }
    }
    if (!negated && value.toLowerCase() === 'or') tokens.push({ kind: 'or' });
    else if (!negated && value.toLowerCase() === 'and') continue;
    else tokens.push({ kind: 'word', value, negated });
  }
  return tokens;
}

/** `*` matches anything; `%` and `_` are literal. */
const like = (s: string) => s.replace(/[\\%_]/g, (c) => `\\${c}`).replace(/\*/g, '%');

interface Ctx {
  now: Date;
  dayStart: Date;
}

const PROPS: Record<string, string> = {
  ivl: 'c.scheduled_days',
  reps: 'c.reps',
  lapses: 'c.lapses',
  s: 'c.stability',
  d: 'c.difficulty',
};

function term(raw: string, ctx: Ctx): SqlPart {
  const colon = raw.indexOf(':');
  const key = colon > 0 ? raw.slice(0, colon).toLowerCase() : '';
  const val = colon > 0 ? raw.slice(colon + 1) : raw;
  const nowIso = ctx.now.toISOString();
  const dayEnd = new Date(ctx.dayStart.getTime() + DAY_MS).toISOString();
  const daysAgo = (n: number) => new Date(ctx.dayStart.getTime() - (n - 1) * DAY_MS).toISOString();
  const num = (v: string) => {
    const n = Number(v);
    if (!Number.isFinite(n)) throw new HttpError(400, `"${raw}" needs a number`);
    return n;
  };

  switch (key) {
    case 'deck': {
      const name = like(val);
      return {
        sql: `(d.name LIKE ? ESCAPE '\\' OR d.name LIKE ? ESCAPE '\\')`,
        args: [name, `${name}::%`],
      };
    }
    case 'tag': {
      if (val === '' || val === 'none') return { sql: `n.tags = ''`, args: [] };
      const t = like(val);
      return {
        sql: `(n.tags LIKE ? ESCAPE '\\' OR n.tags LIKE ? ESCAPE '\\')`,
        args: [`% ${t} %`, `% ${t}::%`],
      };
    }
    case 'note':
      return { sql: `t.name LIKE ? ESCAPE '\\'`, args: [like(val)] };
    case 'card':
      return /^\d+$/.test(val)
        ? { sql: 'c.ord = ?', args: [Number(val) - 1] }
        : { sql: `json_extract(t.templates, '$[' || c.ord || '].name') LIKE ? ESCAPE '\\'`, args: [like(val)] };
    case 'is':
      switch (val.toLowerCase()) {
        case 'new':
          return { sql: 'c.state = 0', args: [] };
        case 'learn':
          return { sql: 'c.state IN (1, 3)', args: [] };
        case 'review':
          return { sql: 'c.state IN (2, 3)', args: [] };
        case 'due':
          return { sql: 'c.state != 0 AND c.due < ?', args: [dayEnd] };
        case 'suspended':
          return { sql: 'c.suspended = 1', args: [] };
        case 'buried':
          return { sql: 'c.buried_until > ?', args: [nowIso] };
        case 'marked':
          return { sql: `n.tags LIKE '% marked %'`, args: [] };
        case 'leech':
          return { sql: `n.tags LIKE '% leech %'`, args: [] };
        default:
          throw new HttpError(400, `Unknown search "is:${val}"`);
      }
    case 'flag':
      return { sql: 'c.flag = ?', args: [num(val)] };
    case 'prop': {
      const m = val.match(/^(\w+)(<=|>=|!=|=|<|>)(-?[\d.]+)$/);
      if (!m) throw new HttpError(400, `Can't read "${raw}"`);
      const [, prop, op, n] = m;
      if (prop === 'due') {
        // Days from today: prop:due<=1 is due by the end of tomorrow.
        const at = new Date(ctx.dayStart.getTime() + (num(n) + 1) * DAY_MS).toISOString();
        return { sql: `c.state != 0 AND c.due ${op} ?`, args: [at] };
      }
      const col = PROPS[prop];
      if (!col) throw new HttpError(400, `Unknown property "${prop}"`);
      return { sql: `${col} ${op} ?`, args: [num(n)] };
    }
    case 'rated': {
      const [days, rating] = val.split(':');
      const since = daysAgo(Math.max(1, num(days)));
      return rating
        ? {
            sql: 'EXISTS (SELECT 1 FROM fc_reviews r WHERE r.card_id = c.id AND r.at >= ? AND r.rating = ?)',
            args: [since, num(rating)],
          }
        : { sql: 'EXISTS (SELECT 1 FROM fc_reviews r WHERE r.card_id = c.id AND r.at >= ?)', args: [since] };
    }
    case 'added':
      return { sql: 'c.created_at >= ?', args: [daysAgo(Math.max(1, num(val)))] };
    case 'edited':
      return { sql: 'n.updated_at >= ?', args: [daysAgo(Math.max(1, num(val)))] };
    case 'nid':
    case 'cid': {
      const ids = val.split(',').filter(Boolean);
      if (!ids.length) throw new HttpError(400, `"${raw}" needs ids`);
      return {
        sql: `${key === 'nid' ? 'n.id' : 'c.id'} IN (${ids.map(() => '?').join(', ')})`,
        args: ids,
      };
    }
    default:
      return { sql: `n.search_text LIKE ? ESCAPE '\\'`, args: [`%${like(raw.toLowerCase())}%`] };
  }
}

/** Parses an Anki search into a WHERE fragment; empty matches everything. */
export function compileSearch(query: string, ctx: Ctx): SqlPart {
  const tokens = tokenize(query);
  let pos = 0;

  const parseOr = (): SqlPart => {
    const parts = [parseAnd()];
    while (tokens[pos]?.kind === 'or') {
      pos++;
      parts.push(parseAnd());
    }
    return parts.length === 1
      ? parts[0]
      : { sql: `(${parts.map((p) => p.sql).join(' OR ')})`, args: parts.flatMap((p) => p.args) };
  };

  const parseAnd = (): SqlPart => {
    const parts: SqlPart[] = [];
    while (pos < tokens.length && tokens[pos].kind !== ')' && tokens[pos].kind !== 'or') {
      parts.push(parseUnary());
    }
    if (!parts.length) return { sql: '1', args: [] };
    return parts.length === 1
      ? parts[0]
      : { sql: `(${parts.map((p) => p.sql).join(' AND ')})`, args: parts.flatMap((p) => p.args) };
  };

  const parseUnary = (): SqlPart => {
    const tok = tokens[pos++];
    if (tok.kind === 'word' && tok.value === '' && tok.negated && tokens[pos]?.kind === '(') {
      const inner = parseUnary();
      return { sql: `NOT ${inner.sql}`, args: inner.args };
    }
    if (tok.kind === '(') {
      const inner = parseOr();
      if (tokens[pos]?.kind === ')') pos++;
      return { sql: `(${inner.sql})`, args: inner.args };
    }
    if (tok.kind === 'word') {
      const t = term(tok.value, ctx);
      return tok.negated ? { sql: `NOT (${t.sql})`, args: t.args } : { sql: `(${t.sql})`, args: t.args };
    }
    // A stray ")" or "or"; skip it.
    return { sql: '1', args: [] };
  };

  const out = parseOr();
  return out;
}

export const SORTS: Record<string, string> = {
  sort: 'n.sort_text COLLATE NOCASE',
  created: 'c.created_at',
  edited: 'n.updated_at',
  due: 'c.state = 0, c.due',
  interval: 'c.scheduled_days',
  reps: 'c.reps',
  lapses: 'c.lapses',
  deck: 'd.name COLLATE NOCASE',
  difficulty: 'c.difficulty',
};
