'use client';
import React from 'react';
import useSWR from 'swr';

import { Heading } from '@with-nx/generic-ui';
import Layout from '../../../../components/ConquestLayout';
import { Encounter } from '../../../../types';
import { fetchEncounters as fetchEncountersService } from '../../../../services/encounterService';
import EncounterListWithModal from '../../../../components/ConquestEncounterListWithModal';

const DynamicEncounterPage = () => {
  const { data: encounters, error } = useSWR<Encounter[]>(
    'encounters',
    fetchEncountersService
  );

  if (error) return <div>Failed to load encounters</div>;
  if (!encounters) return <div>Loading...</div>;

  return (
    <Layout title="Encounters | Conquest">
      {/* Adjust if you have a different layout or title */}
      <div className="max-w-4xl xl:max-w-7xl container mx-auto space-y-8 mt-8 px-4">
        <Heading level={1} text="Encounter Management" />
        {/* <EncounterListWithModal encounters={encounters} /> */}
      </div>
    </Layout>
  );
};

export default DynamicEncounterPage;
