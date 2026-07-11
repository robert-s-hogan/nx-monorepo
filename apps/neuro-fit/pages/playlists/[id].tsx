import { useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { Button, Heading, Text } from '@with-nx/react-ui';

import NeuroFitLayout from '../../components/NeuroFitLayout';
import YouTubeEmbed from '../../components/YouTubeEmbed';
import { usePlaylist, deletePlaylist } from '../../hooks/usePlaylists';
import type { PlaylistItem } from '../../types';

function formatDuration(seconds: number): string {
  const mins = Math.floor(seconds / 60);
  const secs = seconds % 60;
  return mins > 0 ? `${mins}:${secs.toString().padStart(2, '0')}` : `${secs}s`;
}

function itemSummary(item: PlaylistItem): string {
  const parts: string[] = [];
  if (item.sets) parts.push(`${item.sets} sets`);
  if (item.weight) parts.push(`${item.weight}${item.weight_unit ?? 'lb'}`);
  if (item.duration_seconds) parts.push(formatDuration(item.duration_seconds));
  return parts.join(' · ');
}

function PlaylistItemRow({
  item,
  isOpen,
  onToggle,
}: {
  item: PlaylistItem;
  isOpen: boolean;
  onToggle: () => void;
}) {
  const summary = itemSummary(item);

  return (
    <div className="bg-surface-color rounded-lg overflow-hidden">
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between px-4 py-3 text-left"
      >
        <div>
          <Text className="text-text-color font-medium">{item.exercise.name}</Text>
          {summary && (
            <Text className="text-text-color opacity-60 text-sm">{summary}</Text>
          )}
        </div>
        <span className="text-primary text-xl">{isOpen ? '▲' : '▶'}</span>
      </button>
      {isOpen && (
        <div className="px-4 pb-4 space-y-3">
          <YouTubeEmbed
            videoId={item.exercise.youtube_video_id}
            title={item.exercise.name}
            startSeconds={item.exercise.start_seconds}
            endSeconds={item.exercise.end_seconds}
          />
          {item.exercise.notes && (
            <Text className="text-text-color opacity-70 text-sm">
              {item.exercise.notes}
            </Text>
          )}
        </div>
      )}
    </div>
  );
}

function PlaylistDetail() {
  const router = useRouter();
  const { id } = router.query;
  const { playlist, isLoading } = usePlaylist(id as string | undefined);
  const [openItemId, setOpenItemId] = useState<number | null>(null);

  const handleDelete = async () => {
    if (!playlist) return;
    if (!confirm(`Delete "${playlist.name}"?`)) return;
    await deletePlaylist(playlist.id);
    router.push('/');
  };

  return (
    <NeuroFitLayout title={playlist?.name ?? 'Playlist'}>
      <div className="max-w-lg mx-auto px-4 py-6 space-y-6">
        {isLoading && (
          <Text className="text-text-color opacity-60">Loading…</Text>
        )}

        {playlist && (
          <>
            <div className="flex items-start justify-between gap-4">
              <div>
                <Heading level={1} className="text-2xl font-bold text-text-color">
                  {playlist.name}
                </Heading>
                {playlist.description && (
                  <Text className="text-text-color opacity-70">
                    {playlist.description}
                  </Text>
                )}
              </div>
              <Link
                href={`/playlists/${playlist.id}/edit`}
                className="text-primary text-sm whitespace-nowrap"
              >
                Edit
              </Link>
            </div>

            {playlist.items.length > 0 && (
              <Link href={`/playlists/${playlist.id}/session`}>
                <Button
                  variant="primary"
                  className="bg-primary text-text-on-primary-color px-4 py-2 rounded-lg font-medium w-full"
                >
                  ▶ Start Workout
                </Button>
              </Link>
            )}

            <div className="space-y-3">
              {playlist.items.length === 0 && (
                <Text className="text-text-color opacity-60">
                  No exercises in this playlist yet.{' '}
                  <Link href={`/playlists/${playlist.id}/edit`} className="text-primary">
                    Add some
                  </Link>
                  .
                </Text>
              )}
              {playlist.items.map((item) => (
                <PlaylistItemRow
                  key={item.id}
                  item={item}
                  isOpen={openItemId === item.id}
                  onToggle={() =>
                    setOpenItemId(openItemId === item.id ? null : item.id)
                  }
                />
              ))}
            </div>

            <Button
              onClick={handleDelete}
              className="text-error-color text-sm w-full text-center py-2"
            >
              Delete playlist
            </Button>
          </>
        )}
      </div>
    </NeuroFitLayout>
  );
}

export default PlaylistDetail;
