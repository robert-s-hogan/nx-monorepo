// CampaignSlug.tsx
'use client';

import { NextPage } from 'next';
import { useRouter } from 'next/navigation';
import ConquestLayout from '../../components/ConquestLayout';
import EncounterListWithModal from '../../components/ConquestEncounterListWithModal';
import CampaignListWithModal from '../../components/ConquestCampaignListWithModal';
import { useEncounters } from '../../hooks/useEncounters';
import { Flex, Text } from '@with-nx/generic-ui';
import { useParams } from 'next/navigation';
import { useCampaignsContext } from '../../contexts/CampaignContext';

const CampaignSlug: NextPage = () => {
  const { slug } = useParams();
  const router = useRouter();

  const {
    campaigns: firestoreCampaigns,
    loading: isCampaignsLoading,
    error: isCampaignsError,
  } = useCampaignsContext();

  const campaigns = firestoreCampaigns.map((doc) => ({
    id: doc.id || '',
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
  }));

  const selectedCampaign = campaigns.find((campaign) => campaign.slug === slug);

  const {
    encounters,
    isLoading: isEncountersLoading,
    isError: isEncountersError,
  } = useEncounters(selectedCampaign ? selectedCampaign.id : '');

  if (isCampaignsLoading) return <div>Loading campaigns...</div>;
  if (isCampaignsError) return <div>Error loading campaigns.</div>;
  if (!selectedCampaign) return <div>No campaign selected.</div>;

  return (
    <ConquestLayout title={selectedCampaign.name}>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 w-full pt-8 px-4">
        <CampaignListWithModal campaigns={campaigns} hideEdit={true} />
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
    </ConquestLayout>
  );
};

export default CampaignSlug;
