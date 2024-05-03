import React from 'react';

import { Heading, Text } from '@with-nx/generic-ui';
import ConquestLayout from './components/ConquestLayout';
import ErrorBoundary from './components/ErrorBoundary';

const RootPage: React.FC = () => {
  return (
    <ConquestLayout title="Home | Conquest">
      <ErrorBoundary fallback={<div>Something went wrong.</div>}>
        <div className="container mx-auto my-16">
          <Heading level={1} text="Master Your Dungeons with Ease!" />
          <Text
            text="Track, manage, and generate dynamic campaigns and encounters in
          minutes."
          />
        </div>
      </ErrorBoundary>
    </ConquestLayout>
  );
};

export default RootPage;
