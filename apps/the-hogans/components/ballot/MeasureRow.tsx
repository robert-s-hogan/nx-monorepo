import { Measure, Pick } from './types';
import styles from './Ballot.module.css';

export const PICK_LABEL: Record<Pick, string> = {
  yes: 'Yes',
  no: 'No',
  split: 'Split',
  call: 'Your call',
};

export const PICK_CLASS: Record<Pick, string> = {
  yes: styles.kYes,
  no: styles.kNo,
  split: styles.kSplit,
  call: styles.kCall,
};

const GUIDE = 'https://voterguide.sos.ca.gov/propositions/';

interface MeasureRowProps {
  measure: Measure;
  open: boolean;
  active: boolean;
  flash: boolean;
  hidden: boolean;
  onToggle: (open: boolean) => void;
  onFlashEnd: () => void;
}

export function MeasureRow({
  measure: m,
  open,
  active,
  flash,
  hidden,
  onToggle,
  onFlashEnd,
}: MeasureRowProps) {
  const verdict = m.verdict ?? PICK_LABEL[m.pick];
  const yesOval = m.pick === 'yes' ? styles.on : m.pick === 'split' ? styles.half : '';
  const noOval = m.pick === 'no' ? styles.on : m.pick === 'split' ? styles.half : '';
  const url = m.url ?? `${GUIDE}${m.id}/index.htm`;
  const urlLabel = m.urlLabel ?? `Official voter guide: Prop ${m.id}`;

  const classes = [
    styles.row,
    PICK_CLASS[m.pick],
    m.flag && styles.flagged,
    active && styles.active,
    flash && styles.flash,
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <details
      id={`m-${m.id}`}
      className={classes}
      open={open}
      hidden={hidden}
      onToggle={(e) => {
        const isOpen = e.currentTarget.open;
        if (isOpen !== open) onToggle(isOpen);
      }}
      onAnimationEnd={onFlashEnd}
    >
      <summary>
        <span className={styles.num}>
          <span className={styles.numLabel}>{m.kind}</span>
          <span className={styles.numBig}>{m.id}</span>
        </span>
        <span className={styles.head}>
          {m.flag && <span className={styles.flag}>{m.flag}</span>}
          <span className={styles.title}>{m.title}</span>
        </span>
        <span className={styles.tail}>
          <span className={styles.pill}>{verdict}</span>
          <span className={styles.chev} aria-hidden="true" />
        </span>
      </summary>
      <div className={styles.body}>
        <p className={styles.does}>{m.does}</p>
        <div className={styles.mark}>
          <div className={styles.ovals} aria-hidden="true">
            <span className={`${styles.oval} ${yesOval}`}>
              <i />
              YES
            </span>
            <span className={`${styles.oval} ${noOval}`}>
              <i />
              NO
            </span>
          </div>
          <span className={styles.verdict}>{verdict}</span>
        </div>
        <p className={styles.why}>{m.why}</p>
        <dl className={styles.facts}>
          <div>
            <dt>On ballot by</dt>
            <dd>{m.ballotBy}</dd>
          </div>
          <div>
            <dt>Supporters</dt>
            <dd>{m.supporters}</dd>
          </div>
          <div>
            <dt>Opponents</dt>
            <dd>{m.opponents}</dd>
          </div>
          <div className={styles.labor}>
            <dt>Labor</dt>
            <dd>{m.labor}</dd>
          </div>
        </dl>
        <dl className={`${styles.facts} ${styles.money}`}>
          {'note' in m.money ? (
            <div>
              <dt>Money</dt>
              <dd>{m.money.note}</dd>
            </div>
          ) : (
            <>
              <div>
                <dt>Money for Yes</dt>
                <dd>{m.money.yes}</dd>
              </div>
              <div>
                <dt>Money for No</dt>
                <dd>{m.money.no}</dd>
              </div>
            </>
          )}
        </dl>
        <a className={styles.link} href={url} target="_blank" rel="noopener noreferrer">
          {urlLabel} ↗
        </a>
      </div>
    </details>
  );
}
