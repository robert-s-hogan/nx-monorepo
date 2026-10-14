// Mirrors the {fields, done} part of the original "Car care starter guide"
// artifact's state. Its third piece, uploaded photos, isn't stored per user
// here — photos are static files in public/photos/ (see lib/content.ts).

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
