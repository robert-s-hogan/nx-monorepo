// The original (pre-conquest-mode) session.tsx body — DM manages everything
// by hand, no adventuring-day/rest/encounter tooling.
import { useStore } from '../store/useStore';
import SessionPanel from './SessionPanel';
import CampaignPanel from './CampaignPanel';
import CharacterCard from './CharacterCard';
import DiceRoller from './DiceRoller';
import { isSessionStartTrigger } from '../lib/dice';

export default function FreeformSessionView() {
  const {
    getActiveSession,
    getSessionCharacters,
    removeFromSession,
    assignRandomSkill,
    characters,
  } = useStore();

  const activeSession = getActiveSession();
  const sessionChars = activeSession ? getSessionCharacters(activeSession.id) : [];

  const handleSessionStart = () => {
    if (!activeSession) return;
    sessionChars.forEach((char) => {
      if (isSessionStartTrigger()) {
        assignRandomSkill(char.id, 'session_start');
      }
    });
  };

  return (
    <div className="flex gap-6">
      {/* Sidebar */}
      <div className="w-72 shrink-0 space-y-4">
        <CampaignPanel />
        <SessionPanel />

        {activeSession && sessionChars.length > 0 && (
          <button
            onClick={handleSessionStart}
            className="w-full py-2.5 bg-olive-700 hover:bg-olive-800 text-stone-100 text-sm font-bold rounded-xl transition-colors"
            style={{ backgroundColor: '#4a5e2a' }}
          >
            Roll Session Start Events
          </button>
        )}

        <DiceRoller />
      </div>

      {/* Main content */}
      <div className="flex-1">
        {!activeSession ? (
          <div className="h-64 flex items-center justify-center bg-stone-800 border border-stone-700 border-dashed rounded-xl">
            <div className="text-center">
              <p className="text-stone-500 text-sm">No active session.</p>
              <p className="text-stone-600 text-xs mt-1">
                Create or select a session in the panel.
              </p>
            </div>
          </div>
        ) : sessionChars.length === 0 ? (
          <div className="h-64 flex items-center justify-center bg-stone-800 border border-stone-700 border-dashed rounded-xl">
            <div className="text-center">
              <p className="text-stone-500 text-sm">No characters in this session.</p>
              <p className="text-stone-600 text-xs mt-1">
                {characters.length === 0
                  ? 'Import characters first on the Characters page.'
                  : 'Add characters from the panel.'}
              </p>
            </div>
          </div>
        ) : (
          <>
            <div className="flex items-center justify-between mb-4">
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
                  // session.tsx (the only entry point to this view) is fully
                  // gated to role === 'family', so anyone here can already edit.
                  canEdit
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
