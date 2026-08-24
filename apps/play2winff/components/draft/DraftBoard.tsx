import { useState } from 'react';

import { LeagueProfile } from '../../lib/leagues';
import { RankingSnapshot } from '../../lib/rankings';
import type { DraftPlayer } from '../../lib/server/draft';
import type { PlayerInjury } from '../../hooks/usePlayerInjury';
import { RosterEntry, DisplayItem } from '../../hooks/useDraftSession';
import { RosterSidebar } from './RosterSidebar';
import { PlayerTable } from './PlayerTable';
import { PlayerDetailsModal } from './PlayerDetailsModal';

export interface DraftBoardProps {
  league: LeagueProfile;
  snapshot: RankingSnapshot | null;
  draftSlot: number;
  rosterSlots: RosterEntry[];
  bench: DraftPlayer[];
  displayList: DisplayItem[];
  droppedPlayers: DraftPlayer[];
  draftedCount: number;
  currentPick: number;
  totalStarters: number;
  onBack: () => void;
  onDraftToMyTeam: (player: DraftPlayer) => void;
  onDraftedByOther: (player: DraftPlayer) => void;
  onReleaseFromRoster: (idx: number) => void;
  onReleaseFromBench: (idx: number) => void;
  onNoteSaved: (nameCanon: string, note: string) => void;
  onInjurySaved: (nameCanon: string, injury: PlayerInjury | null) => void;
  onTeamSaved: (nameCanon: string, team: string | null) => void;
  onToggleTag: (player: DraftPlayer, tagId: number) => void;
  onSetRisk: (player: DraftPlayer, value: number | null) => void;
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
  currentPick,
  totalStarters,
  onBack,
  onDraftToMyTeam,
  onDraftedByOther,
  onReleaseFromRoster,
  onReleaseFromBench,
  onNoteSaved,
  onInjurySaved,
  onTeamSaved,
  onToggleTag,
  onSetRisk,
  canEdit,
}: DraftBoardProps) => {
  const [noteTarget, setNoteTarget] = useState<DraftPlayer | null>(null);

  return (
    <div className="flex h-[calc(100vh-3rem)] flex-col">
      <div className="flex flex-wrap items-center gap-4 border-b border-border-color bg-surface-color px-4 py-2 text-xs text-text-color">
        <span className="font-semibold">{league.name}</span>
        <span className="opacity-70">{snapshot?.label}</span>
        <span className="opacity-70">Slot {draftSlot}</span>
        <span className="opacity-70">
          {draftedCount} / {totalStarters + league.bench_spots} drafted
        </span>
        <button
          onClick={onBack}
          className="ml-auto rounded border border-border-color px-2.5 py-1 text-xs transition hover:bg-hover-color"
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
          teams={league.teams}
          currentPick={currentPick}
          onOpenNotes={setNoteTarget}
          onDraftToMyTeam={onDraftToMyTeam}
          onDraftedByOther={onDraftedByOther}
          onToggleTag={onToggleTag}
          onSetRisk={onSetRisk}
          canEditTags={canEdit}
        />
      </div>

      {noteTarget && (
        <PlayerDetailsModal
          player={noteTarget}
          onClose={() => setNoteTarget(null)}
          onNoteSaved={(nameCanon, note) => {
            onNoteSaved(nameCanon, note);
            setNoteTarget((prev) => (prev ? { ...prev, note } : prev));
          }}
          onInjurySaved={(nameCanon, injury) => {
            onInjurySaved(nameCanon, injury);
            setNoteTarget((prev) => (prev ? { ...prev, injury } : prev));
          }}
          onTeamSaved={(nameCanon, team) => {
            onTeamSaved(nameCanon, team);
            setNoteTarget((prev) => (prev ? { ...prev, team } : prev));
          }}
          canEdit={canEdit}
        />
      )}
    </div>
  );
};
