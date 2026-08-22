import { FiArrowUp, FiArrowDown, FiMinus } from 'react-icons/fi';

import type { DraftPlayer } from '../../lib/server/draft';
import { DisplayItem } from '../../hooks/useDraftSession';
import { posBadgeClass, posBorderClass } from './posClass';
import { PlayerTagPicker } from './PlayerTagPicker';
import { RiskFactorControl } from './RiskFactorControl';

const PosBadge = ({ pos }: { pos: string | null }) => (
  <span
    className={`inline-block rounded px-1.5 py-0.5 text-[10px] font-semibold text-white ${posBadgeClass(
      pos
    )}`}
  >
    {pos ?? '—'}
  </span>
);

const InjuryBadge = ({ injury }: { injury: DraftPlayer['injury'] }) => {
  if (!injury) return null;
  return (
    <span className="max-w-xs truncate text-[10px] font-medium text-warning-color">
      {injury.injury}
      {injury.expectedReturn ? ` — ${injury.expectedReturn}` : ''}
    </span>
  );
};

// Rank movement vs the Original snapshot. `originalRank == null` means the
// player wasn't in the Original list at all.
const RankDelta = ({ player }: { player: DraftPlayer }) => {
  if (player.originalRank == null) {
    return (
      <span className="rounded border border-info-color px-1 text-[9px] font-semibold text-info-color">
        NEW
      </span>
    );
  }
  const delta = player.originalRank - player.rank;
  if (delta === 0) {
    return <FiMinus size={10} className="text-text-color opacity-60" />;
  }
  if (delta > 0) {
    return (
      <span className="inline-flex items-center gap-0.5 text-[10px] font-semibold text-success-color">
        <FiArrowUp size={10} />
        {delta}
      </span>
    );
  }
  return (
    <span className="inline-flex items-center gap-0.5 text-[10px] font-semibold text-error-color">
      <FiArrowDown size={10} />
      {Math.abs(delta)}
    </span>
  );
};

// Theme tokens used throughout: bg-color/surface-color/text-color/
// border-color/primary/hover-color/disabled-color/success-color/error-color
// /info-color/warning-color are all real CSS vars set by ThemeProvider
// (libs/theme). Note: tailwind.config.js also registers a couple of tokens
// whose backing var is never actually set (text-color-secondary,
// secondary-icon-color, and text-on-primary-color isn't registered as a
// token at all) — muted text here uses text-text-color + opacity instead,
// which always works, and the "Mine" button reads the on-primary color via
// the CSS var directly.
const MUTED = 'text-text-color opacity-70';

export interface PlayerTableProps {
  displayList: DisplayItem[];
  droppedPlayers: DraftPlayer[];
  onOpenNotes: (player: DraftPlayer) => void;
  onDraftToMyTeam: (player: DraftPlayer) => void;
  onDraftedByOther: (player: DraftPlayer) => void;
  onToggleTag: (player: DraftPlayer, tagId: number) => void;
  onSetRisk: (player: DraftPlayer, value: number | null) => void;
  canEditTags: boolean;
}

export const PlayerTable = ({
  displayList,
  droppedPlayers,
  onOpenNotes,
  onDraftToMyTeam,
  onDraftedByOther,
  onToggleTag,
  onSetRisk,
  canEditTags,
}: PlayerTableProps) => {
  return (
    <main className="flex-1 overflow-y-auto bg-bg-color">
      <table className="min-w-full table-fixed border-collapse text-sm">
        <thead className="sticky top-0 z-10 bg-bg-color">
          <tr className="select-none">
            <th className="w-16 border-b-2 border-border-color px-2 py-2 text-center text-[11px] font-semibold uppercase tracking-wide text-text-color">
              #
            </th>
            <th className="w-14 border-b-2 border-border-color px-2 py-2 text-center text-[11px] font-semibold uppercase tracking-wide text-text-color">
              Pos
            </th>
            <th className="border-b-2 border-border-color px-3 py-2 text-left text-[11px] font-semibold uppercase tracking-wide text-text-color">
              Player
            </th>
            <th className="w-14 border-b-2 border-border-color px-2 py-2 text-center text-[11px] font-semibold uppercase tracking-wide text-text-color">
              Team
            </th>
            <th className="w-56 border-b-2 border-border-color px-2 py-2 text-center text-[11px] font-semibold uppercase tracking-wide text-text-color">
              Tags
            </th>
            <th className="w-36 border-b-2 border-border-color px-2 py-2 text-center text-[11px] font-semibold uppercase tracking-wide text-text-color">
              Draft
            </th>
          </tr>
        </thead>
        <tbody>
          {displayList.map((item) =>
            item.type === 'header' ? (
              <tr key={`h${item.round}`}>
                <td
                  colSpan={6}
                  className={`select-none border-y border-border-color bg-bg-color py-1 text-center text-xs font-semibold uppercase tracking-wide ${MUTED}`}
                >
                  Round {item.round}
                </td>
              </tr>
            ) : (
              <tr
                key={item.data.name_canon}
                className="select-none cursor-default bg-surface-color hover:bg-hover-color"
              >
                <td
                  className={`border-b border-l-4 border-border-color px-2 py-2 text-center text-text-color ${posBorderClass(
                    item.data.position
                  )}`}
                >
                  <div className="flex items-center justify-center gap-1">
                    <span>{item.data.rank}</span>
                    <RankDelta player={item.data} />
                  </div>
                </td>
                <td className="border-b border-border-color px-2 py-2 text-center">
                  <PosBadge pos={item.data.position} />
                </td>
                <td className="border-b border-border-color px-3 py-2">
                  <div className="flex flex-col">
                    <button
                      onClick={() => onOpenNotes(item.data)}
                      className="text-left font-medium leading-snug text-text-color hover:underline"
                    >
                      {item.data.name}
                    </button>
                    <InjuryBadge injury={item.data.injury} />
                    {item.data.note && (
                      <span className={`max-w-xs truncate text-[10px] ${MUTED}`}>
                        {item.data.note}
                      </span>
                    )}
                  </div>
                </td>
                <td className={`border-b border-border-color px-2 py-2 text-center uppercase ${MUTED}`}>
                  {item.data.team ?? '—'}
                </td>
                <td className="border-b border-border-color px-2 py-2 text-center">
                  <div className="flex flex-wrap items-center justify-center gap-2">
                    <RiskFactorControl
                      player={item.data}
                      canEdit={canEditTags}
                      onSetRisk={onSetRisk}
                    />
                    <PlayerTagPicker
                      player={item.data}
                      canEdit={canEditTags}
                      onToggleTag={onToggleTag}
                    />
                  </div>
                </td>
                <td className="border-b border-border-color px-2 py-2 text-center">
                  <div className="flex items-center justify-center gap-1.5">
                    <button
                      onClick={() => onDraftToMyTeam(item.data)}
                      className="rounded bg-primary px-2 py-0.5 text-[11px] font-semibold text-(--text-on-primary-color) transition hover:bg-hover-color"
                    >
                      Mine
                    </button>
                    <button
                      onClick={() => onDraftedByOther(item.data)}
                      className={`rounded border border-border-color px-2 py-0.5 text-[11px] transition hover:bg-hover-color ${MUTED}`}
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
                  colSpan={6}
                  className={`select-none border-y border-border-color bg-bg-color py-1 text-center text-xs font-semibold uppercase tracking-wide ${MUTED}`}
                >
                  Dropped off rankings
                </td>
              </tr>
              {droppedPlayers.map((p) => (
                <tr
                  key={`dropped-${p.name_canon}`}
                  className="select-none bg-surface-color opacity-70"
                >
                  <td
                    className={`border-b border-l-4 border-border-color px-2 py-2 text-center text-text-color ${posBorderClass(
                      p.position
                    )}`}
                  >
                    —
                  </td>
                  <td className="border-b border-border-color px-2 py-2 text-center">
                    <PosBadge pos={p.position} />
                  </td>
                  <td className="border-b border-border-color px-3 py-2">
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => onOpenNotes(p)}
                        className="text-left font-medium text-text-color hover:underline"
                      >
                        {p.name}
                      </button>
                      <span className="rounded bg-disabled-color px-1.5 text-[10px] text-text-color">
                        was #{p.lastRank}
                      </span>
                    </div>
                  </td>
                  <td className="border-b border-border-color px-2 py-2 text-center uppercase text-text-color">
                    {p.team ?? '—'}
                  </td>
                  <td className="border-b border-border-color px-2 py-2 text-center">
                    <div className="flex flex-wrap items-center justify-center gap-2">
                      <RiskFactorControl
                        player={p}
                        canEdit={canEditTags}
                        onSetRisk={onSetRisk}
                      />
                      <PlayerTagPicker
                        player={p}
                        canEdit={canEditTags}
                        onToggleTag={onToggleTag}
                      />
                    </div>
                  </td>
                  <td className="border-b border-border-color px-2 py-2 text-center">
                    <div className="flex items-center justify-center gap-1.5">
                      <button
                        onClick={() => onDraftToMyTeam(p)}
                        className="rounded bg-primary px-2 py-0.5 text-[11px] font-semibold text-(--text-on-primary-color) transition hover:bg-hover-color"
                      >
                        Mine
                      </button>
                      <button
                        onClick={() => onDraftedByOther(p)}
                        className="rounded border border-border-color px-2 py-0.5 text-[11px] text-text-color transition hover:bg-hover-color"
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
