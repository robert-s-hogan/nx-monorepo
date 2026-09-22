import { ProgressState, RequirementGroup } from '../types';
import { C } from '../lib/catalog';
import { st, totals, TOTAL_UNITS } from '../lib/reqMath';

const fmt = (n: number) => (n % 1 ? n.toFixed(1) : String(n));

interface GaugeProps {
  state: ProgressState;
  groups: RequirementGroup[];
}

export function Gauge({ state, groups }: GaugeProps) {
  const { done, soft } = totals(state, groups);
  const nProg = Object.keys(state.c).filter(
    (k) => st(state, k) === 'prog' && !C[k]?.sup
  ).length;
  const dPct = Math.min(100, (done / TOTAL_UNITS) * 100);
  const sPct = Math.min(100 - dPct, (soft / TOTAL_UNITS) * 100);

  return (
    <div className="gauge">
      <div className="gaugetop">
        <div className="count">
          <span className="big">{fmt(done)}</span>
          <span className="of"> / {TOTAL_UNITS}</span>
          <span className="lbl">Units completed</span>
        </div>
        <div className="soft">
          <span className="n">+{fmt(soft)}</span>
          <span className="lbl">
            {nProg
              ? `In progress · ${nProg} class${nProg > 1 ? 'es' : ''}`
              : 'In progress'}
          </span>
        </div>
      </div>
      <div className="wedge">
        <div className="fill" style={{ width: `${dPct}%` }} />
        <div
          className="fillsoft"
          style={{ left: `${dPct}%`, width: `${sPct}%` }}
        />
        <div className="ticks" />
      </div>
      <div className="wedgefoot">
        <span>0</span>
        <span>
          {done >= TOTAL_UNITS
            ? 'all prerequisites met — apply'
            : `${fmt(TOTAL_UNITS - done)} to go`}
        </span>
        <span>{TOTAL_UNITS}</span>
      </div>
    </div>
  );
}
