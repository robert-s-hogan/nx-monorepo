import { useRouter } from 'next/router';
import { Text } from '@with-nx/react-ui';

import NeuroFitLayout from '../../../components/NeuroFitLayout';
import PlaylistEditor from '../../../components/PlaylistEditor';
import { usePlaylist } from '../../../hooks/usePlaylists';

function EditPlaylist() {
  const router = useRouter();
  const { id } = router.query;
  const { playlist, isLoading } = usePlaylist(id as string | undefined);

  return (
    <NeuroFitLayout title="Edit Playlist">
      {isLoading && (
        <Text className="text-text-color opacity-60 px-4 py-6 block">
          Loading…
        </Text>
      )}
      {playlist && <PlaylistEditor playlist={playlist} />}
    </NeuroFitLayout>
  );
}

export default EditPlaylist;
