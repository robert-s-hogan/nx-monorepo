import { useState, useRef } from 'react';
import type { Character } from '../types';
import { useStore } from '../store/useStore';
import sampleCharacter from '../data/sample_character.json';

interface Props {
  onSuccess?: () => void;
}

export default function UploadArea({ onSuccess }: Props) {
  const { addCharacter } = useStore();
  const [json, setJson] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);
  const fileRef = useRef<HTMLInputElement>(null);

  const parseAndAdd = async (raw: string) => {
    setError(null);
    setSuccess(null);
    let parsed: unknown;
    try {
      parsed = JSON.parse(raw);
    } catch {
      setError('Invalid JSON — check formatting.');
      return;
    }

    const items = Array.isArray(parsed) ? parsed : [parsed];
    const added: string[] = [];

    for (const item of items) {
      if (typeof item !== 'object' || item === null || !('name' in item) || !('stats' in item)) {
        setError('Each character must have at least "name" and "stats" fields.');
        return;
      }
      const char = item as Omit<Character, 'id' | 'random_skills'>;
      const created = await addCharacter(char);
      added.push(created.name);
    }

    setJson('');
    setSuccess(`Added: ${added.join(', ')}`);
    onSuccess?.();
  };

  const handleFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (ev) => parseAndAdd(ev.target?.result as string);
    reader.readAsText(file);
    e.target.value = '';
  };

  const loadSample = () => {
    parseAndAdd(JSON.stringify(sampleCharacter));
  };

  return (
    <div className="bg-stone-800 border border-stone-700 rounded-xl p-5 space-y-4">
      <div className="flex justify-between items-center">
        <h3 className="text-sm font-bold uppercase text-stone-400 tracking-wider">
          Import Character
        </h3>
        <button
          onClick={loadSample}
          className="text-xs text-green-400 hover:text-green-300 border border-green-800 hover:border-green-600 px-3 py-1 rounded-lg transition-colors"
        >
          Load Sample (Mushy)
        </button>
      </div>

      <textarea
        value={json}
        onChange={(e) => setJson(e.target.value)}
        placeholder="Paste character JSON here, or use the file picker below..."
        rows={8}
        className="w-full bg-stone-950 border border-stone-700 rounded-lg px-3 py-2 text-stone-300 text-xs font-mono resize-y focus:outline-none focus:border-green-700 placeholder:text-stone-600"
      />

      {error && (
        <p className="text-red-400 text-xs bg-red-950 border border-red-800 rounded-lg px-3 py-2">
          {error}
        </p>
      )}
      {success && (
        <p className="text-green-400 text-xs bg-green-950 border border-green-800 rounded-lg px-3 py-2">
          {success}
        </p>
      )}

      <div className="flex gap-3">
        <button
          onClick={() => parseAndAdd(json)}
          disabled={!json.trim()}
          className="px-4 py-2 bg-green-800 hover:bg-green-700 text-green-100 text-sm rounded-lg transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
        >
          Import JSON
        </button>

        <button
          onClick={() => fileRef.current?.click()}
          className="px-4 py-2 bg-stone-700 hover:bg-stone-600 text-stone-200 text-sm rounded-lg transition-colors"
        >
          Upload File
        </button>
        <input
          ref={fileRef}
          type="file"
          accept=".json"
          onChange={handleFile}
          className="hidden"
        />
      </div>

      <details className="text-xs text-stone-500">
        <summary className="cursor-pointer hover:text-stone-300 transition-colors">
          JSON format reference
        </summary>
        <pre className="mt-2 bg-stone-950 rounded p-3 overflow-x-auto text-stone-400 text-[11px]">{`{
  "name": "Character Name",
  "class": "Class Name",
  "level": 1,
  "background": "...",
  "stats": { "str": 10, "dex": 10, "con": 10, "int": 10, "wis": 10, "cha": 10 },
  "armor_class": 12,
  "hit_points": { "max": 10, "current": 10 },
  "stamina": { "max": 5, "current": 5 },
  "ability_categories": [
    {
      "name": "Category",
      "flavor": "Short tagline.",
      "xp": { "current": 0, "max": 5 },
      "abilities": [
        { "name": "Ability", "description": "What it does.", "stamina_cost": 0 }
      ]
    }
  ]
}`}</pre>
      </details>
    </div>
  );
}
