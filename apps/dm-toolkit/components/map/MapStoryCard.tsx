import { useState } from 'react';
import { useStore } from '../../store/useStore';
import type { GameMap } from '../../types';

interface MapStoryCardProps {
  map: GameMap;
  canEdit: boolean;
}

// The generated theme + hook for this map (see lib/rulesets/storyGen.ts) —
// public, same as the rest of the map's context, so players get the same
// framing the DM does. Only the reroll control is DM-only. Maps created
// before this feature has no story (nullable column) — a non-DM viewer on
// one of those just sees nothing rather than an empty placeholder.
export default function MapStoryCard({ map, canEdit }: MapStoryCardProps) {
  const { rerollMapStory } = useStore();
  const [rerolling, setRerolling] = useState(false);

  if (!map.story && !canEdit) return null;

  const handleReroll = async () => {
    setRerolling(true);
    try {
      await rerollMapStory(map.id);
    } finally {
      setRerolling(false);
    }
  };

  return (
    <div className="bg-stone-800 border border-stone-700 rounded-xl px-4 py-3 flex items-center justify-between gap-3">
      {map.story ? (
        <div>
          <p className="text-sm font-bold text-stone-100">{map.story.title}</p>
          <p className="text-xs text-stone-400 mt-0.5">{map.story.hook}</p>
        </div>
      ) : (
        <p className="text-xs text-stone-600">This map has no generated story yet.</p>
      )}
      {canEdit && (
        <button
          onClick={handleReroll}
          disabled={rerolling}
          className="shrink-0 text-xs px-2.5 py-1 bg-stone-900 border border-stone-700 text-stone-400 rounded-lg hover:border-stone-600 transition-colors disabled:opacity-40"
        >
          {rerolling ? 'Rerolling…' : map.story ? '🎲 Reroll' : '🎲 Generate Story'}
        </button>
      )}
    </div>
  );
}
