// Mirrors the {fields, done} part of the original "Car care starter guide"
// artifact's state, now kept in this browser's localStorage. Its third
// piece, uploaded photos, became static files in public/car-care/ (see
// content.ts).

export type Who = 'you' | 'shop';

export interface Step {
  text: string;
  /** What the photo for this step should show. Omitted when a step has no photo. */
  caption?: string;
}

export interface Task {
  id: string;
  title: string;
  short: string;
  when: string;
  before?: string;
  steps: Step[];
  caution: string;
}

export type DoneKind = 'help' | 'solo';

export interface ProgressState {
  /** "My car" answers, keyed by FIELDS[].key. */
  fields: Record<string, string>;
  /** `${taskId}-${DoneKind}` → checked. */
  done: Record<string, boolean>;
}
