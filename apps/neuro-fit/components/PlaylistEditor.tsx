import { useState } from 'react';
import { useRouter } from 'next/router';
import { Button, Heading, Text } from '@with-nx/react-ui';

import { useExercises } from '../hooks/useExercises';
import {
  createPlaylist,
  updatePlaylist,
  savePlaylistItems,
} from '../hooks/usePlaylists';
import type { PlaylistWithItems, PlaylistItemInput, WeightUnit } from '../types';

const inputClass =
  'w-full bg-surface-color border border-border-color rounded-lg px-3 py-2 text-text-color placeholder:text-text-color placeholder:opacity-40 focus:outline-none focus:border-primary';

// Local editable shape — same fields as PlaylistItemInput, plus exercise_id
// as a stable key for React lists (position is derived from array order at
// save time, not tracked per-item while editing).
interface EditableItem {
  exercise_id: number;
  exercise_name: string;
  sets: number | null;
  weight: number | null;
  weight_unit: WeightUnit | null;
  duration_seconds: number | null;
}

function itemsFromPlaylist(playlist?: PlaylistWithItems): EditableItem[] {
  if (!playlist) return [];
  return playlist.items.map((item) => ({
    exercise_id: item.exercise_id,
    exercise_name: item.exercise.name,
    sets: item.sets,
    weight: item.weight,
    weight_unit: item.weight_unit,
    duration_seconds: item.duration_seconds,
  }));
}

interface PlaylistEditorProps {
  playlist?: PlaylistWithItems;
}

const PlaylistEditor = ({ playlist }: PlaylistEditorProps) => {
  const router = useRouter();
  const { exercises } = useExercises();

  const [name, setName] = useState(playlist?.name ?? '');
  const [description, setDescription] = useState(playlist?.description ?? '');
  const [items, setItems] = useState<EditableItem[]>(itemsFromPlaylist(playlist));
  const [pickerId, setPickerId] = useState('');
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState('');

  const addItem = () => {
    const exercise = exercises.find((e) => e.id === Number(pickerId));
    if (!exercise) return;
    setItems((prev) => [
      ...prev,
      {
        exercise_id: exercise.id,
        exercise_name: exercise.name,
        sets: null,
        weight: null,
        weight_unit: 'lb',
        duration_seconds: null,
      },
    ]);
    setPickerId('');
  };

  const removeItem = (index: number) => {
    setItems((prev) => prev.filter((_, i) => i !== index));
  };

  const moveItem = (index: number, direction: -1 | 1) => {
    setItems((prev) => {
      const next = [...prev];
      const target = index + direction;
      if (target < 0 || target >= next.length) return prev;
      [next[index], next[target]] = [next[target], next[index]];
      return next;
    });
  };

  const updateItem = (index: number, patch: Partial<EditableItem>) => {
    setItems((prev) =>
      prev.map((item, i) => (i === index ? { ...item, ...patch } : item))
    );
  };

  const handleSave = async () => {
    setError('');
    if (!name.trim()) {
      setError('Playlist name is required.');
      return;
    }

    setSaving(true);
    try {
      const input = { name: name.trim(), description };
      const playlistItems: PlaylistItemInput[] = items.map((item, index) => ({
        exercise_id: item.exercise_id,
        position: index,
        sets: item.sets,
        weight: item.weight,
        weight_unit: item.weight_unit,
        duration_seconds: item.duration_seconds,
      }));

      const id = playlist ? playlist.id : await createPlaylist(input);
      if (playlist) await updatePlaylist(id, input);
      await savePlaylistItems(id, playlistItems);

      router.push(`/playlists/${id}`);
    } finally {
      setSaving(false);
    }
  };

  return (
    <div className="max-w-lg mx-auto px-4 py-6 space-y-6">
      <Heading level={1} className="text-2xl font-bold text-text-color">
        {playlist ? 'Edit Playlist' : 'New Playlist'}
      </Heading>

      <div className="space-y-3">
        <input
          className={inputClass}
          placeholder="Playlist name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <textarea
          className={inputClass}
          placeholder="Description (optional)"
          rows={2}
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </div>

      <div className="space-y-3">
        <Heading level={2} className="text-lg font-semibold text-text-color">
          Exercises
        </Heading>

        {items.length === 0 && (
          <Text className="text-text-color opacity-60">
            No exercises added yet.
          </Text>
        )}

        {items.map((item, index) => (
          <div key={index} className="bg-surface-color rounded-lg p-3 space-y-2">
            <div className="flex items-center justify-between">
              <Text className="text-text-color font-medium">
                {item.exercise_name}
              </Text>
              <div className="flex items-center gap-1">
                <button
                  onClick={() => moveItem(index, -1)}
                  disabled={index === 0}
                  aria-label="Move up"
                  className="text-text-color opacity-70 disabled:opacity-20 px-2"
                >
                  ↑
                </button>
                <button
                  onClick={() => moveItem(index, 1)}
                  disabled={index === items.length - 1}
                  aria-label="Move down"
                  className="text-text-color opacity-70 disabled:opacity-20 px-2"
                >
                  ↓
                </button>
                <button
                  onClick={() => removeItem(index)}
                  aria-label={`Remove ${item.exercise_name}`}
                  className="text-error-color px-2"
                >
                  ✕
                </button>
              </div>
            </div>
            <div className="grid grid-cols-3 gap-2">
              <label className="text-xs text-text-color opacity-60">
                Sets
                <input
                  type="number"
                  min={0}
                  className={inputClass}
                  value={item.sets ?? ''}
                  onChange={(e) =>
                    updateItem(index, {
                      sets: e.target.value ? Number(e.target.value) : null,
                    })
                  }
                />
              </label>
              <label className="text-xs text-text-color opacity-60">
                Weight
                <input
                  type="number"
                  min={0}
                  className={inputClass}
                  value={item.weight ?? ''}
                  onChange={(e) =>
                    updateItem(index, {
                      weight: e.target.value ? Number(e.target.value) : null,
                    })
                  }
                />
              </label>
              <label className="text-xs text-text-color opacity-60">
                Time (sec)
                <input
                  type="number"
                  min={0}
                  className={inputClass}
                  value={item.duration_seconds ?? ''}
                  onChange={(e) =>
                    updateItem(index, {
                      duration_seconds: e.target.value
                        ? Number(e.target.value)
                        : null,
                    })
                  }
                />
              </label>
            </div>
            {item.weight !== null && (
              <div className="flex gap-2 text-xs text-text-color opacity-70">
                <button
                  onClick={() => updateItem(index, { weight_unit: 'lb' })}
                  className={item.weight_unit === 'lb' ? 'font-bold underline' : ''}
                >
                  lb
                </button>
                <button
                  onClick={() => updateItem(index, { weight_unit: 'kg' })}
                  className={item.weight_unit === 'kg' ? 'font-bold underline' : ''}
                >
                  kg
                </button>
              </div>
            )}
          </div>
        ))}

        <div className="flex gap-2">
          <select
            className={inputClass}
            value={pickerId}
            onChange={(e) => setPickerId(e.target.value)}
          >
            <option value="">Pick an exercise…</option>
            {exercises.map((exercise) => (
              <option key={exercise.id} value={exercise.id}>
                {exercise.name}
              </option>
            ))}
          </select>
          <Button
            onClick={addItem}
            disabled={!pickerId}
            className="bg-secondary text-text-on-secondary-color px-4 py-2 rounded-lg font-medium disabled:opacity-50 whitespace-nowrap"
          >
            Add
          </Button>
        </div>

        {exercises.length === 0 && (
          <Text className="text-text-color opacity-60 text-sm">
            No exercises in your library yet — add some on the Exercises page
            first.
          </Text>
        )}
      </div>

      {error && <Text className="text-error-color text-sm">{error}</Text>}

      <Button
        onClick={handleSave}
        disabled={saving}
        variant="primary"
        className="bg-primary text-text-on-primary-color px-4 py-2 rounded-lg font-medium w-full disabled:opacity-50"
      >
        {saving ? 'Saving…' : 'Save playlist'}
      </Button>
    </div>
  );
};

export default PlaylistEditor;
