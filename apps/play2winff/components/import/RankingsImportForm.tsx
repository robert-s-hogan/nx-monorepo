import { useMemo, useState } from 'react';

import { ListType, ParsedRow, parsePaste } from '../../lib/rankings';
import { commitSnapshot } from '../../hooks/useSnapshots';

export interface RankingsImportFormProps {
  onCommitted: () => void;
}

export const RankingsImportForm = ({ onCommitted }: RankingsImportFormProps) => {
  const [pasteText, setPasteText] = useState('');
  const [listType, setListType] = useState<ListType>('ppr');
  const [label, setLabel] = useState('');
  const [parsed, setParsed] = useState<ParsedRow[]>([]);
  const [committing, setCommitting] = useState(false);
  const [committed, setCommitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  function onPaste(text: string) {
    setPasteText(text);
    setCommitted(false);
    const rows = parsePaste(text);
    setParsed(rows);
    if (!label) {
      const d = new Date();
      setLabel(
        `${listType.toUpperCase()} ${d.getMonth() + 1}/${d.getDate()}/${d.getFullYear()}`
      );
    }
  }

  const goodRows = useMemo(() => parsed.filter((r) => r.parseOk), [parsed]);
  const badRows = useMemo(() => parsed.filter((r) => !r.parseOk), [parsed]);
  const hasParsed = parsed.length > 0;

  async function commit() {
    if (!goodRows.length || !label.trim()) return;
    setCommitting(true);
    setError(null);
    try {
      await commitSnapshot(goodRows, listType, label.trim());
      setPasteText('');
      setParsed([]);
      setLabel('');
      setCommitted(true);
      onCommitted();
    } catch (e) {
      setError(e instanceof Error ? e.message : 'Commit failed');
    } finally {
      setCommitting(false);
    }
  }

  return (
    <div className="space-y-4 rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
      {error && <p className="text-sm text-red-600">{error}</p>}

      <div className="flex flex-wrap gap-4">
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
              PPR 300
            </label>
            <label className="flex cursor-pointer items-center gap-1.5 text-sm">
              <input
                type="radio"
                checked={listType === 'superflex'}
                onChange={() => setListType('superflex')}
              />
              Superflex 300
            </label>
          </div>
        </div>

        <div className="min-w-48 flex-1">
          <label className="mb-1 block text-xs font-medium text-slate-600">
            Snapshot label
          </label>
          <input
            type="text"
            value={label}
            onChange={(e) => setLabel(e.target.value)}
            placeholder="e.g. PPR 8/30/2026"
            className="w-full rounded border border-slate-300 px-3 py-1.5 text-sm focus:outline-none focus:ring-2 focus:ring-slate-400"
          />
        </div>
      </div>

      <div>
        <label className="mb-1 block text-xs font-medium text-slate-600">
          Paste rankings (rank · name · team · position)
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
        <div className="flex items-center gap-4 text-sm">
          <span className="font-medium text-emerald-700">
            ✓ {goodRows.length} parsed
          </span>
          {badRows.length > 0 && (
            <span className="text-amber-600">⚠ {badRows.length} skipped</span>
          )}
          <button
            onClick={commit}
            disabled={committing || !goodRows.length || !label.trim()}
            className="ml-auto rounded-md bg-slate-900 px-4 py-1.5 text-sm text-white transition hover:bg-slate-700 disabled:opacity-40"
          >
            {committing ? 'Saving…' : 'Commit snapshot'}
          </button>
        </div>
      )}

      {committed && (
        <p className="text-sm font-medium text-emerald-600">
          ✓ Snapshot saved successfully.
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
