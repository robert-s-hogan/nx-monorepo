// hooks/useDraftSession.ts
// Owns the "launched" draft board state: loaded players, roster slots, bench,
// and the draft/release actions. Mirrors the Vue app's DraftView local state.
import { useMemo, useState } from 'react';

import { LeagueProfile, SlotDef } from '../lib/leagues';
import type { DraftPlayer } from '../lib/server/draft';

export type DisplayItem =
  | { type: 'header'; round: number }
  | { type: 'player'; data: DraftPlayer };

export type RosterEntry = { slot: SlotDef; player: DraftPlayer | null };

export function useDraftSession(league: LeagueProfile | null) {
  const [players, setPlayers] = useState<DraftPlayer[]>([]);
  const [rosterSlots, setRosterSlots] = useState<RosterEntry[]>([]);
  const [bench, setBench] = useState<DraftPlayer[]>([]);
  const [hiddenIds, setHiddenIds] = useState<Set<string>>(new Set());
  const [loadingPlayers, setLoadingPlayers] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [launched, setLaunched] = useState(false);

  async function launch(snapshotId: number, prevSnapshotId: number | null) {
    if (!league) return;
    setLoadingPlayers(true);
    setError(null);
    try {
      const params = prevSnapshotId ? `?prev=${prevSnapshotId}` : '';
      const res = await fetch(`/api/snapshots/${snapshotId}${params}`);
      if (!res.ok) throw new Error('Failed to load players');
      const loaded: DraftPlayer[] = await res.json();
      setPlayers(loaded);
      setRosterSlots(league.roster_config.map((slot) => ({ slot, player: null })));
      setBench([]);
      setHiddenIds(new Set());
      setLaunched(true);
    } catch (e) {
      setError(e instanceof Error ? e.message : 'Failed to load players');
    } finally {
      setLoadingPlayers(false);
    }
  }

  function resetDraft() {
    setLaunched(false);
    setPlayers([]);
    setRosterSlots([]);
    setBench([]);
    setHiddenIds(new Set());
  }

  function draftToMyTeam(player: DraftPlayer) {
    const idx = rosterSlots.findIndex(
      (s) => !s.player && s.slot.positions.includes(player.position ?? '')
    );
    if (idx >= 0) {
      setRosterSlots((prev) => {
        const next = [...prev];
        next[idx] = { ...next[idx], player };
        return next;
      });
    } else {
      setBench((prev) => [...prev, player]);
    }
    setHiddenIds((prev) => new Set(prev).add(player.name_canon));
  }

  function draftedByOther(player: DraftPlayer) {
    setHiddenIds((prev) => new Set(prev).add(player.name_canon));
  }

  function releaseFromRoster(idx: number) {
    const p = rosterSlots[idx]?.player;
    if (!p) return;
    setRosterSlots((prev) => {
      const next = [...prev];
      next[idx] = { ...next[idx], player: null };
      return next;
    });
    setHiddenIds((prev) => {
      const next = new Set(prev);
      next.delete(p.name_canon);
      return next;
    });
  }

  function releaseFromBench(idx: number) {
    const p = bench[idx];
    if (!p) return;
    setBench((prev) => prev.filter((_, i) => i !== idx));
    setHiddenIds((prev) => {
      const next = new Set(prev);
      next.delete(p.name_canon);
      return next;
    });
  }

  function setNoteFor(nameCanon: string, note: string) {
    setPlayers((prev) =>
      prev.map((p) => (p.name_canon === nameCanon ? { ...p, note } : p))
    );
  }

  const visiblePlayers = useMemo(
    () => players.filter((p) => !hiddenIds.has(p.name_canon)),
    [players, hiddenIds]
  );

  const activePlayers = useMemo(
    () =>
      visiblePlayers
        .filter((p) => !p.dropped)
        .sort((a, b) => a.rank - b.rank),
    [visiblePlayers]
  );

  const droppedPlayers = useMemo(
    () =>
      visiblePlayers
        .filter((p) => p.dropped)
        .sort((a, b) => (a.lastRank ?? 999) - (b.lastRank ?? 999)),
    [visiblePlayers]
  );

  const displayList = useMemo<DisplayItem[]>(() => {
    const teams = league?.teams ?? 12;
    const size = Math.max(1, teams);
    const list: DisplayItem[] = [];
    let currentRound = 0;
    for (const p of activePlayers) {
      const neededRound = Math.floor((p.rank - 1) / size) + 1;
      if (neededRound !== currentRound) {
        currentRound = neededRound;
        list.push({ type: 'header', round: currentRound });
      }
      list.push({ type: 'player', data: p });
    }
    return list;
  }, [activePlayers, league]);

  const draftedCount = useMemo(
    () => rosterSlots.filter((s) => s.player).length + bench.length,
    [rosterSlots, bench]
  );

  const totalStarters = rosterSlots.length;

  return {
    launched,
    loadingPlayers,
    error,
    rosterSlots,
    bench,
    displayList,
    droppedPlayers,
    draftedCount,
    totalStarters,
    launch,
    resetDraft,
    draftToMyTeam,
    draftedByOther,
    releaseFromRoster,
    releaseFromBench,
    setNoteFor,
  };
}
