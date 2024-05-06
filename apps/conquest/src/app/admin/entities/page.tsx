import { Heading } from '@with-nx/generic-ui';
import ConquestLayout from '../../components/ConquestLayout';
import ConquestSection from '../../components/ConquestSection';

const EntitiesPage: React.FC = () => {
  return (
    <ConquestLayout title="Entities | Admin Dashboard">
      <ConquestSection className="space-y-6">
        <Heading level={1} text="Entities Page" />
      </ConquestSection>
    </ConquestLayout>
  );
};

export default EntitiesPage;
