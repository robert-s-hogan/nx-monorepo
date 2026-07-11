import { useEffect, useRef, useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { Button, Heading, Text } from '@with-nx/react-ui';

import NeuroFitLayout from '../../../components/NeuroFitLayout';
import YouTubeEmbed from '../../../components/YouTubeEmbed';
import { usePlaylist } from '../../../hooks/usePlaylists';
import { speak } from '../../../lib/speech';
import type { PlaylistItem } from '../../../types';

const ANNOUNCEMENT_PAUSE_MS = 2500;

function itemSummary(item: PlaylistItem): string {
  const parts: string[] = [];
  if (item.sets) parts.push(`${item.sets} sets`);
  if (item.weight) parts.push(`${item.weight}${item.weight_unit ?? 'lb'}`);
  return parts.join(' · ');
}

function SessionRunner({ items }: { items: PlaylistItem[] }) {
  const router = useRouter();
  const playlistId = items[0]?.playlist_id;

  const [index, setIndex] = useState(0);
  const [timeLeft, setTimeLeft] = useState<number | null>(
    items[0]?.duration_seconds ?? null
  );
  const [paused, setPaused] = useState(false);
  const [finished, setFinished] = useState(false);
  const advancingRef = useRef(false);

  const current = items[index];
  const next = items[index + 1];

  const advance = () => {
    if (advancingRef.current) return;
    advancingRef.current = true;

    if (next) {
      speak(`Next up: ${next.exercise.name}`);
    } else {
      speak('Workout complete!');
    }

    setTimeout(() => {
      if (next) {
        setIndex((i) => i + 1);
      } else {
        setFinished(true);
      }
      advancingRef.current = false;
    }, ANNOUNCEMENT_PAUSE_MS);
  };

  // Reset the countdown whenever we move to a new exercise.
  useEffect(() => {
    setTimeLeft(current?.duration_seconds ?? null);
  }, [index, current?.duration_seconds]);

  // Countdown ticker — only runs when this exercise has a duration and
  // we're not paused/mid-announcement.
  useEffect(() => {
    if (timeLeft === null || paused || finished || advancingRef.current) {
      return;
    }
    if (timeLeft <= 0) {
      advance();
      return;
    }
    const timer = setTimeout(() => setTimeLeft((t) => (t ?? 1) - 1), 1000);
    return () => clearTimeout(timer);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [timeLeft, paused, finished]);

  if (finished) {
    return (
      <div className="max-w-lg mx-auto px-4 py-6 space-y-6 text-center">
        <Heading level={1} className="text-2xl font-bold text-text-color">
          Workout complete! 🎉
        </Heading>
        <Link href={`/playlists/${playlistId}`}>
          <Button
            variant="primary"
            className="bg-primary text-text-on-primary-color px-4 py-2 rounded-lg font-medium w-full"
          >
            Back to playlist
          </Button>
        </Link>
      </div>
    );
  }

  const summary = itemSummary(current);

  return (
    <div className="max-w-lg mx-auto px-4 py-6 space-y-4">
      <div className="flex items-center justify-between">
        <Link
          href={`/playlists/${playlistId}`}
          className="text-text-color opacity-60 text-sm"
        >
          ✕ Exit
        </Link>
        <Text className="text-text-color opacity-60 text-sm">
          {index + 1} / {items.length}
        </Text>
      </div>

      <YouTubeEmbed
        videoId={current.exercise.youtube_video_id}
        title={current.exercise.name}
        startSeconds={current.exercise.start_seconds}
        endSeconds={current.exercise.end_seconds}
      />

      <div className="text-center space-y-1">
        <Heading level={1} className="text-2xl font-bold text-text-color">
          {current.exercise.name}
        </Heading>
        {summary && (
          <Text className="text-text-color opacity-70">{summary}</Text>
        )}
      </div>

      {timeLeft !== null ? (
        <div className="text-center">
          <div className="text-6xl font-bold text-primary tabular-nums">
            {timeLeft}
          </div>
          <Button
            onClick={() => setPaused((p) => !p)}
            className="text-text-color opacity-70 text-sm mt-2"
          >
            {paused ? 'Resume' : 'Pause'}
          </Button>
        </div>
      ) : (
        <Button
          onClick={advance}
          variant="primary"
          className="bg-primary text-text-on-primary-color px-4 py-2 rounded-lg font-medium w-full"
        >
          {next ? 'Next Exercise' : 'Finish Workout'}
        </Button>
      )}

      {timeLeft !== null && (
        <Button
          onClick={advance}
          className="text-text-color opacity-50 text-sm w-full text-center"
        >
          Skip
        </Button>
      )}
    </div>
  );
}

function Session() {
  const router = useRouter();
  const { id } = router.query;
  const { playlist, isLoading } = usePlaylist(id as string | undefined);

  return (
    <NeuroFitLayout title={playlist ? `${playlist.name} — Workout` : 'Workout'}>
      {isLoading && (
        <Text className="text-text-color opacity-60 px-4 py-6 block">
          Loading…
        </Text>
      )}
      {playlist && playlist.items.length > 0 && (
        <SessionRunner items={playlist.items} />
      )}
      {playlist && playlist.items.length === 0 && (
        <div className="max-w-lg mx-auto px-4 py-6">
          <Text className="text-text-color opacity-60">
            This playlist has no exercises yet.
          </Text>
        </div>
      )}
    </NeuroFitLayout>
  );
}

export default Session;
