import { useCallback, useEffect, useRef, useState } from 'react';
import { useAuthedFetch } from '@with-nx/auth';
import { Spinner } from '@with-nx/react-ui';

import { Gauge } from '../components/Gauge';
import { RequirementsView } from '../components/RequirementsView';
import { PlannerView } from '../components/PlannerView';
import { WeekView } from '../components/WeekView';
import { Sheet, SheetSection } from '../components/Sheet';
import { C, GROUPS, SUPPORT_IDS } from '../lib/catalog';
import {
  blankState,
  coursesInTerm,
  prereqCheck,
  ruledOut,
  st,
  termOf,
} from '../lib/reqMath';
import { CourseId, CourseState, ProgressState } from '../types';

type Tab = 'req' | 'plan' | 'week';
type SheetMode =
  | { kind: 'term'; id: CourseId }
  | { kind: 'add'; termId: string }
  | null;

const blankCourse = (): CourseState => ({
  status: 'none',
  term: null,
  days: [],
  from: '',
  to: '',
});

export default function Index() {
  const authedFetch = useAuthedFetch();
  const [state, setState] = useState<ProgressState | null>(null);
  const [tab, setTab] = useState<Tab>('req');
  const [sheetMode, setSheetMode] = useState<SheetMode>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  // Set right before the initial GET's setState call, so the resulting
  // render doesn't immediately PUT straight back the data we just fetched.
  // Import/reset intentionally skip this — those really are new edits that
  // should persist.
  const skipNextSaveRef = useRef(false);
  const saveTimer = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);

  // Load his saved progress on mount. By the time this page renders,
  // RequireAuth has already confirmed a real 'family' session, so the
  // bearer token useAuthedFetch attaches is guaranteed to be present.
  useEffect(() => {
    let cancelled = false;
    (async () => {
      try {
        const res = await authedFetch('/api/progress');
        const data = res.ok ? ((await res.json()) as ProgressState) : blankState();
        if (!cancelled) {
          skipNextSaveRef.current = true;
          setState(data);
        }
      } catch {
        if (!cancelled) {
          skipNextSaveRef.current = true;
          setState(blankState());
        }
      }
    })();
    return () => {
      cancelled = true;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Debounced autosave — whatever the original localStorage save() did on
  // every change, this now does over the network instead.
  useEffect(() => {
    if (!state) return;
    if (skipNextSaveRef.current) {
      skipNextSaveRef.current = false;
      return;
    }
    if (saveTimer.current) clearTimeout(saveTimer.current);
    saveTimer.current = setTimeout(() => {
      authedFetch('/api/progress', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(state),
      });
    }, 500);
    return () => {
      if (saveTimer.current) clearTimeout(saveTimer.current);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [state]);

  const update = useCallback((fn: (draft: ProgressState) => void) => {
    setState((prev) => {
      if (!prev) return prev;
      const next: ProgressState = JSON.parse(JSON.stringify(prev));
      fn(next);
      return next;
    });
  }, []);

  const cycle = useCallback(
    (id: CourseId) => {
      update((s) => {
        const c = s.c[id] ?? (s.c[id] = blankCourse());
        c.status = c.status === 'none' ? 'prog' : c.status === 'prog' ? 'done' : 'none';
        if (c.status === 'none' && !c.term) {
          c.days = [];
          c.from = '';
          c.to = '';
        }
      });
    },
    [update]
  );

  const setTerm = useCallback(
    (id: CourseId, tid: string | null) => {
      update((s) => {
        const c = s.c[id] ?? (s.c[id] = blankCourse());
        c.term = tid;
        if (!tid) {
          c.days = [];
          c.from = '';
          c.to = '';
          if (c.status === 'prog') c.status = 'none';
        } else {
          const t = s.terms.find((x) => x.id === tid);
          if (c.status === 'none' && t) {
            c.status = t.phase === 'current' ? 'prog' : 'none';
          }
        }
      });
      setSheetMode(null);
    },
    [update]
  );

  const dropCourse = useCallback(
    (id: CourseId) => {
      update((s) => {
        const c = s.c[id] ?? (s.c[id] = blankCourse());
        c.term = null;
        c.days = [];
        c.from = '';
        c.to = '';
        if (c.status === 'prog') c.status = 'none';
      });
    },
    [update]
  );

  const toggleDay = useCallback(
    (id: CourseId, day: number) => {
      update((s) => {
        const c = s.c[id] ?? (s.c[id] = blankCourse());
        const i = c.days.indexOf(day);
        if (i > -1) c.days.splice(i, 1);
        else c.days.push(day);
      });
    },
    [update]
  );

  const setTime = useCallback(
    (id: CourseId, field: 'from' | 'to', value: string) => {
      update((s) => {
        const c = s.c[id] ?? (s.c[id] = blankCourse());
        c[field] = value;
      });
    },
    [update]
  );

  const toggleGroup = useCallback(
    (groupId: string) => update((s) => { s.ui.open[groupId] = !s.ui.open[groupId]; }),
    [update]
  );
  const toggleHideDone = useCallback(
    () => update((s) => { s.ui.hideDone = !s.ui.hideDone; }),
    [update]
  );
  const toggleHideOut = useCallback(
    () => update((s) => { s.ui.hideOut = !s.ui.hideOut; }),
    [update]
  );
  const selectWeekTerm = useCallback(
    (tid: string) => update((s) => { s.ui.weekTerm = tid; }),
    [update]
  );

  const addTerm = useCallback(() => {
    update((s) => {
      const last = s.terms[s.terms.length - 1]?.name ?? '';
      const m = last.match(/^(Fall|Spring|Summer) (\d{4})$/);
      let next = 'New semester';
      if (m) {
        const y = +m[2];
        next =
          m[1] === 'Fall' ? `Spring ${y + 1}` : m[1] === 'Spring' ? `Summer ${y}` : `Fall ${y}`;
      }
      s.terms.push({ id: 't' + Date.now(), name: next, phase: 'future' });
    });
  }, [update]);

  const handleExport = useCallback(() => {
    if (!state) return;
    const blob = new Blob([JSON.stringify(state, null, 2)], {
      type: 'application/json',
    });
    const a = document.createElement('a');
    a.href = URL.createObjectURL(blob);
    a.download = 'radtech-progress.json';
    a.click();
    URL.revokeObjectURL(a.href);
  }, [state]);

  const handleImportFile = useCallback((file: File) => {
    const reader = new FileReader();
    reader.onload = () => {
      try {
        const d = JSON.parse(reader.result as string);
        if (d.terms && d.c) {
          setState({
            terms: d.terms,
            c: d.c,
            ui: Object.assign(
              { open: {}, hideDone: false, hideOut: false, weekTerm: d.terms[0]?.id },
              d.ui || {}
            ),
          });
        } else {
          alert('That file is not a saved progress file.');
        }
      } catch {
        alert('Could not read that file.');
      }
    };
    reader.readAsText(file);
  }, []);

  const handleReset = useCallback(() => {
    if (confirm('Clear all progress and start over?')) {
      setState(blankState());
    }
  }, []);

  if (!state) {
    return (
      <div className="rt-app" style={{ display: 'flex', minHeight: '100vh', alignItems: 'center', justifyContent: 'center' }}>
        <Spinner />
      </div>
    );
  }

  let sheetContent:
    | { title: string; sub: string; sections: SheetSection[]; emptyMessage?: string }
    | null = null;

  if (sheetMode?.kind === 'term') {
    const id = sheetMode.id;
    const c = C[id];
    const cur = termOf(state, id);
    const options = state.terms.map((t) => {
      const pc = prereqCheck(state, id, t.id);
      return {
        key: t.id,
        code: t.name,
        title: pc.ok
          ? cur === t.id
            ? 'Currently scheduled here'
            : 'Available'
          : `Needs ${pc.missing.join(' + ')} in an earlier semester`,
        disabled: !pc.ok,
        badge: cur === t.id ? 'Set' : undefined,
        onClick: () => setTerm(id, t.id),
      };
    });
    if (cur) {
      options.push({
        key: 'remove',
        code: 'Remove',
        title: 'Take it off the schedule',
        disabled: false,
        badge: undefined,
        onClick: () => setTerm(id, null),
      });
    }
    sheetContent = {
      title: c.code,
      sub: `${c.t} · ${c.u} units`,
      sections: [{ options }],
    };
  } else if (sheetMode?.kind === 'add') {
    const tid = sheetMode.termId;
    const t = state.terms.find((x) => x.id === tid);
    const taken = new Set(coursesInTerm(state, tid));
    const sections: SheetSection[] = [];
    GROUPS.forEach((g) => {
      const out = ruledOut(state, g);
      const list =
        g.kind === 'combo'
          ? [...(g.solo ?? []), ...(g.slotA ?? []), ...(g.slotB ?? [])]
          : g.list ?? [];
      const items = list.filter(
        (id) => !taken.has(id) && st(state, id) !== 'done' && !out.has(id)
      );
      if (!items.length) return;
      sections.push({
        label: g.name,
        options: items.map((id) => {
          const pc = prereqCheck(state, id, tid);
          return {
            key: id,
            code: C[id].code,
            title: (
              <>
                {C[id].t}
                {!pc.ok ? (
                  <span className="warn">Needs {pc.missing.join(' + ')} first</span>
                ) : null}
              </>
            ),
            right: `${C[id].u}u`,
            disabled: !pc.ok,
            onClick: () => setTerm(id, tid),
          };
        }),
      });
    });
    const sup = SUPPORT_IDS.filter((id) => !taken.has(id) && st(state, id) !== 'done');
    if (sup.length) {
      sections.push({
        label: "Supporting classes (don't count toward 27)",
        options: sup.map((id) => ({
          key: id,
          code: C[id].code,
          title: C[id].t,
          right: `${C[id].u}u`,
          onClick: () => setTerm(id, tid),
        })),
      });
    }
    sheetContent = {
      title: `Add to ${t?.name ?? ''}`,
      sub: 'Greyed-out classes need a prerequisite in an earlier semester.',
      sections,
      emptyMessage: 'Every remaining requirement is already scheduled or done.',
    };
  }

  return (
    <div className="rt-app">
      <header>
        <div className="brandrow">
          <div className="brand">
            Rad<span>Tech</span> Prereqs
          </div>
          <div className="who">SRJC · AS · Fall 2026 catalog</div>
        </div>
        <Gauge state={state} groups={GROUPS} />
        <nav className="tabs" role="tablist">
          <button role="tab" aria-selected={tab === 'req'} onClick={() => setTab('req')}>
            Requirements
          </button>
          <button role="tab" aria-selected={tab === 'plan'} onClick={() => setTab('plan')}>
            Plan
          </button>
          <button role="tab" aria-selected={tab === 'week'} onClick={() => setTab('week')}>
            Week
          </button>
        </nav>
      </header>

      <main>
        {tab === 'req' && (
          <RequirementsView
            state={state}
            onToggleGroup={toggleGroup}
            onCycle={cycle}
            onOpenTerm={(id) => setSheetMode({ kind: 'term', id })}
            onToggleHideDone={toggleHideDone}
            onToggleHideOut={toggleHideOut}
          />
        )}
        {tab === 'plan' && (
          <PlannerView
            state={state}
            onCycle={cycle}
            onDrop={dropCourse}
            onToggleDay={toggleDay}
            onTimeChange={setTime}
            onOpenAdd={(termId) => setSheetMode({ kind: 'add', termId })}
            onAddTerm={addTerm}
            onExport={handleExport}
            onImportClick={() => fileInputRef.current?.click()}
            onReset={handleReset}
          />
        )}
        {tab === 'week' && <WeekView state={state} onSelectTerm={selectWeekTerm} />}
      </main>

      <input
        type="file"
        accept="application/json"
        ref={fileInputRef}
        hidden
        onChange={(e) => {
          const f = e.target.files?.[0];
          if (f) handleImportFile(f);
          e.target.value = '';
        }}
      />

      <footer>
        Requirements pulled from the SRJC Radiologic Technology (AS) program of study, catalog
        effective Fall&nbsp;2026.
        <br />
        Always confirm with a counselor before you register —{' '}
        <a
          href="https://portal.santarosa.edu/SRWeb/SR_ProgramOfStudy.aspx?MajorCertID=3126"
          target="_blank"
          rel="noopener noreferrer"
        >
          program of study
        </a>{' '}
        ·{' '}
        <a href="http://radtech.santarosa.edu/" target="_blank" rel="noopener noreferrer">
          Health Sciences
        </a>{' '}
        · (707) 527-4346
      </footer>

      <Sheet
        open={!!sheetMode}
        title={sheetContent?.title ?? ''}
        sub={sheetContent?.sub ?? ''}
        sections={sheetContent?.sections ?? []}
        emptyMessage={sheetContent?.emptyMessage}
        onClose={() => setSheetMode(null)}
      />
    </div>
  );
}
