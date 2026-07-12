import type { Persona, Shape } from './personas';

export const ramp = ['#4338ca', '#6366f1', '#a5b4fc', '#eef2ff'] as const;

// A "capsule" is a rounded pill between two points — stacking a few of these
// (torso, arms, legs) builds an actual body volume instead of a single
// skeletal line.
export function capsulePath(
  ctx: CanvasRenderingContext2D,
  x1: number,
  y1: number,
  x2: number,
  y2: number,
  r: number
) {
  const angle = Math.atan2(y2 - y1, x2 - x1);
  const perp = angle + Math.PI / 2;
  const dx = Math.cos(perp) * r;
  const dy = Math.sin(perp) * r;
  ctx.beginPath();
  ctx.moveTo(x1 + dx, y1 + dy);
  ctx.lineTo(x2 + dx, y2 + dy);
  ctx.arc(x2, y2, r, perp, perp - Math.PI, true);
  ctx.lineTo(x1 - dx, y1 - dy);
  ctx.arc(x1, y1, r, perp - Math.PI, perp, true);
  ctx.closePath();
}

function traceShape(ctx: CanvasRenderingContext2D, shape: Shape, w: number, h: number) {
  const scale = Math.min(w, h);
  if (shape.type === 'circle') {
    ctx.beginPath();
    ctx.arc(shape.c[0] * w, shape.c[1] * h, shape.r * scale, 0, Math.PI * 2);
  } else {
    capsulePath(ctx, shape.a[0] * w, shape.a[1] * h, shape.b[0] * w, shape.b[1] * h, shape.r * scale);
  }
}

export function drawFigure(
  ctx: CanvasRenderingContext2D,
  persona: Persona,
  w: number,
  h: number,
  t: number,
  hovered: boolean,
  reduceMotion: boolean
) {
  ctx.clearRect(0, 0, w, h);
  const dim = persona.dim;
  const bodyAlpha = (hovered ? 0.42 : 0.27) * dim;
  const edgeAlpha = (hovered ? 0.95 : 0.7) * dim;
  const glow = hovered ? 11 : 5.5;

  ctx.shadowColor = ramp[1];
  persona.shapes.forEach((shape) => {
    traceShape(ctx, shape, w, h);
    ctx.shadowBlur = glow;
    ctx.fillStyle = ramp[1];
    ctx.globalAlpha = bodyAlpha;
    ctx.fill();
    ctx.lineWidth = 1;
    ctx.strokeStyle = ramp[2];
    ctx.globalAlpha = edgeAlpha;
    ctx.shadowBlur = glow * 0.6;
    ctx.stroke();
  });

  persona.joints.forEach((p, i) => {
    const phase = (reduceMotion ? 0 : t / 900) + i * 0.6 + persona.seed;
    const twinkle = reduceMotion ? 1 : 0.72 + 0.28 * Math.sin(phase);
    const r = 2.4 * (hovered ? 1.3 : 1);
    ctx.globalAlpha = Math.min(1, (hovered ? 1 : 0.85) * twinkle * dim);
    ctx.fillStyle = ramp[3];
    ctx.shadowBlur = glow * 1.3;
    ctx.beginPath();
    ctx.arc(p[0] * w, p[1] * h, r, 0, Math.PI * 2);
    ctx.fill();
  });

  if (persona.flecks) {
    ctx.shadowBlur = 2;
    persona.flecks.forEach((p, i) => {
      const phase = (reduceMotion ? 0 : t / 1300) + i;
      ctx.globalAlpha = (reduceMotion ? 0.4 : 0.22 + 0.2 * Math.sin(phase)) * dim;
      ctx.fillStyle = ramp[0];
      ctx.beginPath();
      ctx.arc(p[0] * w, p[1] * h, 1.6, 0, Math.PI * 2);
      ctx.fill();
    });
  }
  ctx.globalAlpha = 1;
  ctx.shadowBlur = 0;
}

// Figures scale with the viewport but keep their relative proportions (every
// persona's clamp() is the same dad-relative formula, scaled by sizeRatio).
// Sizing is driven almost entirely by the vw term — tuned so all 6 figures
// plus gaps always add up to less than one viewport width, so the row never
// needs to wrap, only scale down together on mobile.
export function cssHeightFor(ratio: number): string {
  const minPx = Math.round(60 * ratio);
  const vw = (24 * ratio).toFixed(1);
  const maxPx = Math.round(340 * ratio);
  return `clamp(${minPx}px, ${vw}vw, ${maxPx}px)`;
}
