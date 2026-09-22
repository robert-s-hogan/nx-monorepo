import type { ReactNode } from 'react';
import { C } from '../lib/catalog';
import { prereqCheck, st, termOf } from '../lib/reqMath';
import { CourseId, ProgressState } from '../types';

function termLabel(name: string | null): string {
  if (!name) return 'TERM';
  const m = name.match(/(\w{2})\w* (\d{2})(\d{2})/);
  return m ? `${m[1].toUpperCase()} ${m[3]}` : name;
}

interface CourseRowProps {
  id: CourseId;
  state: ProgressState;
  out?: boolean;
  onCycle: (id: CourseId) => void;
  onOpenTerm: (id: CourseId) => void;
}

export function CourseRow({ id, state, out, onCycle, onOpenTerm }: CourseRowProps) {
  const c = C[id];
  const s = st(state, id);
  const t = termOf(state, id);
  const pc = prereqCheck(state, id, t);
  const cls = [
    'course',
    s === 'done' ? 'done' : '',
    s === 'prog' ? 'prog' : '',
    out ? 'notneeded' : '',
    !pc.ok && s === 'none' ? 'blocked' : '',
  ]
    .filter(Boolean)
    .join(' ');
  const mark = s === 'done' ? '✓' : s === 'prog' ? '●' : '';
  const tName = t ? state.terms.find((x) => x.id === t)?.name ?? null : null;

  let sub: ReactNode = null;
  if (out) {
    sub = <span className="warn dim">Not needed — this requirement is covered</span>;
  } else if (!pc.ok && s !== 'done') {
    sub = <span className="warn">Needs {pc.missing.join(' + ')} first</span>;
  } else if (c.note) {
    sub = <span className="warn dim">{c.note}</span>;
  }

  return (
    <div className={cls} data-c={id}>
      <button
        type="button"
        className="cyc"
        aria-label={`Change status of ${c.code}`}
        onClick={() => onCycle(id)}
      >
        {mark}
      </button>
      <div className="code">{c.code}</div>
      <div className="title">
        {c.t}
        {sub}
      </div>
      <div className="u">{c.u}u</div>
      <button
        type="button"
        className={`plus ${t ? 'set' : ''}`}
        onClick={() => onOpenTerm(id)}
      >
        {termLabel(tName)}
      </button>
    </div>
  );
}
