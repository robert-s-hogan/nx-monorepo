import { Heading, Text } from '@with-nx/generic-ui';
import ConquestLayout from './components/ConquestLayout';
import ConquestSection from './components/ConquestSection';
import ErrorBoundary from './components/ErrorBoundary';

const RootPage: React.FC = () => {
  return (
    <ConquestLayout title="Home | Conquest">
      <ErrorBoundary fallback={<div>Something went wrong.</div>}>
        <ConquestSection>
          <Heading level={1} text="Master Your Dungeons with Ease!" />
          <Text
            text="Track, manage, and generate dynamic campaigns and encounters in
          minutes."
          />
        </ConquestSection>
      </ErrorBoundary>
    </ConquestLayout>
  );
};

export default RootPage;
