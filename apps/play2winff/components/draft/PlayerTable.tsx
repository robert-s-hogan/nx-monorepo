import { useMemo, useState } from 'react';
import { FiArrowUp, FiArrowDown, FiMinus } from 'react-icons/fi';

import type { DraftPlayer } from '../../lib/server/draft';
import { DisplayItem } from '../../hooks/useDraftSession';
import { sleeperRowTint } from '../../lib/sleeperDelta';
import { posBadgeClass, posBorderClass, POSITIONS } from './posClass';
import { teamBadgeClass, teamLogoUrl } from './teamClass';
import { PlayerTagPicker } from './PlayerTagPicker';
import { RiskFactorControl } from './RiskFactorControl';
import { SleeperDeltaBadge } from './SleeperDeltaBadge';

const PosBadge = ({ pos }: { pos: string | null }) => (
  <span
    className={`inline-block rounded px-1.5 py-0.5 text-[10px] font-semibold text-white ${posBadgeClass(
      pos
    )}`}
  >
    {pos ?? '—'}
  </span>
);

const TeamBadge = ({ team }: { team: string | null }) => {
  if (!team) return null;
  return (
    <span
      className={`inline-block shrink-0 rounded px-1 py-0.5 text-[9px] font-bold uppercase ${teamBadgeClass(
        team
      )}`}
    >
      {team}
    </span>
  );
};

// Real logo first (self-hosted, see teamClass.ts); if it fails to load —
// unrecognized team abbreviation — fall back to the colored badge instead
// of a broken image icon.
const TeamLogo = ({ team }: { team: string | null }) => {
  const [errored, setErrored] = useState(false);
  if (!team) return null;
  const url = teamLogoUrl(team);
  if (!url || errored) return <TeamBadge team={team} />;
  return (
    <img
      src={url}
      alt={team}
      title={team}
      className="size-6 shrink-0 object-contain"
      onError={() => setErrored(true)}
    />
  );
};

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
  teams: number;
  currentPick: number;
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
  teams,
  currentPick,
  onOpenNotes,
  onDraftToMyTeam,
  onDraftedByOther,
  onToggleTag,
  onSetRisk,
  canEditTags,
}: PlayerTableProps) => {
  const [hiddenPositions, setHiddenPositions] = useState<Set<string>>(
    new Set()
  );

  function togglePosition(pos: string) {
    setHiddenPositions((prev) => {
      const next = new Set(prev);
      if (next.has(pos)) next.delete(pos);
      else next.add(pos);
      return next;
    });
  }

  // Counts reflect everyone still on the board (active + dropped), so the
  // filter bar tells you how many of each position you'd be hiding.
  const positionCounts = useMemo(() => {
    const counts: Record<string, number> = {};
    for (const item of displayList) {
      if (item.type !== 'player') continue;
      const pos = item.data.position ?? '—';
      counts[pos] = (counts[pos] ?? 0) + 1;
    }
    for (const p of droppedPlayers) {
      const pos = p.position ?? '—';
      counts[pos] = (counts[pos] ?? 0) + 1;
    }
    return counts;
  }, [displayList, droppedPlayers]);

  const filteredDisplayList = useMemo(() => {
    const kept = displayList.filter(
      (item) =>
        item.type === 'header' || !hiddenPositions.has(item.data.position ?? '')
    );
    // Drop a round header if every player in that round got filtered out.
    const result: DisplayItem[] = [];
    for (let i = 0; i < kept.length; i++) {
      const item = kept[i];
      if (item.type === 'header') {
        const next = kept[i + 1];
        if (!next || next.type === 'header') continue;
      }
      result.push(item);
    }
    return result;
  }, [displayList, hiddenPositions]);

  const filteredDroppedPlayers = useMemo(
    () => droppedPlayers.filter((p) => !hiddenPositions.has(p.position ?? '')),
    [droppedPlayers, hiddenPositions]
  );

  return (
    <main className="flex-1 overflow-y-auto bg-bg-color">
      <div className="flex flex-wrap items-center gap-2 border-b border-border-color px-3 py-2">
        <span
          className={`text-[10px] font-semibold uppercase tracking-wide ${MUTED}`}
        >
          Filter:
        </span>
        {POSITIONS.map((pos) => {
          const count = positionCounts[pos] ?? 0;
          if (count === 0) return null;
          const hidden = hiddenPositions.has(pos);
          return (
            <button
              key={pos}
              type="button"
              onClick={() => togglePosition(pos)}
              className={`rounded-full px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wide transition ${
                hidden
                  ? `border border-border-color opacity-50 hover:opacity-100 ${MUTED}`
                  : `text-white hover:opacity-90 ${posBadgeClass(pos)}`
              }`}
            >
              {hidden ? `Show ${pos}` : `Hide ${pos}`} ({count})
            </button>
          );
        })}
      </div>
      <table className="min-w-full table-fixed border-collapse text-sm">
        <thead className="sticky top-0 z-10 bg-bg-color">
          <tr className="select-none">
            <th className="w-16 border-b-2 border-border-color p-2 text-center text-[11px] font-semibold tracking-wide text-text-color uppercase">
              #
            </th>
            <th className="w-14 border-b-2 border-border-color p-2 text-center text-[11px] font-semibold tracking-wide text-text-color uppercase">
              Pos
            </th>
            <th className="border-b-2 border-border-color px-3 py-2 text-left text-[11px] font-semibold tracking-wide text-text-color uppercase">
              Player
            </th>
            <th className="w-32 border-b-2 border-border-color p-2 text-center text-[11px] font-semibold tracking-wide text-text-color uppercase">
              ADP Δ
            </th>
            <th className="w-56 border-b-2 border-border-color p-2 text-center text-[11px] font-semibold tracking-wide text-text-color uppercase">
              Tags
            </th>
            <th className="w-36 border-b-2 border-border-color p-2 text-center text-[11px] font-semibold tracking-wide text-text-color uppercase">
              Draft
            </th>
          </tr>
        </thead>
        <tbody>
          {filteredDisplayList.map((item) =>
            item.type === 'header' ? (
              <tr key={`h${item.round}`}>
                <td
                  colSpan={6}
                  className={`border-y border-border-color bg-bg-color py-1 text-center text-xs font-semibold tracking-wide uppercase select-none ${MUTED}`}
                >
                  Round {item.round}
                </td>
              </tr>
            ) : (
              <tr
                key={item.data.name_canon}
                className={`cursor-default select-none hover:bg-hover-color ${
                  sleeperRowTint(
                    item.data.rank,
                    item.data.sleeperRank,
                    teams,
                    currentPick
                  ) || 'bg-surface-color'
                }`}
              >
                <td
                  className={`border-b border-l-4 border-border-color p-2 text-center text-text-color ${posBorderClass(
                    item.data.position
                  )}`}
                >
                  <div className="flex items-center justify-center gap-1">
                    <span>{item.data.rank}</span>
                    <RankDelta player={item.data} />
                  </div>
                </td>
                <td className="border-b border-border-color p-2 text-center">
                  <PosBadge pos={item.data.position} />
                </td>
                <td className="border-b border-border-color px-3 py-2">
                  <div className="flex flex-col">
                    <div className="flex items-center gap-1.5">
                      <TeamLogo team={item.data.team} />
                      <button
                        onClick={() => onOpenNotes(item.data)}
                        className="text-left leading-snug font-medium text-text-color hover:underline"
                      >
                        {item.data.name}
                      </button>
                    </div>
                    <InjuryBadge injury={item.data.injury} />
                    {item.data.note && (
                      <span className={`max-w-xs truncate text-[10px] ${MUTED}`}>
                        {item.data.note}
                      </span>
                    )}
                  </div>
                </td>
                <td className="border-b border-border-color p-2 text-center">
                  <SleeperDeltaBadge
                    player={item.data}
                    teams={teams}
                    currentPick={currentPick}
                  />
                </td>
                <td className="border-b border-border-color p-2 text-center">
                  <div className="group flex flex-wrap items-center justify-center gap-2">
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
                <td className="border-b border-border-color p-2 text-center">
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

          {filteredDroppedPlayers.length > 0 && (
            <>
              <tr>
                <td
                  colSpan={6}
                  className={`border-y border-border-color bg-bg-color py-1 text-center text-xs font-semibold tracking-wide uppercase select-none ${MUTED}`}
                >
                  Dropped off rankings
                </td>
              </tr>
              {filteredDroppedPlayers.map((p) => (
                <tr
                  key={`dropped-${p.name_canon}`}
                  className={`opacity-70 select-none ${
                    sleeperRowTint(
                      p.lastRank ?? p.rank,
                      p.sleeperRank,
                      teams,
                      currentPick
                    ) || 'bg-surface-color'
                  }`}
                >
                  <td
                    className={`border-b border-l-4 border-border-color p-2 text-center text-text-color ${posBorderClass(
                      p.position
                    )}`}
                  >
                    —
                  </td>
                  <td className="border-b border-border-color p-2 text-center">
                    <PosBadge pos={p.position} />
                  </td>
                  <td className="border-b border-border-color px-3 py-2">
                    <div className="flex items-center gap-2">
                      <TeamLogo team={p.team} />
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
                  <td className="border-b border-border-color p-2 text-center">
                    {p.lastRank != null && (
                      <SleeperDeltaBadge
                        player={{ ...p, rank: p.lastRank }}
                        teams={teams}
                        currentPick={currentPick}
                      />
                    )}
                  </td>
                  <td className="border-b border-border-color p-2 text-center">
                    <div className="group flex flex-wrap items-center justify-center gap-2">
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
                  <td className="border-b border-border-color p-2 text-center">
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
