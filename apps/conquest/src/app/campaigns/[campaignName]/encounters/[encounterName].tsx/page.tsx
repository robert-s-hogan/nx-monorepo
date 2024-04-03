'use client';
import React from 'react';
import useSWR from 'swr';

import Layout from '../../../../components/Layout'; // Adjust if you have a different layout
import { Encounter } from '../../../../types'; // Adjust if you have a different type
import { fetchEncounters as fetchEncountersService } from '../../../../services/encounterService'; // Adjust if you have a different service
import EncounterListWithModal from '../../../../components/EncounterListWithModal'; // Adjust if you have a different component

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
        <h1>Encounter Management</h1>
        <EncounterListWithModal encounters={encounters} />
      </div>
    </Layout>
  );
};

export default DynamicEncounterPage; // Adjust if you have a higher-order component for auth or other purposes
