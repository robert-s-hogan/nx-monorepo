import { useEffect, useRef, useState } from 'react';

import styles from './HogansScene.module.css';
import { cssHeightFor, drawFigure } from './draw';
import { Persona } from './personas';

interface FigureSlotProps {
  persona: Persona;
  index: number;
  active: boolean;
  onToggle: (index: number) => void;
}

const FigureSlot = ({ persona, index, active, onToggle }: FigureSlotProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [hovered, setHovered] = useState(false);
  const hoveredRef = useRef(false);
  const activeRef = useRef(active);

  useEffect(() => {
    hoveredRef.current = hovered;
  }, [hovered]);
  useEffect(() => {
    activeRef.current = active;
  }, [active]);

  useEffect(() => {
    const canvasEl = canvasRef.current;
    const context = canvasEl?.getContext('2d');
    if (!canvasEl || !context) return;
    // Reassigned as a plain (non-optional) const so drawFigure never needs a
    // non-null assertion inside the nested frame() closure below.
    const ctx: CanvasRenderingContext2D = context;

    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    canvasEl.width = persona.w * dpr;
    canvasEl.height = persona.h * dpr;
    canvasEl.style.height = cssHeightFor(persona.sizeRatio);
    canvasEl.style.width = 'auto';
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    let rafId: number;

    function frame(t: number) {
      drawFigure(ctx, persona, persona.w, persona.h, t, hoveredRef.current || activeRef.current, reduceMotion);
      rafId = requestAnimationFrame(frame);
    }
    rafId = requestAnimationFrame(frame);
    return () => cancelAnimationFrame(rafId);
    // persona is a stable module-level constant per slot; hovered/active are
    // read via refs each frame instead so the canvas transform is only ever
    // set up once, not torn down and rebuilt on every hover toggle.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [persona]);

  return (
    <button
      type="button"
      className={styles.figureSlot}
      aria-label={`Open ${persona.name}'s persona log`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onFocus={() => setHovered(true)}
      onBlur={() => setHovered(false)}
      onClick={() => onToggle(index)}
    >
      <canvas ref={canvasRef} className={styles.figureCanvas} />
    </button>
  );
};

export default FigureSlot;
