import React from 'react';
import { Heading } from '@with-nx/generic-ui';
import ConquestLayout from '../../components/ConquestLayout';
import ConquestSection from '../../components/ConquestSection';

const ItemsPage: React.FC = () => {
  return (
    <ConquestLayout title="Items | Admin Dashboard">
      <ConquestSection className="space-y-6">
        <Heading level={1} text="Items Page" />
      </ConquestSection>
    </ConquestLayout>
  );
};

export default ItemsPage;
