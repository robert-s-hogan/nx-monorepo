'use client';

import { useEffect } from 'react';
import { NextPage } from 'next';
import Layout from '../../components/Layout';
import EncounterListWithModal from '../../components/EncounterListWithModal';
import { EncounterProvider } from '../../contexts/EncounterContext';
import { useEncounters } from '../../hooks/useEncounters';
import CampaignListWithModal from '../../components/CampaignListWithModal';
import { useCampaigns } from '../../hooks/useCampaigns'; // Assuming useCampaigns is in the hooks directory

const DynamicCampaignsPage: NextPage = () => {
  const {
    campaigns,
    selectedCampaign,
    isLoading: isCampaignsLoading,
    isError: isCampaignsError,
  } = useCampaigns();

  const {
    encounters,
    isLoading: isEncountersLoading,
    isError: isEncountersError,
  } = useEncounters(selectedCampaign?.id as string);

  useEffect(() => {
    if (!selectedCampaign) {
      console.log('No campaign selected or campaign data is still loading.');
    }
  }, [selectedCampaign]);

  if (isCampaignsLoading) return <div>Loading campaigns...</div>;
  if (isCampaignsError) return <div>Error loading campaigns.</div>;
  if (!selectedCampaign) return <div>No campaign selected.</div>;

  return (
    <EncounterProvider>
      <Layout title={selectedCampaign.name}>
        <div className="flex flex-col lg:flex-row w-full">
          <pre>
            Select campaign: {JSON.stringify(selectedCampaign, null, 2)}
          </pre>
          <CampaignListWithModal
            campaigns={campaigns || []}
            hideEdit={false}
            selectedCampaignSlug={selectedCampaign.slug}
          />

          <div className="w-full lg:w-1/2 p-4 flex flex-col">
            {isEncountersLoading ? (
              <div>Loading encounters...</div>
            ) : isEncountersError ? (
              <div>Error loading encounters.</div>
            ) : (
              <EncounterListWithModal
                encounters={encounters || []}
                campaigns={campaigns}
              />
            )}
          </div>
        </div>
      </Layout>
    </EncounterProvider>
  );
};

export default DynamicCampaignsPage;
