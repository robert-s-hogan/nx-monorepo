import DevBlogLayout from '../../components/layout/DevBlogLayout';
import dynamic from 'next/dynamic';

import { Heading, Text } from '@with-nx/react-ui';

const DynamicMap = dynamic(
  () => import('../../components/projects/dnd-interactive-map/KonvaMap'),
  {
    ssr: false,
  }
);

function Map() {
  return (
    <DevBlogLayout>
      <div className="container mx-auto max-w-7xl space-y-6 mb-6">
        <Heading level={1}>Dnd Interactive Map</Heading>
        <Text className="sub-title">
          I am building an app that will help Dungeon Masters run their games.
          The project is pretty ambitious in scope: authentication, campaigns,
          encounters, items, monsters, etc.
        </Text>
        <Text>
          Im breaking the project into a few pieces. I find that the map is the
          biggest looming part I can dont have a good path forward.
        </Text>
      </div>

      <div className="border-4 border-primary">
        <DynamicMap />
      </div>
    </DevBlogLayout>
  );
}

export default Map;
