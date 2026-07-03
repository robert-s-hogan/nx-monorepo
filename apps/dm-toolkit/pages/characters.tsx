import { useState } from 'react';
import UploadArea from '../components/UploadArea';
import CharacterCard from '../components/CharacterCard';
import { useStore } from '../store/useStore';
import DMToolkitLayout from '../components/DMToolkitLayout';

export default function Characters() {
  const { characters, removeCharacter } = useStore();
  const [previewId, setPreviewId] = useState<string | null>(null);

  const preview = previewId ? characters.find((c) => c.id === previewId) ?? null : null;

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
            <UploadArea onSuccess={() => setPreviewId(null)} />

            {characters.length > 0 && (
              <div className="bg-stone-800 border border-stone-700 rounded-xl p-4">
                <h3 className="text-xs font-bold uppercase text-stone-500 mb-3 tracking-wider">
                  All Characters ({characters.length})
                </h3>
                <div className="space-y-1">
                  {characters.map((char) => (
                    <div
                      key={char.id}
                      onClick={() => setPreviewId(char.id === previewId ? null : char.id)}
                      className={`flex items-center justify-between px-3 py-2.5 rounded-lg cursor-pointer transition-colors ${
                        char.id === previewId
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
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          if (previewId === char.id) setPreviewId(null);
                          removeCharacter(char.id);
                        }}
                        className="text-stone-600 hover:text-red-400 text-sm transition-colors ml-2"
                        title="Delete character"
                      >
                        ✕
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Right: preview card */}
          <div className="col-span-3">
            {preview ? (
              <CharacterCard character={preview} />
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
