// Adapted from apps/conquest's ConquestEncounterForm/List — rebuilt against
// dm-toolkit's own component style (rather than the original's formik-driven
// auto-generated form) since the ported Encounter schema here is a simplified
// DM-log, not the original's dozen narrative-tracking fields.
import { useState } from 'react';
import { useStore } from '../../store/useStore';
import { getLevelDetailsFor } from '../../lib/progression';
import {
  getRandomEncounterDifficulty,
  getXpThreshold,
} from '../../lib/rulesets/conquest/constants';
import { pickRandomEncounterSetting } from '../../lib/rulesets/conquest/mapConstants';
import type { Campaign, EncounterDifficulty } from '../../types';

export default function EncounterPanel({ campaign }: { campaign: Campaign }) {
  const { encounters, addEncounter, removeEncounter } = useStore();
  const [preview, setPreview] = useState<{
    difficulty: EncounterDifficulty;
    objective: string;
    map_terrain_type: string;
    time_of_day: string;
    weather: string;
  } | null>(null);

  const levelDetails = getLevelDetailsFor(campaign.progression_system, campaign.current_xp);

  const handleRoll = () => {
    const difficulty = getRandomEncounterDifficulty();
    const setting = pickRandomEncounterSetting();
    setPreview({
      difficulty,
      objective: setting.objective,
      map_terrain_type: setting.terrain,
      time_of_day: setting.timeOfDay,
      weather: setting.weather,
    });
  };

  const handleSave = () => {
    if (!preview) return;
    const encounter_xp = getXpThreshold(
      levelDetails.level,
      campaign.number_of_players,
      preview.difficulty
    );
    addEncounter({ campaign_id: campaign.id, encounter_xp, ...preview });
    setPreview(null);
  };

  return (
    <div className="bg-stone-800 border border-stone-700 rounded-xl p-5 space-y-3">
      <div className="flex items-center justify-between">
        <h3 className="text-xs font-bold uppercase text-stone-500 tracking-wider">
          Encounters
        </h3>
        <button
          onClick={handleRoll}
          className="px-3 py-1.5 bg-green-800 hover:bg-green-700 text-green-100 text-xs rounded-lg transition-colors"
        >
          Roll Random Encounter
        </button>
      </div>

      {preview && (
        <div className="bg-stone-900 border border-stone-700 rounded-lg p-3 space-y-1 text-sm text-stone-300">
          <p>
            <span className="text-stone-500">Difficulty:</span> {preview.difficulty} (
            {getXpThreshold(levelDetails.level, campaign.number_of_players, preview.difficulty)}{' '}
            XP)
          </p>
          <p>
            <span className="text-stone-500">Objective:</span> {preview.objective}
          </p>
          <p>
            <span className="text-stone-500">Terrain:</span> {preview.map_terrain_type}
          </p>
          <p>
            <span className="text-stone-500">Time / Weather:</span> {preview.time_of_day},{' '}
            {preview.weather === 'Yes' ? 'weather event' : 'clear'}
          </p>
          <div className="flex gap-2 pt-2">
            <button
              onClick={handleSave}
              className="px-3 py-1 bg-green-800 hover:bg-green-700 text-green-100 text-xs rounded-lg transition-colors"
            >
              Save to Log
            </button>
            <button
              onClick={() => setPreview(null)}
              className="px-3 py-1 bg-stone-800 hover:bg-stone-700 text-stone-400 text-xs rounded-lg transition-colors border border-stone-700"
            >
              Discard
            </button>
          </div>
        </div>
      )}

      {encounters.length === 0 ? (
        <p className="text-xs text-stone-600">No encounters logged yet.</p>
      ) : (
        <div className="space-y-1">
          {encounters.map((e) => (
            <div
              key={e.id}
              className="flex items-center justify-between px-3 py-2 bg-stone-900 border border-stone-700 rounded-lg text-sm"
            >
              <span className="text-stone-300">
                {e.difficulty} — {e.objective} ({e.encounter_xp} XP)
              </span>
              <button
                onClick={() => removeEncounter(e.id)}
                className="text-stone-600 hover:text-red-400 text-sm transition-colors"
                title="Remove encounter"
              >
                ✕
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
