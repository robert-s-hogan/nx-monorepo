import dynamic from 'next/dynamic';

import DevBlogLayout from '../../components/DevBlogLayout';
import DevBlogSection from '../../components/DevBlogSection';

const DNDMap = dynamic(
  () => import('../../components/projects/konva-map-generic/DNDMap'),
  {
    ssr: false,
  }
);

const KonvaMapGeneric: React.FC = () => {
  return (
    <DevBlogLayout title="Konva Map Generic">
      <h1>Konva Map Generic</h1>
      <DevBlogSection style={{ overflow: 'hidden' }}>
        <DNDMap />
      </DevBlogSection>
    </DevBlogLayout>
  );
};

export default KonvaMapGeneric;
