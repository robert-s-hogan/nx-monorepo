// Finds cooking times in step text ("Let it soak for 30 minutes") so each one
// can get a one-tap timer button, labelled with the nearby verb ("soaking").

export interface StepTimer {
  seconds: number;
  /** The phrase as written, e.g. "30 minutes". */
  phrase: string;
  /** "-ing" form of the action the time belongs to, e.g. "soaking". */
  action: string | null;
}

const WORD_NUMBERS: Record<string, number> = {
  a: 1, an: 1, one: 1, two: 2, three: 3, four: 4, five: 5, six: 6, seven: 7, eight: 8,
  nine: 9, ten: 10, twelve: 12, fifteen: 15, twenty: 20, thirty: 30, forty: 40, 'forty-five': 45, sixty: 60,
};
const NUMBER = `\\d+(?:\\.\\d+)?|${Object.keys(WORD_NUMBERS).sort((a, b) => b.length - a.length).join('|')}`;
const DURATION_RE = new RegExp(
  `\\b(${NUMBER})(?:\\s*(?:-|–|to)\\s*(\\d+(?:\\.\\d+)?))?[\\s-]*(hours?|hrs?|minutes?|mins?|seconds?|secs?)\\b`,
  'gi'
);
const HALF_HOUR_RE = /\bhalf an hour\b/gi;

const ACTIONS: Record<string, string> = {
  soak: 'soaking', rest: 'resting', sit: 'sitting', stand: 'standing', bake: 'baking', roast: 'roasting',
  simmer: 'simmering', boil: 'boiling', chill: 'chilling', refrigerate: 'chilling', freeze: 'freezing',
  marinate: 'marinating', rise: 'rising', proof: 'proofing', cool: 'cooling', cook: 'cooking',
  steep: 'steeping', fry: 'frying', sauté: 'sautéing', saute: 'sautéing', toast: 'toasting',
  grill: 'grilling', microwave: 'microwaving', broil: 'broiling', steam: 'steaming', brew: 'brewing',
  thicken: 'thickening', stir: 'stir', flip: 'flip', whisk: 'whisking', blend: 'blending', knead: 'kneading',
};
const ACTION_RES: [RegExp, string][] = Object.entries(ACTIONS).map(([verb, label]) => {
  const stem = verb.endsWith('e') ? `${verb.slice(0, -1)}(?:e|es|ed|ing)` : `${verb}(?:${verb.slice(-1)})?(?:s|es|ed|ing)?`;
  return [new RegExp(`\\b${stem}\\b`, 'gi'), label];
});

function unitSeconds(unit: string): number {
  const u = unit.toLowerCase();
  if (u.startsWith('h')) return 3600;
  if (u.startsWith('m')) return 60;
  return 1;
}

function toNumber(raw: string): number {
  return WORD_NUMBERS[raw.toLowerCase()] ?? Number(raw);
}

/** The verb closest before `index` in the same sentence. */
function actionBefore(text: string, index: number): string | null {
  const sentenceStart = Math.max(...['.', '!', '?', ';'].map((p) => text.lastIndexOf(p, index - 1))) + 1;
  let best: { at: number; label: string } | null = null;
  for (const [re, label] of ACTION_RES) {
    re.lastIndex = 0;
    let m: RegExpExecArray | null;
    while ((m = re.exec(text)) && m.index < index) {
      if (m.index >= sentenceStart && (!best || m.index > best.at)) best = { at: m.index, label };
    }
  }
  return best?.label ?? null;
}

export function findStepTimers(text: string): StepTimer[] {
  const hits: { start: number; end: number; seconds: number }[] = [];
  for (const m of text.matchAll(HALF_HOUR_RE)) {
    hits.push({ start: m.index, end: m.index + m[0].length, seconds: 1800 });
  }
  const halves = [...hits];
  for (const m of text.matchAll(DURATION_RE)) {
    const start = m.index;
    const end = start + m[0].length;
    // "half an hour" already counted; don't also count its "an hour".
    if (halves.some((h) => start < h.end && end > h.start)) continue;
    // For a range like "10-12 minutes", time the low end so it's checked early.
    hits.push({ start, end, seconds: Math.round(toNumber(m[1]) * unitSeconds(m[3])) });
  }
  hits.sort((a, b) => a.start - b.start);

  // "1 hour 30 minutes" / "1 hour and 15 minutes" is one timer, not two.
  const merged: typeof hits = [];
  for (const hit of hits) {
    const prev = merged[merged.length - 1];
    if (prev && /^\s*(and\s*)?$/i.test(text.slice(prev.end, hit.start))) {
      prev.end = hit.end;
      prev.seconds += hit.seconds;
    } else {
      merged.push({ ...hit });
    }
  }

  const seen = new Set<number>();
  return merged
    .filter((h) => h.seconds > 0 && !seen.has(h.seconds) && seen.add(h.seconds))
    .map((h) => ({ seconds: h.seconds, phrase: text.slice(h.start, h.end), action: actionBefore(text, h.start) }));
}

/** 90_500 → "1:31", 3_600_000 → "1:00:00". Rounds up so a timer never shows 0:00 early. */
export function formatClock(ms: number): string {
  const total = Math.max(0, Math.ceil(ms / 1000));
  const h = Math.floor(total / 3600);
  const m = Math.floor((total % 3600) / 60);
  const s = String(total % 60).padStart(2, '0');
  return h ? `${h}:${String(m).padStart(2, '0')}:${s}` : `${m}:${s}`;
}
