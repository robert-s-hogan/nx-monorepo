import { useState } from 'react';
import { useAuth } from '@with-nx/auth';

import PlayToWinFFLayout from '../components/P2WFFLayout';
import { LeagueProfile } from '../lib/leagues';
import {
  useLeagues,
  createLeague,
  updateLeague,
  deleteLeague,
} from '../hooks/useLeagues';
import { LeagueList } from '../components/leagues/LeagueList';
import { LeagueForm, LeagueFormValue } from '../components/leagues/LeagueForm';

const Leagues = () => {
  const { role } = useAuth();
  const canEdit = role === 'family' || role === 'limited';
  const { leagues, isLoading, refresh } = useLeagues();
  const [editing, setEditing] = useState<LeagueProfile | null | undefined>(
    undefined
  );

  async function save(value: LeagueFormValue) {
    if (editing) {
      await updateLeague(editing.id, value);
    } else {
      await createLeague(value);
    }
    await refresh();
    setEditing(undefined);
  }

  async function remove(league: LeagueProfile) {
    if (!confirm(`Delete "${league.name}"?`)) return;
    await deleteLeague(league.id);
    await refresh();
  }

  return (
    <PlayToWinFFLayout title="Play2WinFF | League Profiles">
      <div className="mx-auto max-w-4xl space-y-6 p-6">
        <div className="flex items-center justify-between">
          <h1 className="text-lg font-semibold text-slate-800">
            League Profiles
          </h1>
          {canEdit && (
            <button
              onClick={() => setEditing(null)}
              className="rounded-md bg-slate-900 px-3 py-1.5 text-sm text-white transition hover:bg-slate-700"
            >
              + New League
            </button>
          )}
        </div>

        <LeagueList
          leagues={leagues}
          isLoading={isLoading}
          onEdit={setEditing}
          onDelete={remove}
          canEdit={canEdit}
        />
      </div>

      {canEdit && editing !== undefined && (
        <LeagueForm
          editing={editing}
          onSave={save}
          onClose={() => setEditing(undefined)}
        />
      )}
    </PlayToWinFFLayout>
  );
};

// Public: league list is viewable by anyone. Create/edit/delete are gated
// on canEdit (role === 'family' || role === 'limited').
Leagues.isPublic = true;

export default Leagues;
