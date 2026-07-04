import { useState } from 'react';
import { useStore } from '../store/useStore';
import { getLevelDetailsFor } from '../lib/progression';
import type { SessionMode } from '../types';

export default function CampaignPanel() {
  const {
    campaigns,
    activeCampaignId,
    createCampaign,
    setActiveCampaign,
    addCampaignXp,
    deleteCampaign,
  } = useStore();

  const [newName, setNewName] = useState('');
  const [newMode, setNewMode] = useState<SessionMode>('freeform');
  const [xpInput, setXpInput] = useState('');

  const activeCampaign =
    campaigns.find((c) => c.id === activeCampaignId) ?? null;

  const handleCreate = () => {
    const name = newName.trim() || `Campaign ${campaigns.length + 1}`;
    createCampaign(name, 4, newMode);
    setNewName('');
    setNewMode('freeform');
  };

  const handleAddXp = () => {
    if (!activeCampaign) return;
    const delta = parseInt(xpInput, 10);
    if (isNaN(delta) || delta === 0) return;
    addCampaignXp(activeCampaign.id, delta);
    setXpInput('');
  };

  const levelDetails = activeCampaign
    ? getLevelDetailsFor(activeCampaign.progression_system, activeCampaign.current_xp)
    : null;

  const progressPct =
    levelDetails && levelDetails.xpEnd > levelDetails.xpStart
      ? Math.round(
          ((activeCampaign!.current_xp - levelDetails.xpStart) /
            (levelDetails.xpEnd - levelDetails.xpStart + 1)) *
            100
        )
      : 100;

  return (
    <div className="bg-stone-800 border border-stone-700 rounded-xl p-5 space-y-5">
      <div>
        <h3 className="text-xs font-bold uppercase text-stone-500 mb-2 tracking-wider">
          Campaigns
        </h3>
        <div className="flex gap-2">
          <input
            value={newName}
            onChange={(e) => setNewName(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleCreate()}
            placeholder="Campaign name…"
            className="flex-1 bg-stone-950 border border-stone-700 rounded-lg px-3 py-1.5 text-sm text-stone-300 placeholder:text-stone-600 focus:outline-none focus:border-green-700"
          />
          <button
            onClick={handleCreate}
            className="px-3 py-1.5 bg-green-800 hover:bg-green-700 text-green-100 text-sm rounded-lg transition-colors"
          >
            New
          </button>
        </div>
        <div className="flex gap-1 mt-2">
          {(['freeform', 'conquest'] as SessionMode[]).map((mode) => (
            <button
              key={mode}
              onClick={() => setNewMode(mode)}
              className={`flex-1 px-2 py-1 text-xs rounded-lg border capitalize transition-colors ${
                newMode === mode
                  ? 'bg-green-950 border-green-700 text-green-200'
                  : 'bg-stone-900 border-stone-700 text-stone-500 hover:border-stone-600'
              }`}
            >
              {mode}
            </button>
          ))}
        </div>
        <p className="text-xs text-stone-600 mt-1">
          Mode is locked once the campaign is created.
        </p>
      </div>

      {campaigns.length > 0 && (
        <div className="space-y-1">
          {campaigns.map((c) => (
            <div
              key={c.id}
              className={`flex items-center justify-between px-3 py-2 rounded-lg cursor-pointer transition-colors ${
                c.id === activeCampaignId
                  ? 'bg-green-950 border border-green-700'
                  : 'bg-stone-900 border border-stone-700 hover:border-stone-600'
              }`}
              onClick={() => setActiveCampaign(c.id)}
            >
              <span className="text-sm text-stone-200">
                {c.name}
                {c.session_mode === 'conquest' && (
                  <span className="ml-2 text-[10px] uppercase tracking-wider text-green-500">
                    Conquest
                  </span>
                )}
              </span>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  deleteCampaign(c.id);
                }}
                className="text-stone-600 hover:text-red-400 text-sm transition-colors"
                title="Delete campaign"
              >
                ✕
              </button>
            </div>
          ))}
        </div>
      )}

      {activeCampaign && levelDetails && (
        <div>
          <div className="flex items-center justify-between mb-1">
            <span className="text-sm text-stone-200 font-semibold">
              Level {levelDetails.level}
            </span>
            <span className="text-xs text-stone-500">
              {activeCampaign.current_xp.toLocaleString()} XP
            </span>
          </div>
          <div className="h-2 w-full bg-stone-900 rounded-full overflow-hidden border border-stone-700">
            <div
              className="h-full bg-green-600 transition-all"
              style={{ width: `${Math.min(100, Math.max(0, progressPct))}%` }}
            />
          </div>
          {levelDetails.xpNeeded > 0 && (
            <p className="text-xs text-stone-500 mt-1">
              {levelDetails.xpEnd + 1 - activeCampaign.current_xp} XP to level{' '}
              {levelDetails.level + 1}
            </p>
          )}

          <div className="flex gap-2 mt-3">
            <input
              type="number"
              value={xpInput}
              onChange={(e) => setXpInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleAddXp()}
              placeholder="XP earned…"
              className="flex-1 bg-stone-950 border border-stone-700 rounded-lg px-3 py-1.5 text-sm text-stone-300 placeholder:text-stone-600 focus:outline-none focus:border-green-700"
            />
            <button
              onClick={handleAddXp}
              className="px-3 py-1.5 bg-green-800 hover:bg-green-700 text-green-100 text-sm rounded-lg transition-colors"
            >
              + Add XP
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
