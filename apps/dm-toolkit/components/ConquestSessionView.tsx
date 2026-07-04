import { useStore } from '../store/useStore';
import SessionPanel from './SessionPanel';
import CampaignPanel from './CampaignPanel';
import CharacterCard from './CharacterCard';
import DiceRoller from './DiceRoller';
import RestPanel from './conquest/RestPanel';
import EncounterPanel from './conquest/EncounterPanel';

export default function ConquestSessionView() {
  const {
    getActiveSession,
    getActiveCampaign,
    getSessionCharacters,
    removeFromSession,
  } = useStore();

  const activeCampaign = getActiveCampaign();
  const activeSession = getActiveSession();
  const sessionChars = activeSession ? getSessionCharacters(activeSession.id) : [];

  return (
    <div className="flex gap-6">
      {/* Sidebar */}
      <div className="w-72 shrink-0 space-y-4">
        <CampaignPanel />
        <SessionPanel />
        <DiceRoller />
      </div>

      {/* Main content */}
      <div className="flex-1 space-y-6">
        {!activeCampaign ? (
          <div className="h-64 flex items-center justify-center bg-stone-800 border border-stone-700 border-dashed rounded-xl">
            <div className="text-center">
              <p className="text-stone-500 text-sm">No active conquest campaign.</p>
              <p className="text-stone-600 text-xs mt-1">
                Select a conquest-mode campaign in the panel.
              </p>
            </div>
          </div>
        ) : (
          <>
            <RestPanel campaign={activeCampaign} />
            <EncounterPanel campaign={activeCampaign} />
          </>
        )}

        {activeSession && sessionChars.length > 0 && (
          <>
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-bold text-stone-100">{activeSession.name}</h2>
              <span className="text-xs text-stone-500">
                {sessionChars.length} character{sessionChars.length !== 1 ? 's' : ''}
              </span>
            </div>
            <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
              {sessionChars.map((char) => (
                <CharacterCard
                  key={char.id}
                  character={char}
                  onRemoveFromSession={() =>
                    removeFromSession(activeSession.id, char.id)
                  }
                />
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
}
