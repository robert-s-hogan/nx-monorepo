import { useMemo, useState } from 'react';

import { ListType, ParsedRow, parsePaste } from '../../lib/rankings';
import { commitSnapshot, useOriginalAndLatest } from '../../hooks/useSnapshots';

export const RankingsImportForm = () => {
  const [pasteText, setPasteText] = useState('');
  const [listType, setListType] = useState<ListType>('ppr');
  const [parsed, setParsed] = useState<ParsedRow[]>([]);
  const [committing, setCommitting] = useState(false);
  const [committedRole, setCommittedRole] = useState<null | 'original' | 'latest'>(
    null
  );
  const [error, setError] = useState<string | null>(null);

  const { original, refresh } = useOriginalAndLatest(listType);

  function onPaste(text: string) {
    setPasteText(text);
    setCommittedRole(null);
    setParsed(parsePaste(text));
  }

  const goodRows = useMemo(() => parsed.filter((r) => r.parseOk), [parsed]);
  const badRows = useMemo(() => parsed.filter((r) => !r.parseOk), [parsed]);
  const hasParsed = parsed.length > 0;

  async function commit(role: 'original' | 'latest') {
    if (!goodRows.length) return;
    if (
      role === 'latest' &&
      !confirm(`Replace the current Latest ${listType.toUpperCase()} list?`)
    ) {
      return;
    }
    setCommitting(true);
    setError(null);
    try {
      const result = await commitSnapshot(goodRows, listType, role);
      if ('error' in result) {
        setError(result.error);
        return;
      }
      setPasteText('');
      setParsed([]);
      setCommittedRole(role);
      refresh();
    } finally {
      setCommitting(false);
    }
  }

  return (
    <div className="space-y-4 rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
      {error && <p className="text-sm text-red-600">{error}</p>}

      <div>
        <label className="mb-1 block text-xs font-medium text-slate-600">
          Rankings type
        </label>
        <div className="flex gap-3">
          <label className="flex cursor-pointer items-center gap-1.5 text-sm">
            <input
              type="radio"
              checked={listType === 'ppr'}
              onChange={() => setListType('ppr')}
            />
            PPR
          </label>
          <label className="flex cursor-pointer items-center gap-1.5 text-sm">
            <input
              type="radio"
              checked={listType === 'superflex'}
              onChange={() => setListType('superflex')}
            />
            Superflex
          </label>
        </div>
      </div>

      <div>
        <label className="mb-1 block text-xs font-medium text-slate-600">
          Paste rankings (rank · name · team · position, or rank · name · POS#)
        </label>
        <textarea
          value={pasteText}
          onChange={(e) => onPaste(e.target.value)}
          rows={10}
          placeholder={"1  Saquon Barkley  NYG  RB\n2  Ja'Marr Chase   CIN  WR\n…"}
          spellCheck={false}
          className="w-full resize-y rounded border border-slate-300 px-3 py-2 font-mono text-xs focus:outline-none focus:ring-2 focus:ring-slate-400"
        />
      </div>

      {hasParsed && (
        <div className="flex flex-wrap items-center gap-4 text-sm">
          <span className="font-medium text-emerald-700">
            ✓ {goodRows.length} parsed
          </span>
          {badRows.length > 0 && (
            <span className="text-amber-600">⚠ {badRows.length} skipped</span>
          )}
          <div className="ml-auto flex items-center gap-2">
            {original ? (
              <span className="text-xs text-slate-400">
                Original set {new Date(original.created_at).toLocaleDateString()}
              </span>
            ) : (
              <button
                onClick={() => commit('original')}
                disabled={committing || !goodRows.length}
                className="rounded-md border border-slate-300 px-4 py-1.5 text-sm text-slate-700 transition hover:bg-slate-50 disabled:opacity-40"
              >
                {committing ? 'Saving…' : 'Set as Original'}
              </button>
            )}
            <button
              onClick={() => commit('latest')}
              disabled={committing || !goodRows.length}
              className="rounded-md bg-slate-900 px-4 py-1.5 text-sm text-white transition hover:bg-slate-700 disabled:opacity-40"
            >
              {committing ? 'Saving…' : 'Update Latest'}
            </button>
          </div>
        </div>
      )}

      {committedRole && (
        <p className="text-sm font-medium text-emerald-600">
          ✓ {committedRole === 'original' ? 'Original' : 'Latest'} saved
          successfully.
        </p>
      )}

      {hasParsed && (
        <div className="overflow-hidden rounded-xl border border-slate-200">
          <div className="border-b border-slate-100 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-slate-600">
            Parse preview
          </div>
          <div className="max-h-96 overflow-x-auto overflow-y-auto">
            <table className="min-w-full text-xs">
              <thead className="sticky top-0 bg-slate-50">
                <tr>
                  <th className="px-3 py-2 text-left font-semibold text-slate-600">#</th>
                  <th className="px-3 py-2 text-left font-semibold text-slate-600">Name</th>
                  <th className="px-3 py-2 text-left font-semibold text-slate-600">Team</th>
                  <th className="px-3 py-2 text-left font-semibold text-slate-600">Pos</th>
                  <th className="px-3 py-2 text-left font-semibold text-slate-600">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {parsed.map((row) => (
                  <tr key={row.rank} className={row.parseOk ? '' : 'bg-amber-50'}>
                    <td className="px-3 py-1.5 text-slate-500">{row.rank}</td>
                    <td className="px-3 py-1.5 font-medium text-slate-800">
                      {row.name || '—'}
                    </td>
                    <td className="px-3 py-1.5 text-slate-600">{row.team ?? '—'}</td>
                    <td className="px-3 py-1.5 text-slate-600">{row.position ?? '—'}</td>
                    <td className="px-3 py-1.5">
                      {row.parseOk ? (
                        <span className="text-emerald-600">✓</span>
                      ) : (
                        <span className="text-amber-600" title={row.rawLine}>
                          ⚠ check
                        </span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
};
