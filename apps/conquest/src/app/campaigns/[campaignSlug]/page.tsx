'use client';

import { useEffect } from 'react';
import { NextPage } from 'next';
import Layout from '../../components/ConquestLayout';
import EncounterListWithModal from '../../components/ConquestEncounterListWithModal';
import CampaignListWithModal from '../../components/ConquestCampaignListWithModal';
import { EncounterProvider } from '../../contexts/EncounterContext';
import { useEncounters } from '../../hooks/useEncounters';
import { useCampaigns } from '../../hooks/useCampaigns';
import { Flex, Text } from '@with-nx/generic-ui';

const DynamicCampaignsPage: NextPage = () => {
  const {
    campaigns: firestoreCampaigns,
    selectedCampaign,
    isLoading: isCampaignsLoading,
    isError: isCampaignsError,
  } = useCampaigns();

  const campaigns = firestoreCampaigns
    ? firestoreCampaigns.map((doc) => ({
        id: doc.id,
        name: doc.name,
        slug: doc.slug,
        description: doc.description,
        numberOfPlayers: doc.numberOfPlayers,
        playerExperienceStart: doc.playerExperienceStart,
        levelDetails: doc.levelDetails,
        levelOfPlayersCharactersStart: doc.levelOfPlayersCharactersStart,
        adventuringDayXPLimit: doc.adventuringDayXPLimit,
        groupDead: doc.groupDead,
        shortRests: doc.shortRests,
        longRestNeeded: doc.longRestNeeded,
        accountId: doc.accountId,
        createdAt: doc.createdAt,
        updatedAt: doc.updatedAt,
      }))
    : [];

  const {
    encounters,
    isLoading: isEncountersLoading,
    isError: isEncountersError,
  } = useEncounters(selectedCampaign?.id as string);

  if (isCampaignsLoading) return <div>Loading campaigns...</div>;
  if (isCampaignsError) return <div>Error loading campaigns.</div>;
  if (!selectedCampaign) return <div>No campaign selected.</div>;

  return (
    <EncounterProvider>
      <Layout title={selectedCampaign.name}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 w-full pt-8 px-4">
          {selectedCampaign && selectedCampaign ? (
            <CampaignListWithModal campaigns={campaigns} hideEdit={true} />
          ) : (
            <Text text="No campaign found" />
          )}
          <Flex className="flex-col">
            {isEncountersLoading ? (
              <Text text="Loading encounters..." />
            ) : isEncountersError ? (
              <Text text="Error loading encounters." />
            ) : (
              <EncounterListWithModal
                encounters={encounters || []}
                campaigns={campaigns}
              />
            )}
          </Flex>
        </div>
      </Layout>
    </EncounterProvider>
  );
};

export default DynamicCampaignsPage;
