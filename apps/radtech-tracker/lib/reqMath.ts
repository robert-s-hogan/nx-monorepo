// Requirement/prerequisite/scheduling math — ported 1:1 from the original
// standalone radtech-tracker.html (same function names, same behavior),
// just parameterized on a ProgressState instead of reading a global `S`.
// The Week tab's conflict detection (overlaps/clashesIn) is the part that
// matters most once he's registering for real sections, so it's kept exact.
import {
  Course,
  CourseId,
  CourseState,
  CourseStatus,
  GroupEval,
  PrereqCheck,
  ProgressState,
  RequirementGroup,
  Term,
} from '../types';
import { C, TOTAL_UNITS } from './catalog';

export function cs(state: ProgressState, id: CourseId): CourseState {
  return (
    state.c[id] ?? { status: 'none', term: null, days: [], from: '', to: '' }
  );
}
export function st(state: ProgressState, id: CourseId): CourseStatus {
  return state.c[id]?.status ?? 'none';
}
export function termOf(state: ProgressState, id: CourseId): string | null {
  return state.c[id]?.term ?? null;
}
export function termIdx(state: ProgressState, tid: string | null): number {
  if (!tid) return -1;
  return state.terms.findIndex((t) => t.id === tid);
}

function unitsIn(
  state: ProgressState,
  list: CourseId[],
  want: 'done' | 'prog'
): number {
  return list.reduce(
    (n, id) => n + (st(state, id) === want ? C[id].u : 0),
    0
  );
}
function pickFrom(
  state: ProgressState,
  list: CourseId[],
  want: 'done' | 'prog'
): CourseId[] {
  return list.filter((id) => st(state, id) === want);
}

export function evalGroup(
  state: ProgressState,
  g: RequirementGroup
): GroupEval {
  if (g.kind === 'combo') {
    const solo = g.solo ?? [];
    const slotA = g.slotA ?? [];
    const slotB = g.slotB ?? [];
    const scoredDone = () => {
      const soloDone = pickFrom(state, solo, 'done').length > 0;
      const aDone = pickFrom(state, slotA, 'done').length > 0;
      const bDone = pickFrom(state, slotB, 'done').length > 0;
      if (soloDone) return { slots: 2, sat: true };
      return { slots: (aDone ? 1 : 0) + (bDone ? 1 : 0), sat: aDone && bDone };
    };
    const d = scoredDone();
    // "or better": a slot filled by done OR in-progress.
    const anyOf = (list: CourseId[]) =>
      list.some((id) => st(state, id) === 'done' || st(state, id) === 'prog');
    const soloB = anyOf(solo);
    const aB = anyOf(slotA);
    const bB = anyOf(slotB);
    const slotsB = soloB ? 2 : (aB ? 1 : 0) + (bB ? 1 : 0);
    const credit = (d.slots / 2) * g.need;
    const softAll = (slotsB / 2) * g.need;
    return {
      credit,
      soft: Math.max(0, softAll - credit),
      satisfied: d.sat,
      softSat: soloB || (aB && bB),
    };
  }
  const list = g.list ?? [];
  if (g.kind === 'all') {
    const credit = unitsIn(state, list, 'done');
    const soft = unitsIn(state, list, 'prog');
    const cappedCredit = Math.min(credit, g.need);
    return {
      credit: cappedCredit,
      soft: Math.min(soft, g.need - cappedCredit),
      satisfied: list.every((id) => st(state, id) === 'done'),
      softSat: list.every(
        (id) => st(state, id) === 'done' || st(state, id) === 'prog'
      ),
    };
  }
  // any-of
  const dU = unitsIn(state, list, 'done');
  const pU = unitsIn(state, list, 'prog');
  const credit = Math.min(dU, g.need);
  return {
    credit,
    soft: Math.min(pU, g.need - credit),
    satisfied: dU >= g.need,
    softSat: dU + pU >= g.need,
  };
}

export function totals(
  state: ProgressState,
  groups: RequirementGroup[]
): { done: number; soft: number } {
  let done = 0;
  let soft = 0;
  groups.forEach((g) => {
    const e = evalGroup(state, g);
    done += e.credit;
    soft += e.soft;
  });
  return {
    done: Math.round(done * 100) / 100,
    soft: Math.round(soft * 100) / 100,
  };
}

/** Which courses in a group are no longer needed because the requirement is already covered. */
export function ruledOut(
  state: ProgressState,
  g: RequirementGroup
): Set<CourseId> {
  const out = new Set<CourseId>();
  const claimed = (id: CourseId) =>
    st(state, id) === 'done' || st(state, id) === 'prog';
  if (g.kind === 'combo') {
    const solo = g.solo ?? [];
    const slotA = g.slotA ?? [];
    const slotB = g.slotB ?? [];
    if (solo.some(claimed)) {
      [...slotA, ...slotB].forEach((i) => out.add(i));
      return out;
    }
    const aPick = slotA.filter(claimed);
    const bPick = slotB.filter(claimed);
    if (aPick.length) {
      solo.forEach((i) => out.add(i));
      slotA.forEach((i) => {
        if (!claimed(i)) out.add(i);
      });
    }
    if (bPick.length) {
      solo.forEach((i) => out.add(i));
      slotB.forEach((i) => {
        if (!claimed(i)) out.add(i);
      });
    }
    return out;
  }
  if (g.kind === 'all') return out;
  const e = evalGroup(state, g);
  if (e.softSat) (g.list ?? []).forEach((i) => {
    if (!claimed(i)) out.add(i);
  });
  return out;
}

/** Met if the prereq is done, or scheduled in a strictly earlier term than the target. */
export function prereqCheck(
  state: ProgressState,
  id: CourseId,
  targetTermId: string | null
): PrereqCheck {
  const c: Course = C[id];
  if (!c.pre) return { ok: true, missing: [] };
  const tIdx = targetTermId ? termIdx(state, targetTermId) : Infinity;
  const missing: string[] = [];
  c.pre.forEach((cl) => {
    const ok = cl.anyOf.some((p) => {
      if (st(state, p) === 'done') return true;
      const pt = termOf(state, p);
      if (!pt) return false;
      const pIdx = termIdx(state, pt);
      return pIdx > -1 && pIdx < tIdx;
    });
    if (!ok) missing.push(cl.label);
  });
  return { ok: missing.length === 0, missing };
}

export function coursesInTerm(state: ProgressState, tid: string): CourseId[] {
  return Object.keys(state.c).filter((id) => state.c[id].term === tid);
}

export function overlaps(a: CourseState, b: CourseState): boolean {
  if (!a.from || !a.to || !b.from || !b.to) return false;
  if (!a.days.some((d) => b.days.includes(d))) return false;
  return a.from < b.to && b.from < a.to;
}

export function clashesIn(state: ProgressState, tid: string): Set<CourseId> {
  const ids = coursesInTerm(state, tid);
  const bad = new Set<CourseId>();
  for (let i = 0; i < ids.length; i++) {
    for (let j = i + 1; j < ids.length; j++) {
      if (overlaps(state.c[ids[i]], state.c[ids[j]])) {
        bad.add(ids[i]);
        bad.add(ids[j]);
      }
    }
  }
  return bad;
}

export function seedTerms(): Term[] {
  return [
    { id: 'f26', name: 'Fall 2026', phase: 'current' },
    { id: 's27', name: 'Spring 2027', phase: 'future' },
    { id: 'u27', name: 'Summer 2027', phase: 'future' },
    { id: 'f27', name: 'Fall 2027', phase: 'future' },
    { id: 's28', name: 'Spring 2028', phase: 'future' },
  ];
}

export function blankState(): ProgressState {
  return {
    terms: seedTerms(),
    c: {},
    ui: { open: { core: true, anat: true, comm: true }, hideDone: false, hideOut: false, weekTerm: 'f26' },
  };
}

export { TOTAL_UNITS };
