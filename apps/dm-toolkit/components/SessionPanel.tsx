import { useState } from 'react';
import { useStore } from '../store/useStore';

export default function SessionPanel() {
  const {
    characters,
    sessions,
    activeSessionId,
    createSession,
    setActiveSession,
    addToSession,
    removeFromSession,
    deleteSession,
  } = useStore();

  const [newName, setNewName] = useState('');

  const activeSession = sessions.find((s) => s.id === activeSessionId) ?? null;

  const handleCreate = () => {
    const name = newName.trim() || `Session ${sessions.length + 1}`;
    createSession(name);
    setNewName('');
  };

  return (
    <div className="bg-stone-800 border border-stone-700 rounded-xl p-5 space-y-5">
      {/* Create session */}
      <div>
        <h3 className="text-xs font-bold uppercase text-stone-500 mb-2 tracking-wider">
          Sessions
        </h3>
        <div className="flex gap-2">
          <input
            value={newName}
            onChange={(e) => setNewName(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleCreate()}
            placeholder="Session name…"
            className="flex-1 bg-stone-950 border border-stone-700 rounded-lg px-3 py-1.5 text-sm text-stone-300 placeholder:text-stone-600 focus:outline-none focus:border-green-700"
          />
          <button
            onClick={handleCreate}
            className="px-3 py-1.5 bg-green-800 hover:bg-green-700 text-green-100 text-sm rounded-lg transition-colors"
          >
            New
          </button>
        </div>
      </div>

      {/* Session list */}
      {sessions.length > 0 && (
        <div className="space-y-1">
          {sessions.map((s) => (
            <div
              key={s.id}
              className={`flex items-center justify-between px-3 py-2 rounded-lg cursor-pointer transition-colors ${
                s.id === activeSessionId
                  ? 'bg-green-950 border border-green-700'
                  : 'bg-stone-900 border border-stone-700 hover:border-stone-600'
              }`}
              onClick={() => setActiveSession(s.id)}
            >
              <div>
                <span className="text-sm text-stone-200">{s.name}</span>
                <span className="ml-2 text-xs text-stone-500">
                  {s.active_character_ids.length} chars
                </span>
              </div>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  deleteSession(s.id);
                }}
                className="text-stone-600 hover:text-red-400 text-sm transition-colors"
                title="Delete session"
              >
                ✕
              </button>
            </div>
          ))}
        </div>
      )}

      {/* Character picker for active session */}
      {activeSession && (
        <div>
          <h3 className="text-xs font-bold uppercase text-stone-500 mb-2 tracking-wider">
            Add to "{activeSession.name}"
          </h3>
          {characters.length === 0 ? (
            <p className="text-stone-600 text-xs">No characters yet. Import some first.</p>
          ) : (
            <div className="space-y-1">
              {characters.map((char) => {
                const inSession = activeSession.active_character_ids.includes(char.id);
                return (
                  <div
                    key={char.id}
                    className="flex items-center justify-between px-3 py-2 bg-stone-900 rounded-lg border border-stone-700"
                  >
                    <span className="text-sm text-stone-300">
                      {char.name}
                      <span className="ml-2 text-xs text-stone-500">{char.class}</span>
                    </span>
                    <button
                      onClick={() =>
                        inSession
                          ? removeFromSession(activeSession.id, char.id)
                          : addToSession(activeSession.id, char.id)
                      }
                      className={`text-xs px-3 py-1 rounded-lg transition-colors ${
                        inSession
                          ? 'bg-red-950 hover:bg-red-900 border border-red-800 text-red-300'
                          : 'bg-green-950 hover:bg-green-900 border border-green-800 text-green-300'
                      }`}
                    >
                      {inSession ? 'Remove' : 'Add'}
                    </button>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      )}
    </div>
  );
}
