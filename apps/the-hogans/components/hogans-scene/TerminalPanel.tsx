import { useEffect, useRef, useState } from 'react';

import styles from './HogansScene.module.css';
import { Persona } from './personas';

interface TerminalPanelProps {
  persona: Persona | null;
  onClose: () => void;
}

const TerminalPanel = ({ persona, onClose }: TerminalPanelProps) => {
  const [typed, setTyped] = useState('');
  const timerRef = useRef<ReturnType<typeof setTimeout>>();

  useEffect(() => {
    clearTimeout(timerRef.current);
    if (!persona) {
      setTyped('');
      return;
    }
    // Reassigned as a plain (non-optional) const so the nested step()
    // closure below never needs a non-null assertion.
    const bio: string = persona.bio;

    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduceMotion) {
      setTyped(bio);
      return;
    }

    let i = 0;
    setTyped('');
    function step() {
      i += 1;
      setTyped(bio.slice(0, i));
      if (i <= bio.length) {
        timerRef.current = setTimeout(step, 12);
      }
    }
    step();
    return () => clearTimeout(timerRef.current);
  }, [persona]);

  useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === 'Escape') onClose();
    }
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  const isOpen = persona !== null;

  return (
    <div className={`${styles.panel} ${isOpen ? styles.panelShow : ''}`} role="region" aria-label="Persona log" aria-hidden={!isOpen}>
      <div className={styles.panelHead}>
        <div className={styles.panelHeadDots}>
          <span />
          <span />
          <span />
        </div>
        <div className={styles.panelTitle}>persona.log{persona ? ` — ${persona.name.toLowerCase().replace(/\s+/g, '-')}` : ''}</div>
        <button type="button" className={styles.panelClose} aria-label="Close" onClick={onClose}>
          ✕
        </button>
      </div>
      <div className={styles.panelBody}>
        {persona ? (
          <>
            <div className={styles.panelName}>{persona.name}</div>
            <div className={styles.panelPrompt}>&gt; cat bio.log</div>
            <div>
              {typed}
              {typed.length < persona.bio.length ? <span className={styles.caret} /> : null}
            </div>
          </>
        ) : null}
      </div>
    </div>
  );
};

export default TerminalPanel;
