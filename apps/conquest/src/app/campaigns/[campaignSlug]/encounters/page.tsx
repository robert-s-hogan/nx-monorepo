'use client';
import React from 'react';
import useSWR from 'swr';

import { Heading } from '@with-nx/generic-ui';
import Layout from '../../../components/ConquestLayout';
import ConquestSection from '../../../components/ConquestSection';
import { Encounter } from '../../../types';
import { fetchEncounters as fetchEncountersService } from '../../../services/encounterService';
import EncounterListWithModal from '../../../components/ConquestEncounterListWithModal';

const EncounterPage = () => {
  const { data: encounters, error } = useSWR<Encounter[]>(
    'encounters',
    fetchEncountersService
  );

  if (error) return <div>Failed to load encounters</div>;
  if (!encounters) return <div>Loading...</div>;

  return (
    <Layout title="Encounters | Conquest">
      <ConquestSection className="space-y-8">
        <Heading level={1} text="Encounter Management" />
        <EncounterListWithModal encounters={encounters} />
      </ConquestSection>
    </Layout>
  );
};

export default EncounterPage;
