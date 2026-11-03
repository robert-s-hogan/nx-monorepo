import { useEffect, useMemo, useRef } from 'react';

import { mediaUrl } from './api';
import { sanitizeCss, sanitizeHtml } from './sanitize';

// Base look for card content. The note type's own CSS comes after it, so a
// deck's `.card { … }` rules win, as in Anki. Everything lives in a shadow
// root so card CSS and page CSS can't touch each other.
const BASE_CSS = `
:host { display: block; }
.card { font-family: Georgia, serif; font-size: 22px; line-height: 1.45; text-align: center; color: #1d2433; overflow-wrap: anywhere; }
img { max-width: 100%; height: auto; }
hr { border: 0; border-top: 2px dashed #d8d1bf; margin: 18px 0; }
ul, ol { text-align: left; display: inline-block; }
table { margin: 0 auto; border-collapse: collapse; }
td, th { border: 1px solid #d8d1bf; padding: 4px 8px; }
.cloze { font-weight: bold; color: #2c55c7; }
.replay { display: inline-flex; align-items: center; justify-content: center; width: 40px; height: 40px; margin: 2px 4px; border-radius: 50%; border: 1px solid #d8d1bf; background: #fffdf7; color: #2c55c7; font-size: 16px; cursor: pointer; vertical-align: middle; }
.replay:hover { border-color: #2c55c7; }
.typeGood { background: #cfeed8; color: #1b5e32; }
.typeBad { background: #f6d4cf; color: #8f2a1e; }
.typeMissed { background: #e3e9f8; color: #1d2433; }
code { font-family: ui-monospace, Menlo, monospace; font-size: 0.95em; padding: 0 3px; border-radius: 3px; }
.hint summary { cursor: pointer; color: #2c55c7; font-size: 0.8em; }
.missing { color: #b83a2b; font-family: ui-monospace, Menlo, monospace; font-size: 0.7em; }
`;

interface CardViewProps {
  html: string;
  css: string;
  mediaToken: string;
  sounds: string[];
  /** Play the sounds once when this side appears. */
  autoplay?: boolean;
  /** Sounds to leave out of autoplay (the question's, on the answer side). */
  skipAutoplay?: number;
  className?: string;
  /** Lets the reviewer's R key replay audio. */
  replayRef?: { current: (() => void) | null };
}

let current: HTMLAudioElement | null = null;

function playQueue(urls: string[]) {
  current?.pause();
  const next = (i: number) => {
    if (i >= urls.length) return;
    const audio = new Audio(urls[i]);
    current = audio;
    audio.onended = () => next(i + 1);
    audio.play().catch(() => {
      // Autoplay blocked until the first tap; the ▶ buttons still work.
    });
  };
  next(0);
}

export function stopAudio() {
  current?.pause();
  current = null;
}

export function CardView({
  html,
  css,
  mediaToken,
  sounds,
  autoplay,
  skipAutoplay = 0,
  className,
  replayRef,
}: CardViewProps) {
  const host = useRef<HTMLDivElement>(null);
  const clean = useMemo(
    () => sanitizeHtml(html, (name) => mediaUrl(mediaToken, name)),
    [html, mediaToken],
  );
  const urls = useMemo(() => sounds.map((s) => mediaUrl(mediaToken, s)), [sounds, mediaToken]);

  useEffect(() => {
    const el = host.current;
    if (!el) return;
    const root = el.shadowRoot ?? el.attachShadow({ mode: 'open' });
    root.innerHTML = `<style>${BASE_CSS}\n${sanitizeCss(css)}</style><div class="card">${clean}</div>`;
    const onClick = (e: Event) => {
      const btn = (e.target as HTMLElement).closest('[data-sound]');
      if (!btn) return;
      e.stopPropagation();
      const i = Number(btn.getAttribute('data-sound'));
      if (urls[i]) playQueue([urls[i]]);
    };
    root.addEventListener('click', onClick);
    return () => root.removeEventListener('click', onClick);
  }, [clean, css, urls]);

  useEffect(() => {
    if (replayRef) replayRef.current = () => playQueue(urls.slice(skipAutoplay));
    if (autoplay && urls.length > skipAutoplay) playQueue(urls.slice(skipAutoplay));
    // Only when the card (or side) changes.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [urls]);

  useEffect(() => stopAudio, []);

  return <div ref={host} className={className} />;
}
