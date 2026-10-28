import { useEffect, useRef, useState } from 'react';
import { useRouter } from 'next/router';

import { useLocalStore } from '../lib/localStore';
import { formatClock } from '../lib/stepTimers';
import {
  type KitchenTimer,
  addMinute,
  isDone,
  markDone,
  progressPct,
  remainingMs,
  removeTimer,
  sortTimers,
  startTimer,
  timerStore,
  togglePause,
  useNow,
} from '../lib/timerStore';

const RING_EVERY_MS = 4000;
const RING_FOR_MS = 90_000;
const PRESET_MINUTES = [1, 3, 5, 10, 15, 30];

export function timerText(t: KitchenTimer, now: number): string {
  return isDone(t, now) ? `+${formatClock(now - t.end)}` : formatClock(remainingMs(t, now));
}

function chime(ctx: AudioContext | null) {
  if (!ctx || ctx.state !== 'running') return;
  const t0 = ctx.currentTime;
  [880, 1175, 1568].forEach((freq, i) => {
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    const at = t0 + i * 0.18;
    osc.frequency.value = freq;
    gain.gain.setValueAtTime(0.0001, at);
    gain.gain.exponentialRampToValueAtTime(0.25, at + 0.02);
    gain.gain.exponentialRampToValueAtTime(0.0001, at + 0.5);
    osc.connect(gain);
    gain.connect(ctx.destination);
    osc.start(at);
    osc.stop(at + 0.55);
  });
}

// Rings, vibrates and keeps the screen awake. Browsers only allow sound after
// the first tap, so the AudioContext is created on the first interaction.
function useKitchenAlarm(timers: KitchenTimer[], now: number) {
  const audio = useRef<AudioContext | null>(null);
  const lastRing = useRef(0);

  useEffect(() => {
    const unlock = () => {
      try {
        const Ctx =
          window.AudioContext ??
          (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
        audio.current ??= new Ctx();
        if (audio.current.state === 'suspended') void audio.current.resume();
      } catch {
        // No Web Audio — the visual alarm still works.
      }
    };
    window.addEventListener('pointerdown', unlock);
    window.addEventListener('keydown', unlock);
    return () => {
      window.removeEventListener('pointerdown', unlock);
      window.removeEventListener('keydown', unlock);
    };
  }, []);

  useEffect(() => {
    const newlyDone = timers.filter((t) => isDone(t, now) && !t.doneAt).map((t) => t.id);
    if (newlyDone.length) {
      markDone(newlyDone, now);
      lastRing.current = 0;
      // Browsers block vibration until the page has been tapped.
      if (navigator.userActivation?.hasBeenActive) navigator.vibrate?.([300, 150, 300]);
    }
    const ringing = timers.some((t) => isDone(t, now) && (t.doneAt ?? now) > now - RING_FOR_MS);
    if (ringing && now - lastRing.current > RING_EVERY_MS) {
      lastRing.current = now;
      chime(audio.current);
    }
  }, [timers, now]);

  const running = timers.some((t) => !t.paused);
  useEffect(() => {
    if (!running || !('wakeLock' in navigator)) return;
    let lock: WakeLockSentinel | null = null;
    let cancelled = false;
    const acquire = async () => {
      if (lock || document.visibilityState !== 'visible') return;
      try {
        lock = await navigator.wakeLock.request('screen');
        lock.addEventListener('release', () => {
          lock = null;
        });
        if (cancelled) void lock.release();
      } catch {
        // Denied (battery saver, unsupported) — timers still run.
      }
    };
    void acquire();
    document.addEventListener('visibilitychange', acquire);
    return () => {
      cancelled = true;
      document.removeEventListener('visibilitychange', acquire);
      void lock?.release();
    };
  }, [running]);
}

function AddTimerForm({ onDone }: { onDone: () => void }) {
  const [label, setLabel] = useState('');
  const [minutes, setMinutes] = useState(5);

  return (
    <form
      className="rc-addform"
      onSubmit={(e) => {
        e.preventDefault();
        startTimer({ label: label.trim() || 'Timer', seconds: Math.max(1, Math.min(600, minutes)) * 60 });
        onDone();
      }}
    >
      <div className="rc-addrow">
        <label htmlFor="timer-label">
          What’s it for
          <input
            id="timer-label"
            type="text"
            placeholder="Kettle, eggs, oven…"
            maxLength={40}
            autoComplete="off"
            autoFocus
            value={label}
            onChange={(e) => setLabel(e.target.value)}
          />
        </label>
        <label htmlFor="timer-minutes">
          Minutes
          <input
            id="timer-minutes"
            type="number"
            min={1}
            max={600}
            inputMode="numeric"
            value={minutes}
            onChange={(e) => setMinutes(Number(e.target.value))}
          />
        </label>
      </div>
      <div className="rc-presets">
        {PRESET_MINUTES.map((m) => (
          <button key={m} type="button" className="rc-dbtn" aria-pressed={m === minutes} onClick={() => setMinutes(m)}>
            {m} min
          </button>
        ))}
      </div>
      <div className="rc-formactions">
        <button type="button" className="rc-dbtn" onClick={onDone}>
          Cancel
        </button>
        <button type="submit" className="rc-dbtn solid">
          Start timer
        </button>
      </div>
    </form>
  );
}

interface Props {
  adding: boolean;
  onAddDone: () => void;
}

export default function TimerDock({ adding, onAddDone }: Props) {
  const router = useRouter();
  const { timers } = useLocalStore(timerStore);
  const now = useNow(250, timers.length > 0);
  const [focusId, setFocusId] = useState<string | null>(null);
  useKitchenAlarm(timers, now);

  if (!timers.length && !adding) return null;

  const list = sortTimers(timers, now);
  const hero = list.find((t) => isDone(t, now)) ?? list.find((t) => t.id === focusId) ?? list[0];
  const heroDone = hero ? isDone(hero, now) : false;
  const status = !hero ? '' : heroDone ? 'Done' : hero.paused ? 'Paused' : hero === list[0] ? 'Next up' : 'Running';

  return (
    <>
      {hero && (
        <div
          className={`rc-hero${heroDone ? ' is-done' : ''}${hero.paused ? ' is-paused' : ''}`}
          role="group"
          aria-label={hero.label}
        >
          <div className="rc-hero-top">
            <span className="rc-eyebrow">{status}</span>
            <span className="rc-hero-label">{hero.label}</span>
          </div>
          <div className="rc-hero-row">
            <span className="rc-hero-time">{timerText(hero, now)}</span>
            <div className="rc-hero-actions">
              {hero.recipeId !== null && (
                <button
                  type="button"
                  className="rc-dbtn"
                  onClick={() => router.push(`/recipe/${hero.recipeId}?step=${hero.step ?? 0}`)}
                >
                  Go to step
                </button>
              )}
              <button type="button" className="rc-dbtn" onClick={() => addMinute(hero.id)}>
                +1 min
              </button>
              {!heroDone && (
                <button type="button" className="rc-dbtn" onClick={() => togglePause(hero.id)}>
                  {hero.paused ? 'Resume' : 'Pause'}
                </button>
              )}
              <button type="button" className={`rc-dbtn${heroDone ? ' solid' : ''}`} onClick={() => removeTimer(hero.id)}>
                {heroDone ? 'Dismiss' : 'Cancel'}
              </button>
            </div>
          </div>
          <div className="rc-bar">
            <span style={{ width: `${progressPct(hero, now)}%` }} />
          </div>
        </div>
      )}

      {list.length > 1 && (
        <div className="rc-chips">
          {list
            .filter((t) => t !== hero)
            .map((t) => (
              <button
                key={t.id}
                type="button"
                className={`rc-chip${isDone(t, now) ? ' is-done' : ''}${t.paused ? ' is-paused' : ''}`}
                aria-label={`Show ${t.label}`}
                onClick={() => setFocusId(t.id)}
              >
                <span className="rc-chip-row">
                  <span className="rc-chip-label">{t.label}</span>
                  <span className="rc-chip-time">{timerText(t, now)}</span>
                </span>
                <span className="rc-bar">
                  <span style={{ width: `${progressPct(t, now)}%` }} />
                </span>
              </button>
            ))}
        </div>
      )}

      {adding && <AddTimerForm onDone={onAddDone} />}
    </>
  );
}
