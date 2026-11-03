import { csvNotes, mapToFields, parseCsv, toCsv } from '../components/flashcards/csv';
import { STOCK_NOTE_TYPES } from '../components/flashcards/noteTypes';
import { sanitizeHtml } from '../components/flashcards/sanitize';
import { answer, forget, newSchedule, Rating } from '../components/flashcards/scheduler';
import { SEED_CSV } from '../components/flashcards/seed';
import { buildSession, interleave, nextCard } from '../components/flashcards/session';
import { cardOrds, clozeNumbers, mediaRefs, renderCard } from '../components/flashcards/template';
import { CardBundle, defaultDeckOptions, Note, NoteType } from '../components/flashcards/types';
import { compileSearch } from '../lib/server/flashcards/search';

const type = (name: string): NoteType => {
  const t = STOCK_NOTE_TYPES.find((x) => x.name === name);
  if (!t) throw new Error(name);
  return { ...t, id: name };
};

const note = (fields: string[], tags: string[] = []): Note => ({
  id: 'n1',
  noteTypeId: 'x',
  fields,
  tags,
  createdAt: '',
  updatedAt: '',
});

describe('csv', () => {
  it('parses the seed deck, keeping quoted commas and HTML', () => {
    const notes = csvNotes(parseCsv(SEED_CSV)).map((r) => mapToFields(r, ['Front', 'Back']));
    expect(notes).toHaveLength(28);
    expect(notes[0].fields[1]).toContain('<b>deficit</b>');
    expect(notes[0].tags).toEqual(['concepts']);
  });

  it('reads Anki headers: separator, html, tags, deck and note type columns', () => {
    const parsed = parseCsv(
      '#separator:Tab\n#html:false\n#tags:imported\n#notetype column:1\n#deck column:2\nCloze\tSpanish::Verbs\t{{c1::hablar}} <b>',
    );
    const [row] = csvNotes(parsed);
    expect(row.noteType).toBe('Cloze');
    expect(row.deck).toBe('Spanish::Verbs');
    expect(row.tags).toEqual(['imported']);
    expect(row.values).toEqual(['{{c1::hablar}} &lt;b&gt;']);
  });

  it('maps named #columns onto fields and treats a trailing column as tags', () => {
    const named = csvNotes(parseCsv('#columns:Back,Front,Tags\nb,f,t1 t2'))[0];
    expect(mapToFields(named, ['Front', 'Back'])).toEqual({ fields: ['f', 'b'], tags: ['t1', 't2'] });
    const plain = csvNotes(parseCsv('f,b,t1'))[0];
    expect(mapToFields(plain, ['Front', 'Back'])).toEqual({ fields: ['f', 'b'], tags: ['t1'] });
  });

  it('exports in a form it can read back', () => {
    const csv = toCsv([{ noteType: 'Basic', deck: 'A::B', tags: ['x'], fields: ['a, "q"', 'b'] }]);
    const [row] = csvNotes(parseCsv(csv));
    expect(row).toMatchObject({ noteType: 'Basic', deck: 'A::B', tags: ['x'], values: ['a, "q"', 'b'] });
  });
});

describe('templates', () => {
  it('renders Basic front and back with FrontSide', () => {
    const t = type('Basic');
    const n = note(['Q', 'A']);
    expect(renderCard(t, n, 0, 'q').html).toBe('Q');
    expect(renderCard(t, n, 0, 'a').html).toContain('Q');
    expect(renderCard(t, n, 0, 'a').html).toContain('A');
  });

  it('only makes the optional reverse card when its field is filled', () => {
    const t = type('Basic (optional reversed card)');
    expect(cardOrds(t, note(['Q', 'A', '']))).toEqual([0]);
    expect(cardOrds(t, note(['Q', 'A', 'y']))).toEqual([0, 1]);
    expect(cardOrds(type('Basic (and reversed card)'), note(['Q', 'A']))).toEqual([0, 1]);
    expect(cardOrds(type('Basic'), note(['', 'A']))).toEqual([]);
  });

  it('makes one cloze card per number and hides only the active one', () => {
    const t = type('Cloze');
    const n = note(['{{c1::Paris}} is in {{c2::France::country}}', '']);
    expect(clozeNumbers(n.fields)).toEqual([1, 2]);
    expect(cardOrds(t, n)).toEqual([0, 1]);
    const q2 = renderCard(t, n, 1, 'q').html;
    expect(q2).toContain('Paris');
    expect(q2).toContain('[country]');
    expect(renderCard(t, n, 1, 'a').html).toContain('<span class="cloze">France</span>');
  });

  it('compares a typed answer on the back', () => {
    const t = type('Basic (type in the answer)');
    const n = note(['Capital of Spain', 'Madrid']);
    expect(renderCard(t, n, 0, 'q').typeAnswer).toBe('Madrid');
    expect(renderCard(t, n, 0, 'a', { typed: 'Madrid' }).html).toContain('typeGood');
    expect(renderCard(t, n, 0, 'a', { typed: 'Madird' }).html).toContain('typeBad');
  });

  it('handles conditionals, special fields and sounds', () => {
    const t: NoteType = {
      ...type('Basic'),
      templates: [{ name: 'C', front: '{{Front}}{{#Back}}!{{/Back}}{{^Back}}?{{/Back}} {{Tags}}', back: '{{Back}}' }],
    };
    expect(renderCard(t, note(['a', ''], ['x']), 0, 'q').html).toBe('a? x');
    const withSound = renderCard(t, note(['hi [sound:a.mp3]', 'b']), 0, 'q');
    expect(withSound.sounds).toEqual(['a.mp3']);
    expect(withSound.html).toContain('data-sound="0"');
    expect(mediaRefs('<img src="dog.jpg"> [sound:bark.mp3] <img src="https://x/y.png">')).toEqual(['dog.jpg', 'bark.mp3']);
  });
});

describe('sanitizeHtml', () => {
  it('drops scripts and handlers and points images at media', () => {
    const out = sanitizeHtml(
      '<b onclick="x()">hi</b><script>alert(1)</script><img src="dog.jpg" onerror="x()"><a href="javascript:x()">l</a><span style="color:red;background:url(x)">c</span>',
      (name) => `/m/${name}`,
    );
    expect(out).toBe('<b>hi</b><img src="/m/dog.jpg"><a>l</a><span style="color:red">c</span>');
  });
});

describe('scheduler', () => {
  const opts = defaultDeckOptions();
  const now = new Date('2026-01-01T12:00:00Z');

  it('moves a new card through learning steps and into review', () => {
    let s = answer(newSchedule(now), Rating.Good, now, opts);
    expect(s.state).toBe(1);
    s = answer(s, Rating.Good, new Date(s.due), opts);
    expect(s.state).toBe(2);
    expect(s.scheduledDays).toBeGreaterThanOrEqual(1);
    const forgotten = forget(s, now);
    expect(forgotten.state).toBe(0);
    expect(forgotten.reps).toBe(s.reps);
  });
});

describe('session order', () => {
  const bundle = (id: string, state: 0 | 1 | 2, due: string): CardBundle => ({
    card: { ...newSchedule(new Date(due)), id, state, due, noteId: id, deckId: 'd', ord: 0, suspended: false, buriedUntil: null, flag: 0, createdAt: '' },
    note: note(['x']),
    deckName: 'd',
  });

  it('spreads new cards through reviews', () => {
    expect(interleave(['r', 'r', 'r', 'r'], ['n', 'n'])).toEqual(['r', 'r', 'n', 'r', 'r', 'n']);
  });

  it('shows due learning cards first and waits for future ones', () => {
    const now = Date.parse('2026-01-01T12:00:00Z');
    const q = buildSession(
      [bundle('r1', 2, '2026-01-01T00:00:00Z'), bundle('l1', 1, '2026-01-01T11:59:00Z'), bundle('l2', 1, '2026-01-01T15:00:00Z')],
      false,
    );
    const first = nextCard(q, now);
    expect(first.kind === 'card' && first.bundle.card.id).toBe('l1');
    if (first.kind !== 'card') return;
    const second = nextCard(first.queue, now);
    expect(second.kind === 'card' && second.bundle.card.id).toBe('r1');
    if (second.kind !== 'card') return;
    expect(nextCard(second.queue, now)).toEqual({ kind: 'wait', until: Date.parse('2026-01-01T15:00:00Z') });
  });
});

describe('search', () => {
  const ctx = { now: new Date('2026-01-01T12:00:00Z'), dayStart: new Date('2026-01-01T04:00:00Z') };

  it('compiles Anki syntax into parameterized SQL', () => {
    const { sql, args } = compileSearch('deck:Spanish* -is:suspended (tag:verb or "to be") flag:1', ctx);
    expect(sql).toContain('d.name LIKE ?');
    expect(sql).toContain('NOT (c.suspended = 1)');
    expect(sql).toContain(' OR ');
    expect(args).toEqual(['Spanish%', 'Spanish%::%', '% verb %', '% verb::%', '%to be%', 1]);
  });

  it('matches everything for an empty search and rejects unknown is:', () => {
    expect(compileSearch('', ctx)).toEqual({ sql: '1', args: [] });
    expect(() => compileSearch('is:nope', ctx)).toThrow('Unknown search');
  });
});
