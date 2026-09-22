import { C, DAYS } from '../lib/catalog';
import { clashesIn, coursesInTerm, prereqCheck } from '../lib/reqMath';
import { CourseId, ProgressState } from '../types';

interface PlannerViewProps {
  state: ProgressState;
  onCycle: (id: CourseId) => void;
  onDrop: (id: CourseId) => void;
  onToggleDay: (id: CourseId, day: number) => void;
  onTimeChange: (id: CourseId, field: 'from' | 'to', value: string) => void;
  onOpenAdd: (termId: string) => void;
  onAddTerm: () => void;
  onExport: () => void;
  onImportClick: () => void;
  onReset: () => void;
}

export function PlannerView({
  state,
  onCycle,
  onDrop,
  onToggleDay,
  onTimeChange,
  onOpenAdd,
  onAddTerm,
  onExport,
  onImportClick,
  onReset,
}: PlannerViewProps) {
  return (
    <section className="view on" id="v-plan">
      <p className="hint">
        Each semester shows its unit load and blocks any class whose
        prerequisite isn&apos;t done or scheduled earlier. Add meeting days
        and times to check for conflicts on the <b>Week</b> tab.
      </p>

      <div id="terms">
        {state.terms.map((t) => {
          const ids = coursesInTerm(state, t.id);
          const load = ids.reduce((n, id) => n + C[id].u, 0);
          const bad = clashesIn(state, t.id);

          return (
            <div key={t.id} className={`term ${t.phase === 'current' ? 'current' : ''}`}>
              <div className="thead">
                <div className="tname">{t.name}</div>
                {t.phase === 'current' ? <div className="stamp prog">Current</div> : null}
                <div className={`tload ${load > 16 ? 'heavy' : ''}`}>{load}u</div>
              </div>
              <div className="tbody">
                {ids.length ? (
                  ids.map((id) => {
                    const c = C[id];
                    const s = state.c[id];
                    const pc = prereqCheck(state, id, t.id);
                    const cls = [
                      'slot',
                      s.status === 'done' ? 'done' : '',
                      s.status === 'prog' ? 'prog' : '',
                      bad.has(id) ? 'conflict' : '',
                    ]
                      .filter(Boolean)
                      .join(' ');
                    return (
                      <div key={id} className={cls}>
                        <button
                          type="button"
                          className="cyc"
                          onClick={() => onCycle(id)}
                        >
                          {s.status === 'done' ? '✓' : s.status === 'prog' ? '●' : ''}
                        </button>
                        <div className="code">{c.code}</div>
                        <div className="title">
                          {c.t}
                          {!pc.ok ? (
                            <span className="warn">Needs {pc.missing.join(' + ')} first</span>
                          ) : null}
                          {bad.has(id) ? (
                            <span className="warn">Time overlaps another class this term</span>
                          ) : null}
                        </div>
                        <div
                          className="u"
                          style={{ fontFamily: 'var(--mono)', fontSize: 11, color: 'var(--dim)' }}
                        >
                          {c.u}u
                        </div>
                        <button
                          type="button"
                          className="x"
                          aria-label={`Remove ${c.code}`}
                          onClick={() => onDrop(id)}
                        >
                          ✕
                        </button>
                        <div className="times">
                          {DAYS.map((d, i) => (
                            <button
                              key={i}
                              type="button"
                              className={`daybtn ${s.days.includes(i) ? 'on' : ''}`}
                              onClick={() => onToggleDay(id, i)}
                            >
                              {d}
                            </button>
                          ))}
                          <input
                            type="time"
                            value={s.from}
                            aria-label="Start time"
                            onChange={(e) => onTimeChange(id, 'from', e.target.value)}
                          />
                          <input
                            type="time"
                            value={s.to}
                            aria-label="End time"
                            onChange={(e) => onTimeChange(id, 'to', e.target.value)}
                          />
                        </div>
                      </div>
                    );
                  })
                ) : (
                  <div className="empty">
                    Nothing scheduled yet.
                    <br />
                    Add the classes he plans to take.
                  </div>
                )}
                <button
                  type="button"
                  className="pick"
                  style={{ marginTop: 4 }}
                  onClick={() => onOpenAdd(t.id)}
                >
                  + Add a class to {t.name}
                </button>
              </div>
            </div>
          );
        })}
      </div>
      <button type="button" className="pick" style={{ marginTop: 4 }} onClick={onAddTerm}>
        + Add another semester
      </button>

      <h2 className="sec">Save &amp; move</h2>
      <p className="hint">
        Everything saves automatically to his account. Export a file any
        time as a backup or to double-check what&apos;s stored.
      </p>
      <div className="bar">
        <button type="button" className="chip" onClick={onExport}>
          Export file
        </button>
        <button type="button" className="chip" onClick={onImportClick}>
          Import file
        </button>
        <button type="button" className="chip" onClick={onReset}>
          Start over
        </button>
      </div>
    </section>
  );
}
