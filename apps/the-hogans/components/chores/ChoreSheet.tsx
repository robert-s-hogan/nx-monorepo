import { Fragment } from 'react';

import { ChartState, DAYS, SECTIONS, formatCents } from './content';
import { Emoji } from './Emoji';
import styles from './Chores.module.css';

// Printed page budget, in inches: landscape letter is 8.5in tall; take off
// the @page margins, the title, the column header row and one band per
// section, and split what's left between the chore rows (capped at ~half
// an inch). Keeps the sheet on one page however many chores there are.
const PAGE_HEIGHT = 8.5;
const MARGINS = 0.2 + 0.2;
const TITLE = 0.6;
const HEAD_ROW = 0.32;
const SECTION_ROW = 0.24;
const SAFETY = 0.08;
const MAX_ROW = 0.5;

export function ChoreSheet({ state }: { state: ChartState }) {
  const sections = SECTIONS.map((s) => ({
    ...s,
    chores: state.chores.filter((c) => c.section === s.id),
  })).filter((s) => s.chores.length > 0);

  const rows = Math.max(1, state.chores.length);
  const free = PAGE_HEIGHT - MARGINS - TITLE - HEAD_ROW - sections.length * SECTION_ROW - SAFETY;
  const rowHeight = Math.min(MAX_ROW, free / rows);

  return (
    <div
      className={styles.sheet}
      style={{ ['--print-row' as string]: `${rowHeight.toFixed(3)}in` }}
    >
      <h2 className={styles.sheetTitle}>Theodore&apos;s Chores</h2>
      <table className={styles.chart}>
        <colgroup>
          <col className={styles.colChore} />
          {DAYS.map((d) => (
            <col key={d} />
          ))}
          <col className={styles.colStreak} />
        </colgroup>
        <thead>
          <tr>
            <th className={styles.headChore}>Chore</th>
            {DAYS.map((d) => (
              <th key={d}>{d}</th>
            ))}
            <th className={styles.headStreak}>Streak +{formatCents(state.streakBonus)}</th>
          </tr>
        </thead>
        <tbody>
          {sections.map((s) => (
            <Fragment key={s.id}>
              <tr className={styles.band}>
                <th colSpan={DAYS.length + 2} scope="colgroup">
                  {s.title}
                  <span>{s.note}</span>
                </th>
              </tr>
              {s.chores.map((c) => (
                <tr key={c.id} className={styles.row}>
                  <th scope="row" className={styles.label}>
                    <Emoji emoji={c.emoji} className={styles.emoji} />
                    <span className={styles.name}>{c.name}</span>
                    <span className={styles.coin}>{formatCents(c.cents)}</span>
                  </th>
                  {DAYS.map((d) => (
                    <td key={d} />
                  ))}
                  {s.id === 'daily' ? (
                    <td className={styles.streak}>
                      <span className={styles.bonus}>{formatCents(state.streakBonus)}</span>
                    </td>
                  ) : (
                    <td />
                  )}
                </tr>
              ))}
            </Fragment>
          ))}
        </tbody>
      </table>
    </div>
  );
}
