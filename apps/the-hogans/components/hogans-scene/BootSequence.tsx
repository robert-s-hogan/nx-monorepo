import { useEffect, useRef, useState } from 'react';

import styles from './HogansScene.module.css';

interface BootLine {
  text: string;
  tone?: 'dim' | 'ok';
  suffix?: string;
}

const BOOT_LINES: BootLine[] = [
  { text: 'hogans.os v2.0.26 — booting', tone: 'dim' },
  { text: 'establishing family uplink ......... ', suffix: 'OK' },
  { text: 'loading personas [6/6] .............. ', suffix: 'OK' },
  { text: 'rendering constellation of good will  ', suffix: 'OK' },
  { text: '' },
  { text: 'welcome home.', tone: 'ok' },
];

interface BootSequenceProps {
  onComplete: () => void;
}

const toneClass = (tone: BootLine['tone']) => {
  if (tone === 'ok') return styles.bootLineOk;
  if (tone === 'dim') return styles.bootLineDim;
  return undefined;
};

const BootSequence = ({ onComplete }: BootSequenceProps) => {
  const [hidden, setHidden] = useState(false);
  const [typed, setTyped] = useState<string[]>(() => BOOT_LINES.map(() => ''));
  const [suffixShown, setSuffixShown] = useState<boolean[]>(() => BOOT_LINES.map(() => false));
  const timerRef = useRef<ReturnType<typeof setTimeout>>();
  const finishedRef = useRef(false);
  const onCompleteRef = useRef(onComplete);
  const finishRef = useRef<() => void>(() => undefined);
  onCompleteRef.current = onComplete;

  useEffect(() => {
    function finish() {
      if (finishedRef.current) return;
      finishedRef.current = true;
      clearTimeout(timerRef.current);
      setHidden(true);
      onCompleteRef.current();
    }
    finishRef.current = finish;

    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduceMotion) {
      setTyped(BOOT_LINES.map((line) => line.text));
      setSuffixShown(BOOT_LINES.map(() => true));
      timerRef.current = setTimeout(finish, 500);
      return () => clearTimeout(timerRef.current);
    }

    let lineIndex = 0;
    let charIndex = 0;

    function step() {
      if (lineIndex >= BOOT_LINES.length) {
        timerRef.current = setTimeout(finish, 550);
        return;
      }
      const line = BOOT_LINES[lineIndex];
      const idx = lineIndex;
      if (charIndex <= line.text.length) {
        setTyped((prev) => {
          const next = prev.slice();
          next[idx] = line.text.slice(0, charIndex);
          return next;
        });
        if (charIndex === line.text.length && line.suffix) {
          setSuffixShown((prev) => {
            const next = prev.slice();
            next[idx] = true;
            return next;
          });
        }
        charIndex += 1;
        timerRef.current = setTimeout(step, line.text.length ? 12 : 0);
      } else {
        lineIndex += 1;
        charIndex = 0;
        timerRef.current = setTimeout(step, line.text ? 260 : 120);
      }
    }

    step();
    return () => clearTimeout(timerRef.current);
    // Runs once on mount — this is a one-shot intro sequence, not something
    // that should restart if a parent re-renders.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className={`${styles.boot} ${hidden ? styles.bootHidden : ''}`}>
      <div className={styles.bootLog}>
        {BOOT_LINES.map((line, i) => (
          <div key={i} className={toneClass(line.tone)}>
            {typed[i]}
            {suffixShown[i] && line.suffix ? <span className={styles.bootLineOk}>{line.suffix}</span> : null}
          </div>
        ))}
      </div>
      <button type="button" className={styles.bootSkip} onClick={() => finishRef.current()}>
        Skip
      </button>
    </div>
  );
};

export default BootSequence;
