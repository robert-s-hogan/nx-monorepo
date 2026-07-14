import { useState } from 'react';
import { useAuth } from '@with-nx/auth';
import UploadArea from '../components/UploadArea';
import CharacterCard from '../components/CharacterCard';
import { useStore } from '../store/useStore';
import DMToolkitLayout from '../components/DMToolkitLayout';
import type { Character } from '../types';

interface CharacterRowProps {
  char: Character;
  selected: boolean;
  canEdit: boolean;
  onSelect: () => void;
  onRemove: () => void;
}

function CharacterRow({ char, selected, canEdit, onSelect, onRemove }: CharacterRowProps) {
  return (
    <div
      onClick={onSelect}
      className={`flex items-center justify-between px-3 py-2.5 rounded-lg cursor-pointer transition-colors ${
        selected
          ? 'bg-green-950 border border-green-700'
          : 'bg-stone-900 border border-stone-700 hover:border-stone-600'
      }`}
    >
      <div>
        <span className="text-sm font-medium text-stone-200">{char.name}</span>
        <span className="ml-2 text-xs text-stone-500">
          {char.class} Lv{char.level}
        </span>
      </div>
      {canEdit && (
        <button
          onClick={(e) => {
            e.stopPropagation();
            onRemove();
          }}
          className="text-stone-600 hover:text-red-400 text-sm transition-colors ml-2"
          title="Delete character"
        >
          ✕
        </button>
      )}
    </div>
  );
}

function Characters() {
  const { role } = useAuth();
  const canEdit = role === 'family';
  const { characters, removeCharacter } = useStore();
  const [previewId, setPreviewId] = useState<string | null>(null);

  const preview = previewId ? characters.find((c) => c.id === previewId) ?? null : null;
  const pcs = characters.filter((c) => (c.character_type ?? 'pc') === 'pc');
  const npcs = characters.filter((c) => c.character_type === 'npc');

  // Manual, on-demand backup of the roster — re-importable via UploadArea's
  // "Upload File" (id/random_skills on each entry are ignored on re-add, so
  // round-tripping this file back in is safe). Complements the scheduled
  // full-DB pg_dump in .github/workflows/dm-toolkit-db-backup.yml, which
  // covers everything else but only runs once a day.
  const handleExportAll = () => {
    const blob = new Blob([JSON.stringify(characters, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `dm-toolkit-characters-${new Date().toISOString().slice(0, 10)}.json`;
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <DMToolkitLayout>
      <div className="max-w-6xl mx-auto px-6 py-8 space-y-8">
        <div>
          <h1 className="text-2xl font-bold text-stone-100">Characters</h1>
          <p className="text-stone-500 text-sm mt-1">
            Import characters as JSON. Click a character to preview its card.
          </p>
        </div>

        <div className="grid grid-cols-5 gap-6">
          {/* Left: import + list */}
          <div className="col-span-2 space-y-4">
            {canEdit && <UploadArea onSuccess={() => setPreviewId(null)} />}

            {characters.length > 0 && (
              <div className="bg-stone-800 border border-stone-700 rounded-xl p-4">
                <div className="flex justify-between items-center mb-3">
                  <h3 className="text-xs font-bold uppercase text-stone-500 tracking-wider">
                    All Characters ({characters.length})
                  </h3>
                  <button
                    onClick={handleExportAll}
                    className="text-xs text-stone-500 hover:text-green-400 border border-stone-700 hover:border-green-700 px-2 py-0.5 rounded-lg transition-colors"
                  >
                    Export All
                  </button>
                </div>

                {pcs.length > 0 && (
                  <div className="mb-3">
                    <p className="text-[10px] font-bold uppercase text-stone-600 mb-1.5">
                      Party ({pcs.length})
                    </p>
                    <div className="space-y-1">
                      {pcs.map((char) => (
                        <CharacterRow
                          key={char.id}
                          char={char}
                          selected={char.id === previewId}
                          canEdit={canEdit}
                          onSelect={() => setPreviewId(char.id === previewId ? null : char.id)}
                          onRemove={() => {
                            if (previewId === char.id) setPreviewId(null);
                            removeCharacter(char.id);
                          }}
                        />
                      ))}
                    </div>
                  </div>
                )}

                {npcs.length > 0 && (
                  <div>
                    <p className="text-[10px] font-bold uppercase text-stone-600 mb-1.5">
                      NPCs ({npcs.length})
                    </p>
                    <div className="space-y-1">
                      {npcs.map((char) => (
                        <CharacterRow
                          key={char.id}
                          char={char}
                          selected={char.id === previewId}
                          canEdit={canEdit}
                          onSelect={() => setPreviewId(char.id === previewId ? null : char.id)}
                          onRemove={() => {
                            if (previewId === char.id) setPreviewId(null);
                            removeCharacter(char.id);
                          }}
                        />
                      ))}
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>

          {/* Right: preview card */}
          <div className="col-span-3">
            {preview ? (
              <CharacterCard character={preview} canEdit={canEdit} />
            ) : (
              <div className="h-full min-h-64 flex items-center justify-center bg-stone-800 border border-stone-700 border-dashed rounded-xl">
                <p className="text-stone-600 text-sm">
                  {characters.length === 0
                    ? 'Import a character to see its card here.'
                    : 'Select a character to preview.'}
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </DMToolkitLayout>
  );
}

// Public: character cards are viewable by anyone. Import/delete/edit
// affordances above are all gated on canEdit (role === 'family').
Characters.isPublic = true;

export default Characters;
