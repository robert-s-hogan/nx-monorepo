import { CourseRow } from './CourseRow';
import { ExtraClasses } from './ExtraClasses';
import { GROUPS, SUPPORT_IDS } from '../lib/catalog';
import { evalGroup, ruledOut } from '../lib/reqMath';
import { CourseId, ProgressState } from '../types';

const fmt = (n: number) => (n % 1 ? n.toFixed(1) : String(n));

interface RequirementsViewProps {
  state: ProgressState;
  onToggleGroup: (groupId: string) => void;
  onCycle: (id: CourseId) => void;
  onOpenTerm: (id: CourseId) => void;
  onToggleHideDone: () => void;
  onToggleHideOut: () => void;
  onAddExtra: (code: string, title: string, units: number) => void;
  onCycleExtra: (id: string) => void;
  onRemoveExtra: (id: string) => void;
}

export function RequirementsView({
  state,
  onToggleGroup,
  onCycle,
  onOpenTerm,
  onToggleHideDone,
  onToggleHideOut,
  onAddExtra,
  onCycleExtra,
  onRemoveExtra,
}: RequirementsViewProps) {
  return (
    <section className="view on" id="v-req">
      <p className="hint">
        Tap the circle to cycle a class: <b>empty → in progress → done</b>.
        Tap <b>TERM</b> to drop it into a semester. When one option finishes
        a requirement, the alternatives fade out — you no longer need them.
      </p>
      <div className="bar">
        <button
          type="button"
          className={`chip ${state.ui.hideDone ? 'on' : ''}`}
          onClick={onToggleHideDone}
        >
          Hide finished requirements
        </button>
        <button
          type="button"
          className={`chip ${state.ui.hideOut ? 'on' : ''}`}
          onClick={onToggleHideOut}
        >
          Hide ruled-out classes
        </button>
      </div>

      <div id="groups">
        {GROUPS.map((g) => {
          const e = evalGroup(state, g);
          const out = ruledOut(state, g);
          if (state.ui.hideDone && e.satisfied) return null;
          const open = !!state.ui.open[g.id];
          const stampCls = e.satisfied
            ? 'ok'
            : e.softSat || e.credit > 0 || e.soft > 0
            ? 'prog'
            : 'open';
          const stampTxt = e.satisfied
            ? 'Complete'
            : e.softSat
            ? 'In progress'
            : e.credit > 0 || e.soft > 0
            ? 'Started'
            : 'Not started';

          const rows = (list: CourseId[]) =>
            list.map((id) => {
              if (state.ui.hideOut && out.has(id)) return null;
              return (
                <CourseRow
                  key={id}
                  id={id}
                  state={state}
                  out={out.has(id)}
                  onCycle={onCycle}
                  onOpenTerm={onOpenTerm}
                />
              );
            });

          return (
            <div
              key={g.id}
              className={`group ${e.satisfied ? 'done' : ''} ${open ? 'open' : ''}`}
              data-g={g.id}
            >
              <div
                className="ghead"
                onClick={() => onToggleGroup(g.id)}
              >
                <span className="chev">▶</span>
                <div className="gname">{g.name}</div>
                <div className="gunits">
                  {fmt(e.credit)}/{g.need}u
                </div>
                <div className={`stamp ${stampCls}`}>{stampTxt}</div>
              </div>
              <div className="gbody">
                <div className="gnote" dangerouslySetInnerHTML={{ __html: g.note }} />
                {g.kind === 'combo' ? (
                  <>
                    <div className="slotlbl">Option A — one class covers it</div>
                    {rows(g.solo ?? [])}
                    <div className="slotlbl">Option B — one speaking class…</div>
                    {rows(g.slotA ?? [])}
                    <div className="slotlbl">…paired with one diversity class</div>
                    {rows(g.slotB ?? [])}
                  </>
                ) : (
                  rows(g.list ?? [])
                )}
              </div>
            </div>
          );
        })}
      </div>

      <h2 className="sec">Supporting classes</h2>
      <p className="hint">
        These don&apos;t count toward the 27 units, but Anatomy 1 and
        Physiology 1 won&apos;t let you enroll without them.{' '}
        <b>Anatomy 58 and Physiology 58 have no prerequisites at all</b> —
        that&apos;s the shortest path to applying.
      </p>
      <div id="support">
        {SUPPORT_IDS.map((id) => (
          <CourseRow
            key={id}
            id={id}
            state={state}
            onCycle={onCycle}
            onOpenTerm={onOpenTerm}
          />
        ))}
      </div>

      <ExtraClasses
        extras={state.extra}
        onAdd={onAddExtra}
        onCycle={onCycleExtra}
        onRemove={onRemoveExtra}
      />
    </section>
  );
}
