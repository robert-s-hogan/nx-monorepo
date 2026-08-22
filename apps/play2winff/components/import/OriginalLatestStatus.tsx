import { ListType, RankingSnapshot } from '../../lib/rankings';
import { useOriginalAndLatest } from '../../hooks/useSnapshots';

const LIST_TYPES: ListType[] = ['ppr', 'superflex'];

function fmtDate(iso: string) {
  return new Date(iso).toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
    hour: 'numeric',
    minute: '2-digit',
  });
}

const SnapshotRow = ({
  role,
  snapshot,
}: {
  role: 'Original' | 'Latest';
  snapshot: RankingSnapshot | null;
}) => (
  <div className="flex items-center justify-between rounded-lg border border-slate-200 bg-white px-4 py-2.5 text-sm shadow-sm">
    <span className="font-medium text-slate-800">{role}</span>
    {snapshot ? (
      <span className="text-xs text-slate-500">
        {fmtDate(snapshot.created_at)} · {snapshot.count} players
      </span>
    ) : (
      <span className="text-xs text-slate-400">Not set yet</span>
    )}
  </div>
);

const ListTypeStatus = ({ listType }: { listType: ListType }) => {
  const { original, latest, isLoading } = useOriginalAndLatest(listType);

  return (
    <div>
      <span
        className={`mb-2 inline-block rounded px-2 py-0.5 text-[11px] font-semibold uppercase ${
          listType === 'ppr'
            ? 'bg-blue-100 text-blue-700'
            : 'bg-purple-100 text-purple-700'
        }`}
      >
        {listType}
      </span>
      {isLoading ? (
        <p className="text-sm text-slate-400">Loading…</p>
      ) : (
        <div className="space-y-2">
          <SnapshotRow role="Original" snapshot={original} />
          <SnapshotRow role="Latest" snapshot={latest} />
        </div>
      )}
    </div>
  );
};

export const OriginalLatestStatus = () => (
  <div className="space-y-6">
    <h2 className="text-sm font-semibold text-slate-700">Rankings status</h2>
    {LIST_TYPES.map((listType) => (
      <ListTypeStatus key={listType} listType={listType} />
    ))}
  </div>
);
