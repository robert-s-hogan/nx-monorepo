// The Week tab — the part that matters most once he's registering for real
// sections next term. Ported exactly from the original renderWeek(): same
// hour range, same block positioning math, same conflict highlighting.
import { C, DAYFULL } from '../lib/catalog';
import { clashesIn, coursesInTerm } from '../lib/reqMath';
import { ProgressState } from '../types';

const H0 = 7;
const H1 = 22;

interface WeekViewProps {
  state: ProgressState;
  onSelectTerm: (termId: string) => void;
}

export function WeekView({ state, onSelectTerm }: WeekViewProps) {
  const tid = state.ui.weekTerm;
  const allIds = coursesInTerm(state, tid);
  const ids = allIds.filter(
    (id) => state.c[id].from && state.c[id].to && state.c[id].days.length
  );
  const bad = clashesIn(state, tid);
  const total = allIds.length;

  const missing = total - ids.length;
  const msg =
    total === 0
      ? 'No classes in this semester yet. Add them on the <b>Plan</b> tab.'
      : ids.length < total
      ? `${missing} class${missing > 1 ? 'es' : ''} still need meeting days and times — set them on the <b>Plan</b> tab and they'll appear here.`
      : bad.size
      ? '<b style="color:var(--amber)">Two classes overlap.</b> The clashing blocks are outlined in amber.'
      : 'No conflicts — this combination works.';

  const hours = Array.from({ length: H1 - H0 }, (_, i) => H0 + i);

  return (
    <section className="view on" id="v-week">
      <div className="bar" id="weekTabs">
        {state.terms.map((t) => (
          <button
            key={t.id}
            type="button"
            className={`chip ${state.ui.weekTerm === t.id ? 'on' : ''}`}
            onClick={() => onSelectTerm(t.id)}
          >
            {t.name}
          </button>
        ))}
      </div>
      <p className="hint" id="weekMsg" dangerouslySetInnerHTML={{ __html: msg }} />
      <div className="gridwrap">
        <table className="week" id="wkTable">
          <thead>
            <tr>
              <th />
              {DAYFULL.map((d) => (
                <th key={d}>{d}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {hours.map((h) => {
              const lab = ((h % 12) || 12) + (h < 12 ? 'a' : 'p');
              return (
                <tr key={h}>
                  <td className="hr">{lab}</td>
                  {DAYFULL.map((_, di) => {
                    const blocks = ids
                      .filter((id) => state.c[id].days.includes(di))
                      .map((id) => {
                        const s = state.c[id];
                        const [fh, fm] = s.from.split(':').map(Number);
                        if (fh !== h) return null;
                        const [th, tm] = s.to.split(':').map(Number);
                        const mins = th * 60 + tm - (fh * 60 + fm);
                        const top = (fm / 60) * 20;
                        const hgt = Math.max(15, (mins / 60) * 20);
                        return (
                          <div
                            key={id}
                            className={`blk ${bad.has(id) ? 'clash' : ''}`}
                            style={{ top, height: hgt }}
                          >
                            <b>{C[id].code}</b>
                            {s.from}–{s.to}
                          </div>
                        );
                      })
                      .filter(Boolean);
                    return <td key={di}>{blocks}</td>;
                  })}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </section>
  );
}
