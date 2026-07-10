import { useState } from 'react';

import { LeagueProfile } from '../../lib/leagues';
import { RankingSnapshot } from '../../lib/rankings';
import type { DraftPlayer } from '../../lib/server/draft';
import { RosterEntry, DisplayItem } from '../../hooks/useDraftSession';
import { RosterSidebar } from './RosterSidebar';
import { PlayerTable } from './PlayerTable';
import { PlayerNotesModal } from './PlayerNotesModal';

export interface DraftBoardProps {
  league: LeagueProfile;
  snapshot: RankingSnapshot | null;
  draftSlot: number;
  rosterSlots: RosterEntry[];
  bench: DraftPlayer[];
  displayList: DisplayItem[];
  droppedPlayers: DraftPlayer[];
  draftedCount: number;
  totalStarters: number;
  onBack: () => void;
  onDraftToMyTeam: (player: DraftPlayer) => void;
  onDraftedByOther: (player: DraftPlayer) => void;
  onReleaseFromRoster: (idx: number) => void;
  onReleaseFromBench: (idx: number) => void;
  onNoteSaved: (nameCanon: string, note: string) => void;
  canEdit: boolean;
}

export const DraftBoard = ({
  league,
  snapshot,
  draftSlot,
  rosterSlots,
  bench,
  displayList,
  droppedPlayers,
  draftedCount,
  totalStarters,
  onBack,
  onDraftToMyTeam,
  onDraftedByOther,
  onReleaseFromRoster,
  onReleaseFromBench,
  onNoteSaved,
  canEdit,
}: DraftBoardProps) => {
  const [noteTarget, setNoteTarget] = useState<DraftPlayer | null>(null);

  return (
    <div className="flex h-[calc(100vh-3rem)] flex-col">
      <div className="flex flex-wrap items-center gap-4 border-b border-slate-200 bg-white px-4 py-2 text-xs text-slate-600">
        <span className="font-semibold text-slate-800">{league.name}</span>
        <span>{snapshot?.label}</span>
        <span>Slot {draftSlot}</span>
        <span>
          {draftedCount} / {totalStarters + league.bench_spots} drafted
        </span>
        <button
          onClick={onBack}
          className="ml-auto rounded border border-slate-300 px-2.5 py-1 text-xs transition hover:bg-slate-50"
        >
          ← Back
        </button>
      </div>

      <div className="flex flex-1 overflow-hidden">
        <RosterSidebar
          rosterSlots={rosterSlots}
          bench={bench}
          benchSpots={league.bench_spots}
          onReleaseFromRoster={onReleaseFromRoster}
          onReleaseFromBench={onReleaseFromBench}
        />
        <PlayerTable
          displayList={displayList}
          droppedPlayers={droppedPlayers}
          onOpenNotes={setNoteTarget}
          onDraftToMyTeam={onDraftToMyTeam}
          onDraftedByOther={onDraftedByOther}
        />
      </div>

      {noteTarget && (
        <PlayerNotesModal
          player={noteTarget}
          onClose={() => setNoteTarget(null)}
          onNoteSaved={(nameCanon, note) => {
            onNoteSaved(nameCanon, note);
            setNoteTarget((prev) => (prev ? { ...prev, note } : prev));
          }}
          canEdit={canEdit}
        />
      )}
    </div>
  );
};
