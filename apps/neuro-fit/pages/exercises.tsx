import { useState } from 'react';
import { Button, Heading, Text } from '@with-nx/react-ui';

import NeuroFitLayout from '../components/NeuroFitLayout';
import { useExercises, createExercise, deleteExercise } from '../hooks/useExercises';
import { extractYouTubeId } from '../lib/youtube';

const inputClass =
  'w-full bg-surface-color border border-border-color rounded-lg px-3 py-2 text-text-color placeholder:text-text-color placeholder:opacity-40 focus:outline-none focus:border-primary';

function AddExerciseForm({ onAdded }: { onAdded: () => void }) {
  const [name, setName] = useState('');
  const [videoInput, setVideoInput] = useState('');
  const [notes, setNotes] = useState('');
  const [startSeconds, setStartSeconds] = useState('');
  const [endSeconds, setEndSeconds] = useState('');
  const [error, setError] = useState('');
  const [saving, setSaving] = useState(false);

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setError('');

    const youtube_video_id = extractYouTubeId(videoInput);
    if (!name.trim()) {
      setError('Name is required.');
      return;
    }
    if (!youtube_video_id) {
      setError("Couldn't find a YouTube video ID in that link.");
      return;
    }

    setSaving(true);
    try {
      await createExercise({
        name: name.trim(),
        youtube_video_id,
        notes,
        start_seconds: startSeconds ? Number(startSeconds) : null,
        end_seconds: endSeconds ? Number(endSeconds) : null,
      });
      setName('');
      setVideoInput('');
      setNotes('');
      setStartSeconds('');
      setEndSeconds('');
      onAdded();
    } finally {
      setSaving(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-3 bg-surface-color rounded-xl p-4">
      <Heading level={2} className="text-lg font-semibold text-text-color">
        Add an exercise
      </Heading>
      <input
        className={inputClass}
        placeholder="Name (e.g. Goblet Squat)"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        className={inputClass}
        placeholder="YouTube link"
        value={videoInput}
        onChange={(e) => setVideoInput(e.target.value)}
      />
      <div className="grid grid-cols-2 gap-2">
        <label className="text-xs text-text-color opacity-60">
          Clip start (sec)
          <input
            type="number"
            min={0}
            className={inputClass}
            placeholder="e.g. 8"
            value={startSeconds}
            onChange={(e) => setStartSeconds(e.target.value)}
          />
        </label>
        <label className="text-xs text-text-color opacity-60">
          Clip end (sec)
          <input
            type="number"
            min={0}
            className={inputClass}
            placeholder="e.g. 25"
            value={endSeconds}
            onChange={(e) => setEndSeconds(e.target.value)}
          />
        </label>
      </div>
      <Text className="text-text-color opacity-50 text-xs">
        Optional — skips the intro and loops just that portion. Leave blank to
        play the full video.
      </Text>
      <textarea
        className={inputClass}
        placeholder="Notes (optional)"
        rows={2}
        value={notes}
        onChange={(e) => setNotes(e.target.value)}
      />
      {error && <Text className="text-error-color text-sm">{error}</Text>}
      <Button
        type="submit"
        disabled={saving}
        variant="primary"
        className="bg-primary text-text-on-primary-color px-4 py-2 rounded-lg font-medium w-full disabled:opacity-50"
      >
        {saving ? 'Adding…' : 'Add exercise'}
      </Button>
    </form>
  );
}

function Index() {
  const { exercises, isLoading, refresh } = useExercises();

  const handleDelete = async (id: number) => {
    if (!confirm('Remove this exercise? It will be removed from any playlists too.')) {
      return;
    }
    await deleteExercise(id);
    refresh();
  };

  return (
    <NeuroFitLayout title="Exercise Library">
      <div className="max-w-lg mx-auto px-4 py-6 space-y-6">
        <Heading level={1} className="text-2xl font-bold text-text-color">
          Exercise Library
        </Heading>

        <AddExerciseForm onAdded={() => refresh()} />

        <div className="space-y-3">
          {isLoading && <Text className="text-text-color opacity-60">Loading…</Text>}
          {!isLoading && exercises.length === 0 && (
            <Text className="text-text-color opacity-60">
              No exercises yet — add one above.
            </Text>
          )}
          {exercises.map((exercise) => (
            <div
              key={exercise.id}
              className="flex items-center justify-between bg-surface-color rounded-lg px-4 py-3"
            >
              <div>
                <Text className="text-text-color font-medium">{exercise.name}</Text>
                {exercise.notes && (
                  <Text className="text-text-color opacity-60 text-sm">
                    {exercise.notes}
                  </Text>
                )}
                {(exercise.start_seconds !== null || exercise.end_seconds !== null) && (
                  <Text className="text-text-color opacity-40 text-xs">
                    Clip: {exercise.start_seconds ?? 0}s–{exercise.end_seconds ?? '…'}s
                  </Text>
                )}
              </div>
              <button
                onClick={() => handleDelete(exercise.id)}
                aria-label={`Remove ${exercise.name}`}
                className="text-error-color text-sm px-2 py-1"
              >
                Remove
              </button>
            </div>
          ))}
        </div>
      </div>
    </NeuroFitLayout>
  );
}

export default Index;
