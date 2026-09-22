// Mirrors the shape of the original standalone radtech-tracker.html's
// localStorage state exactly, so porting the logic over stayed 1:1 instead
// of inventing a new schema. This whole blob is now what /api/progress
// reads and writes (one row per signed-in user), replacing localStorage
// as the source of truth.

export type CourseId = string;

export type CourseStatus = 'none' | 'prog' | 'done';

export interface PrereqClause {
  anyOf: CourseId[];
  label: string;
}

export interface Course {
  code: string;
  t: string;
  u: number;
  pre?: PrereqClause[];
  note?: string;
  /** Supporting class — required to unlock another course, doesn't count toward the 27 units. */
  sup?: 1;
}

export type GroupKind = 'all' | 'any' | 'combo';

export interface RequirementGroup {
  id: string;
  name: string;
  need: number;
  kind: GroupKind;
  note: string;
  list?: CourseId[];
  solo?: CourseId[];
  slotA?: CourseId[];
  slotB?: CourseId[];
}

export type TermPhase = 'current' | 'future';

export interface Term {
  id: string;
  name: string;
  phase: TermPhase;
}

export interface CourseState {
  status: CourseStatus;
  term: string | null;
  days: number[];
  from: string;
  to: string;
}

export interface UIState {
  open: Record<string, boolean>;
  hideDone: boolean;
  hideOut: boolean;
  weekTerm: string;
}

// A class he's taking that isn't part of the RadTech prerequisite catalog
// at all (general ed, an elective, something he registered for before
// checking this list) — free-form, not tied to any requirement group, and
// never counted toward the 27-unit gauge. Just here so it doesn't fall
// through the cracks.
export interface ExtraCourse {
  id: string;
  code: string;
  title: string;
  units: number;
  status: CourseStatus;
}

export interface ProgressState {
  terms: Term[];
  c: Record<CourseId, CourseState>;
  ui: UIState;
  extra: ExtraCourse[];
}

export interface GroupEval {
  credit: number;
  soft: number;
  satisfied: boolean;
  softSat: boolean;
}

export interface PrereqCheck {
  ok: boolean;
  missing: string[];
}
