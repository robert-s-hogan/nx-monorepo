import { useEffect, useState } from 'react';
import { useAuth } from '@with-nx/auth';

import PlayToWinFFLayout from '../components/P2WFFLayout';
import { useLeagues } from '../hooks/useLeagues';
import { useOriginalAndLatest } from '../hooks/useSnapshots';
import { useDraftSession } from '../hooks/useDraftSession';
import { DraftSetup } from '../components/draft/DraftSetup';
import { DraftBoard } from '../components/draft/DraftBoard';

const Draft = () => {
  const { role } = useAuth();
  const canEdit = role === 'family' || role === 'limited';
  const { leagues, isLoading: leaguesLoading } = useLeagues();

  const [selectedLeagueId, setSelectedLeagueId] = useState<number | null>(null);
  const [draftSlot, setDraftSlot] = useState(1);

  const selectedLeague = leagues.find((l) => l.id === selectedLeagueId) ?? null;
  const listType = selectedLeague?.default_list_type ?? 'ppr';

  const { original, latest, isLoading: rankingsLoading } =
    useOriginalAndLatest(listType);

  const session = useDraftSession(selectedLeague);

  // Auto-select the first league, matching the source app's behavior.
  useEffect(() => {
    if (!selectedLeagueId && leagues.length) {
      setSelectedLeagueId(leagues[0].id);
    }
  }, [leagues, selectedLeagueId]);

  const loading = leaguesLoading;

  return (
    <PlayToWinFFLayout title="Play2WinFF Draft Dominator">
      {loading && <p className="p-8 text-sm text-slate-500">Loading…</p>}
      {session.error && (
        <p className="p-4 text-sm text-red-600">{session.error}</p>
      )}

      {!loading && !session.launched && (
        <DraftSetup
          leagues={leagues}
          selectedLeagueId={selectedLeagueId}
          original={original}
          latest={latest}
          rankingsLoading={rankingsLoading}
          draftSlot={draftSlot}
          loadingPlayers={session.loadingPlayers}
          onSelectLeague={setSelectedLeagueId}
          onChangeDraftSlot={setDraftSlot}
          onLaunch={() => {
            if (latest) session.launch(latest.id, original?.id ?? null);
          }}
        />
      )}

      {session.launched && selectedLeague && (
        <DraftBoard
          league={selectedLeague}
          snapshot={latest}
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
          onInjurySaved={session.setInjuryFor}
          onToggleTag={session.toggleTag}
          onSetRisk={session.setRisk}
          canEdit={canEdit}
        />
      )}
    </PlayToWinFFLayout>
  );
};

// Public: the draft board is viewable/usable by anyone (draft picks are
// simulated client-side, never persisted). Only saving a player note is
// gated on canEdit (role === 'family' || role === 'limited').
Draft.isPublic = true;

export default Draft;
