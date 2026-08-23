import { useAuth } from '@with-nx/auth';

import PlayToWinFFLayout from '../components/P2WFFLayout';
import { RankingsImportForm } from '../components/import/RankingsImportForm';
import { OriginalLatestStatus } from '../components/import/OriginalLatestStatus';
import { SleeperAdpImportForm } from '../components/import/SleeperAdpImportForm';

const Import = () => {
  const { role } = useAuth();
  const canEdit = role === 'family' || role === 'limited';

  return (
    <PlayToWinFFLayout title="Play2WinFF | Import Rankings">
      <div className="mx-auto max-w-5xl space-y-8 p-6">
        <h1 className="text-lg font-semibold text-slate-800">
          Import Rankings
        </h1>

        {canEdit && <RankingsImportForm />}

        <OriginalLatestStatus />

        {canEdit && (
          <div>
            <h2 className="mb-2 text-sm font-semibold text-slate-800">
              Sleeper ADP
            </h2>
            <SleeperAdpImportForm />
          </div>
        )}
      </div>
    </PlayToWinFFLayout>
  );
};

// Public: rankings status is viewable by anyone. Importing is gated on
// canEdit (role === 'family' || role === 'limited').
Import.isPublic = true;

export default Import;
