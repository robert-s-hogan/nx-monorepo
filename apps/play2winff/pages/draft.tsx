import { useEffect, useState } from 'react';

import PlayToWinFFLayout from '../components/P2WFFLayout';
import { useLeagues } from '../hooks/useLeagues';
import { useSnapshots } from '../hooks/useSnapshots';
import { useDraftSession } from '../hooks/useDraftSession';
import { DraftSetup } from '../components/draft/DraftSetup';
import { DraftBoard } from '../components/draft/DraftBoard';

const Draft = () => {
  const { leagues, isLoading: leaguesLoading } = useLeagues();
  const { snapshots, isLoading: snapshotsLoading } = useSnapshots();

  const [selectedLeagueId, setSelectedLeagueId] = useState<number | null>(null);
  const [selectedSnapshotId, setSelectedSnapshotId] = useState<number | null>(null);
  const [prevSnapshotId, setPrevSnapshotId] = useState<number | null>(null);
  const [draftSlot, setDraftSlot] = useState(1);

  const selectedLeague = leagues.find((l) => l.id === selectedLeagueId) ?? null;

  const session = useDraftSession(selectedLeague);

  // Auto-select defaults once loaded, matching the source app's behavior.
  useEffect(() => {
    if (!selectedLeagueId && leagues.length) {
      setSelectedLeagueId(leagues[0].id);
    }
  }, [leagues, selectedLeagueId]);

  useEffect(() => {
    if (!selectedSnapshotId && selectedLeague && snapshots.length) {
      const match = snapshots.find(
        (s) => s.list_type === selectedLeague.default_list_type
      );
      if (match) setSelectedSnapshotId(match.id);
    }
  }, [snapshots, selectedLeague, selectedSnapshotId]);

  const selectedSnapshot = snapshots.find((s) => s.id === selectedSnapshotId) ?? null;

  const loading = leaguesLoading || snapshotsLoading;

  return (
    <PlayToWinFFLayout title="Play2WinFF Draft Dominator">
      {loading && <p className="p-8 text-sm text-slate-500">Loading…</p>}
      {session.error && (
        <p className="p-4 text-sm text-red-600">{session.error}</p>
      )}

      {!loading && !session.launched && (
        <DraftSetup
          leagues={leagues}
          snapshots={snapshots}
          selectedLeagueId={selectedLeagueId}
          selectedSnapshotId={selectedSnapshotId}
          prevSnapshotId={prevSnapshotId}
          draftSlot={draftSlot}
          loadingPlayers={session.loadingPlayers}
          onSelectLeague={setSelectedLeagueId}
          onSelectSnapshot={setSelectedSnapshotId}
          onSelectPrevSnapshot={setPrevSnapshotId}
          onChangeDraftSlot={setDraftSlot}
          onLaunch={() => {
            if (selectedSnapshotId) session.launch(selectedSnapshotId, prevSnapshotId);
          }}
        />
      )}

      {session.launched && selectedLeague && (
        <DraftBoard
          league={selectedLeague}
          snapshot={selectedSnapshot}
          draftSlot={draftSlot}
          rosterSlots={session.rosterSlots}
          bench={session.bench}
          displayList={session.displayList}
          droppedPlayers={session.droppedPlayers}
          draftedCount={session.draftedCount}
          totalStarters={session.totalStarters}
          onBack={session.resetDraft}
          onDraftToMyTeam={session.draftToMyTeam}
          onDraftedByOther={session.draftedByOther}
          onReleaseFromRoster={session.releaseFromRoster}
          onReleaseFromBench={session.releaseFromBench}
          onNoteSaved={session.setNoteFor}
        />
      )}
    </PlayToWinFFLayout>
  );
};

export default Draft;
