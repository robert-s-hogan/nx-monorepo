import type { DraftPlayer } from '../../lib/server/draft';
import { DisplayItem } from '../../hooks/useDraftSession';
import { posClass } from './posClass';

export interface PlayerTableProps {
  displayList: DisplayItem[];
  droppedPlayers: DraftPlayer[];
  onOpenNotes: (player: DraftPlayer) => void;
  onDraftToMyTeam: (player: DraftPlayer) => void;
  onDraftedByOther: (player: DraftPlayer) => void;
}

export const PlayerTable = ({
  displayList,
  droppedPlayers,
  onOpenNotes,
  onDraftToMyTeam,
  onDraftedByOther,
}: PlayerTableProps) => {
  return (
    <main className="flex-1 overflow-y-auto">
      <table className="min-w-full table-fixed border-collapse text-xs">
        <thead className="sticky top-0 z-10 bg-slate-100">
          <tr className="select-none">
            <th className="w-10 border-b border-slate-300 px-2 py-2 text-center font-semibold">
              #
            </th>
            <th className="w-14 border-b border-slate-300 px-2 py-2 text-center font-semibold">
              Pos
            </th>
            <th className="border-b border-slate-300 px-3 py-2 text-left font-semibold">
              Player
            </th>
            <th className="w-14 border-b border-slate-300 px-2 py-2 text-center font-semibold">
              Team
            </th>
            <th className="w-36 border-b border-slate-300 px-2 py-2 text-center font-semibold">
              Draft
            </th>
          </tr>
        </thead>
        <tbody>
          {displayList.map((item) =>
            item.type === 'header' ? (
              <tr key={`h${item.round}`}>
                <td
                  colSpan={5}
                  className="select-none border-y border-slate-300 bg-slate-200 py-1 text-center font-semibold"
                >
                  Round {item.round}
                </td>
              </tr>
            ) : (
              <tr
                key={item.data.name_canon}
                className={`select-none cursor-default hover:brightness-95 ${posClass(
                  item.data.position
                )}`}
              >
                <td className="border-b border-slate-200 px-2 py-1.5 text-center text-slate-600">
                  {item.data.rank}
                </td>
                <td className="border-b border-slate-200 px-2 py-1.5 text-center font-semibold">
                  {item.data.position ?? '—'}
                </td>
                <td className="border-b border-slate-200 px-3 py-1.5">
                  <div className="flex flex-col">
                    <button
                      onClick={() => onOpenNotes(item.data)}
                      className="text-left font-medium leading-snug text-slate-800 hover:underline"
                    >
                      {item.data.name}
                    </button>
                    {item.data.note && (
                      <span className="max-w-xs truncate text-[10px] text-slate-500">
                        {item.data.note}
                      </span>
                    )}
                  </div>
                </td>
                <td className="border-b border-slate-200 px-2 py-1.5 text-center uppercase text-slate-600">
                  {item.data.team ?? '—'}
                </td>
                <td className="border-b border-slate-200 px-2 py-1.5 text-center">
                  <div className="flex items-center justify-center gap-1.5">
                    <button
                      onClick={() => onDraftToMyTeam(item.data)}
                      className="rounded bg-blue-600 px-2 py-0.5 text-[11px] font-semibold text-white transition hover:bg-blue-700"
                    >
                      Mine
                    </button>
                    <button
                      onClick={() => onDraftedByOther(item.data)}
                      className="rounded border border-slate-300 px-2 py-0.5 text-[11px] text-slate-600 transition hover:bg-slate-50"
                    >
                      Gone
                    </button>
                  </div>
                </td>
              </tr>
            )
          )}

          {droppedPlayers.length > 0 && (
            <>
              <tr>
                <td
                  colSpan={5}
                  className="select-none border-y border-slate-400 bg-slate-300 py-1 text-center font-semibold text-slate-700"
                >
                  Dropped off rankings
                </td>
              </tr>
              {droppedPlayers.map((p) => (
                <tr
                  key={`dropped-${p.name_canon}`}
                  className={`select-none opacity-70 ${posClass(p.position)}`}
                >
                  <td className="border-b border-slate-200 px-2 py-1.5 text-center text-slate-400">
                    —
                  </td>
                  <td className="border-b border-slate-200 px-2 py-1.5 text-center font-semibold">
                    {p.position ?? '—'}
                  </td>
                  <td className="border-b border-slate-200 px-3 py-1.5">
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => onOpenNotes(p)}
                        className="text-left font-medium text-slate-700 hover:underline"
                      >
                        {p.name}
                      </button>
                      <span className="rounded bg-white/50 px-1.5 text-[10px] text-slate-500">
                        was #{p.lastRank}
                      </span>
                    </div>
                  </td>
                  <td className="border-b border-slate-200 px-2 py-1.5 text-center uppercase text-slate-500">
                    {p.team ?? '—'}
                  </td>
                  <td className="border-b border-slate-200 px-2 py-1.5 text-center">
                    <div className="flex items-center justify-center gap-1.5">
                      <button
                        onClick={() => onDraftToMyTeam(p)}
                        className="rounded bg-blue-600 px-2 py-0.5 text-[11px] font-semibold text-white transition hover:bg-blue-700"
                      >
                        Mine
                      </button>
                      <button
                        onClick={() => onDraftedByOther(p)}
                        className="rounded border border-slate-300 px-2 py-0.5 text-[11px] text-slate-600 transition hover:bg-slate-50"
                      >
                        Gone
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </>
          )}
        </tbody>
      </table>
    </main>
  );
};
