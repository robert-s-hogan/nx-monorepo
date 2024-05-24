'use client';
import React from 'react';
import useSWR from 'swr';

import { Heading } from '@with-nx/generic-ui';
import Layout from '../../../../components/ConquestLayout';
import { Encounter } from '../../../../types';
import { fetchEncounters } from '../../../../services/firebaseService';
import EncounterListWithModal from '../../../../components/ConquestEncounterListWithModal';
import ConquestSection from '../../../../components/ConquestSection';

const DynamicEncounterPage = () => {
  const { data: encounters, error } = useSWR<Encounter[]>(
    'encounters',
    fetchEncounters
  );

  if (error) return <div>Failed to load encounters</div>;
  if (!encounters) return <div>Loading...</div>;

  return (
    <Layout title="Encounters | Conquest">
      <ConquestSection>
        <Heading level={1} text="Encounter Management" />
        {/* <EncounterListWithModal encounters={encounters} /> */}
      </ConquestSection>
    </Layout>
  );
};

export default DynamicEncounterPage;
