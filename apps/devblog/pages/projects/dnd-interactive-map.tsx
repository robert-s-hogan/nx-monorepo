import DevBlogLayout from '../../components/DevBlogLayout';
import dynamic from 'next/dynamic';

import { Heading, Text, Link } from '@with-nx/react-ui';

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
        <Heading level={1}>Dnd Interactive Map (Work In Progress)</Heading>
        <Text className="sub-title">
          Click the icons to interact with the map
        </Text>
        <Link
          href="/blog/projects-dnd-interactive-map.mdx"
          className="underline"
        >
          Here is my blog for more technical details
        </Link>
      </div>

      <DynamicMap />
    </DevBlogLayout>
  );
}

export default Map;
