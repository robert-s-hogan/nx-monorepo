import { useMemo, useState } from 'react';

import { ParsedRow, parsePaste } from '../../lib/rankings';
import { replaceSleeperAdp, useSleeperAdpStatus } from '../../hooks/useSleeperAdp';

export const SleeperAdpImportForm = () => {
  const [pasteText, setPasteText] = useState('');
  const [parsed, setParsed] = useState<ParsedRow[]>([]);
  const [committing, setCommitting] = useState(false);
  const [committed, setCommitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const { count, lastUpdated, refresh } = useSleeperAdpStatus();

  function onPaste(text: string) {
    setPasteText(text);
    setCommitted(false);
    setParsed(parsePaste(text));
  }

  const goodRows = useMemo(() => parsed.filter((r) => r.parseOk), [parsed]);
  const badRows = useMemo(() => parsed.filter((r) => !r.parseOk), [parsed]);
  const hasParsed = parsed.length > 0;

  async function commit() {
    if (!goodRows.length) return;
    setCommitting(true);
    setError(null);
    try {
      const result = await replaceSleeperAdp(goodRows);
      if ('error' in result) {
        setError(result.error);
        return;
      }
      setPasteText('');
      setParsed([]);
      setCommitted(true);
      refresh();
    } finally {
      setCommitting(false);
    }
  }

  return (
    <div className="space-y-4 rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
      {error && <p className="text-sm text-red-600">{error}</p>}

      <div className="flex items-center justify-between">
        <label className="block text-xs font-medium text-slate-600">
          Paste Sleeper ADP (rank · name · team · position)
        </label>
        <span className="text-xs text-slate-400">
          {count} player{count === 1 ? '' : 's'} tracked
          {lastUpdated
            ? ` · updated ${new Date(lastUpdated).toLocaleDateString()}`
            : ''}
        </span>
      </div>

      <textarea
        value={pasteText}
        onChange={(e) => onPaste(e.target.value)}
        rows={10}
        placeholder={"1  Saquon Barkley  NYG  RB\n2  Ja'Marr Chase   CIN  WR\n…"}
        spellCheck={false}
        className="w-full resize-y rounded border border-slate-300 px-3 py-2 font-mono text-xs focus:ring-2 focus:ring-slate-400 focus:outline-none"
      />

      {hasParsed && (
        <div className="flex flex-wrap items-center gap-4 text-sm">
          <span className="font-medium text-emerald-700">
            ✓ {goodRows.length} parsed
          </span>
          {badRows.length > 0 && (
            <span className="text-amber-600">⚠ {badRows.length} skipped</span>
          )}
          <button
            onClick={commit}
            disabled={committing || !goodRows.length}
            className="ml-auto rounded-md bg-slate-900 px-4 py-1.5 text-sm text-white transition hover:bg-slate-700 disabled:opacity-40"
          >
            {committing ? 'Saving…' : 'Update Sleeper ADP'}
          </button>
        </div>
      )}

      {committed && (
        <p className="text-sm font-medium text-emerald-600">
          ✓ Sleeper ADP updated successfully.
        </p>
      )}

      {hasParsed && (
        <div className="overflow-hidden rounded-xl border border-slate-200">
          <div className="border-b border-slate-100 px-4 py-2 text-xs font-semibold tracking-wide text-slate-600 uppercase">
            Parse preview
          </div>
          <div className="max-h-96 overflow-auto">
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
