import Link from 'next/link';
import { Button, Heading, Text } from '@with-nx/react-ui';

import NeuroFitLayout from '../components/NeuroFitLayout';
import { usePlaylists } from '../hooks/usePlaylists';

function Index() {
  const { playlists, isLoading } = usePlaylists();

  return (
    <NeuroFitLayout>
      <div className="max-w-lg mx-auto px-4 py-6 space-y-6">
        <div className="flex items-center justify-between">
          <Heading level={1} className="text-2xl font-bold text-text-color">
            Playlists
          </Heading>
          <Link href="/exercises" className="text-primary text-sm">
            Exercises
          </Link>
        </div>

        <div className="space-y-3">
          {isLoading && (
            <Text className="text-text-color opacity-60">Loading…</Text>
          )}
          {!isLoading && playlists.length === 0 && (
            <Text className="text-text-color opacity-60">
              No playlists yet — create your first one below.
            </Text>
          )}
          {playlists.map((playlist) => (
            <Link
              key={playlist.id}
              href={`/playlists/${playlist.id}`}
              className="block bg-surface-color rounded-lg px-4 py-3"
            >
              <Text className="text-text-color font-medium">{playlist.name}</Text>
              {playlist.description && (
                <Text className="text-text-color opacity-60 text-sm">
                  {playlist.description}
                </Text>
              )}
            </Link>
          ))}
        </div>

        <Link href="/playlists/new">
          <Button
            variant="primary"
            className="bg-primary text-text-on-primary-color px-4 py-2 rounded-lg font-medium w-full"
          >
            + New Playlist
          </Button>
        </Link>
      </div>
    </NeuroFitLayout>
  );
}

export default Index;
