import { RankingSnapshot } from '../../lib/rankings';
import { deleteSnapshot } from '../../hooks/useSnapshots';

export interface SnapshotListProps {
  snapshots: RankingSnapshot[];
  isLoading: boolean;
  onDeleted: () => void;
}

function fmtDate(iso: string) {
  return new Date(iso).toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
    hour: 'numeric',
    minute: '2-digit',
  });
}

export const SnapshotList = ({
  snapshots,
  isLoading,
  onDeleted,
}: SnapshotListProps) => {
  async function remove(snap: RankingSnapshot) {
    if (!confirm(`Delete snapshot "${snap.label}"?`)) return;
    await deleteSnapshot(snap.id);
    onDeleted();
  }

  return (
    <div>
      <h2 className="mb-3 text-sm font-semibold text-slate-700">
        Saved snapshots
      </h2>
      {isLoading ? (
        <p className="text-sm text-slate-400">Loading…</p>
      ) : (
        <div className="space-y-2">
          {snapshots.map((snap) => (
            <div
              key={snap.id}
              className="flex items-center justify-between rounded-lg border border-slate-200 bg-white px-4 py-2.5 text-sm shadow-sm"
            >
              <div className="flex items-center gap-3">
                <span
                  className={`rounded px-2 py-0.5 text-[11px] font-semibold uppercase ${
                    snap.list_type === 'ppr'
                      ? 'bg-blue-100 text-blue-700'
                      : 'bg-purple-100 text-purple-700'
                  }`}
                >
                  {snap.list_type}
                </span>
                <span className="font-medium text-slate-800">{snap.label}</span>
                <span className="text-xs text-slate-400">
                  {snap.count} players
                </span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-xs text-slate-400">
                  {fmtDate(snap.created_at)}
                </span>
                <button
                  onClick={() => remove(snap)}
                  className="text-xs text-red-500 transition hover:text-red-700"
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
          {!snapshots.length && (
            <p className="text-sm text-slate-400">No snapshots yet.</p>
          )}
        </div>
      )}
    </div>
  );
};
