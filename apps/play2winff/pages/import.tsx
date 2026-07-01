import PlayToWinFFLayout from '../components/P2WFFLayout';
import { useSnapshots } from '../hooks/useSnapshots';
import { RankingsImportForm } from '../components/import/RankingsImportForm';
import { SnapshotList } from '../components/import/SnapshotList';

const Import = () => {
  const { snapshots, isLoading, refresh } = useSnapshots();

  return (
    <PlayToWinFFLayout title="Play2WinFF | Import Rankings">
      <div className="mx-auto max-w-5xl space-y-8 p-6">
        <h1 className="text-lg font-semibold text-slate-800">
          Import Rankings
        </h1>

        <RankingsImportForm onCommitted={() => refresh()} />

        <SnapshotList
          snapshots={snapshots}
          isLoading={isLoading}
          onDeleted={() => refresh()}
        />
      </div>
    </PlayToWinFFLayout>
  );
};

export default Import;
