import { useEffect, useRef } from 'react';

import styles from './HogansScene.module.css';
import { ramp } from './draw';

const FONT_SIZE = 14;
const CHARS = '01{}[]<>/*+=;:.,01010110'.split('');

const CodeRain = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvasEl = canvasRef.current;
    const context = canvasEl?.getContext('2d');
    if (!canvasEl || !context) return;
    // Reassigned as plain (non-optional) consts so the drawing helpers below
    // never need a non-null assertion to use them.
    const canvas: HTMLCanvasElement = canvasEl;
    const ctx: CanvasRenderingContext2D = context;

    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    let columns = 0;
    let drops: number[] = [];
    let streamBias: number[] = [];
    let rafId: number;

    function resize() {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      columns = Math.floor(canvas.width / FONT_SIZE);
      drops = Array.from({ length: columns }, () => Math.random() * -40);
      streamBias = Array.from({ length: columns }, () => Math.random());
    }

    function drawStaticRain() {
      ctx.fillStyle = 'rgba(7,7,11,1)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      ctx.font = `${FONT_SIZE}px ui-monospace, monospace`;
      ctx.globalAlpha = 0.22;
      ctx.fillStyle = ramp[1];
      for (let i = 0; i < columns; i++) {
        for (let j = 0; j < 6; j++) {
          const ch = CHARS[Math.floor(Math.random() * CHARS.length)];
          ctx.fillText(ch, i * FONT_SIZE, (j * 5 + Math.random() * 4) * FONT_SIZE);
        }
      }
      ctx.globalAlpha = 1;
    }

    function drawRain() {
      ctx.fillStyle = 'rgba(7,7,11,0.16)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      ctx.font = `${FONT_SIZE}px ui-monospace, monospace`;
      for (let i = 0; i < columns; i++) {
        const ch = CHARS[Math.floor(Math.random() * CHARS.length)];
        const x = i * FONT_SIZE;
        const y = drops[i] * FONT_SIZE;
        const bias = streamBias[i];
        ctx.fillStyle = bias > 0.85 ? ramp[3] : bias > 0.6 ? ramp[2] : bias > 0.3 ? ramp[1] : ramp[0];
        ctx.globalAlpha = bias > 0.85 ? 0.9 : 0.5;
        ctx.fillText(ch, x, y);
        ctx.globalAlpha = 1;
        if (y > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }
        drops[i] += 0.35 + bias * 0.25;
      }
      rafId = requestAnimationFrame(drawRain);
    }

    function handleResize() {
      resize();
      if (reduceMotion) drawStaticRain();
    }

    resize();
    if (reduceMotion) {
      drawStaticRain();
    } else {
      rafId = requestAnimationFrame(drawRain);
    }
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, []);

  return <canvas ref={canvasRef} className={styles.rain} aria-hidden="true" />;
};

export default CodeRain;
