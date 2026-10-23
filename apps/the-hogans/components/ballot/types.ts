// Shapes for pages/ballot.tsx. The voting matrix (matrix.ts) stays the same
// from election to election; each election is its own data file under
// elections/, and content.ts picks which one the page shows.

/** How you marked the measure. `call` = still undecided. */
export type Pick = 'yes' | 'no' | 'split' | 'call';

/** Which way one matrix test points: Yes, No, split, or doesn't apply. */
export type Signal = 'y' | 'n' | 's' | 'x';

export interface Signals {
  money: Signal;
  labor: Signal;
  tax: Signal;
  debt: Signal;
}

export type Money =
  | { yes: string; no: string }
  /** Local measures: donor filings aren't in the state's Top 10 list. */
  | { note: string };

export interface Measure {
  /** Ballot label, e.g. "40" or "L". Also used as the anchor id. */
  id: string;
  kind: 'Prop' | 'Measure';
  pick: Pick;
  /** Overrides the pill text, e.g. "Leaning No". */
  verdict?: string;
  /** Highlights the measure and shows this label above its title. */
  flag?: string;
  ballotBy: string;
  title: string;
  does: string;
  why: string;
  supporters: string;
  opponents: string;
  labor: string;
  money: Money;
  signals: Signals;
  /** Your principles disagreed and you made the call. */
  conflict?: boolean;
  /** Defaults to the official state voter guide page for the prop. */
  url?: string;
  urlLabel?: string;
}

export interface WatchItem {
  lead: string;
  body: string;
  names?: string[];
}

export interface Office {
  office: string;
  detail: string;
  pick: Pick;
  choice: string;
}

export interface KeyDate {
  date: string;
  label: string;
}

export interface Ballot {
  eyebrow: string;
  title: string;
  lede: string;
  /** Optional callout for the measures that matter most this time. */
  watch?: {
    title: string;
    filterLabel: string;
    legend: string;
    items: WatchItem[];
  };
  measures: Measure[];
  offices: Office[];
  officesNote: string;
  dates: KeyDate[];
  /** Footer paragraphs. Plain text with [label](url) links. */
  fine: string[];
}

export interface Matrix {
  principles: { lead: string; rest?: string }[];
  priorities: { lead: string; rest?: string }[];
  priorityNote: { lead: string; rest: string };
  steps: { lead: string; rest: string }[];
}
