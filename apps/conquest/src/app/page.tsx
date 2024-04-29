import React from 'react';

import { Heading, Text } from '@with-nx/generic-ui';
import Layout from './components/ConquestLayout';

const RootPage: React.FC = () => {
  return (
    <Layout>
      <div className="container mx-auto my-16">
        <Heading level={1} text="Master Your Dungeons with Ease!" />
        <Text
          text="Track, manage, and generate dynamic campaigns and encounters in
          minutes."
        />
      </div>
    </Layout>
  );
};

export default RootPage;
