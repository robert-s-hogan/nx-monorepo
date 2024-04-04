'use client';

import { useEffect, useState } from 'react';
import { NextPage } from 'next';
import { usePathname } from 'next/navigation';

import Layout from '../../components/Layout';
import { fetchCampaignBySlug } from '../../services/campaignService';
import { Campaign as CampaignType } from '../../types';
import EncounterListWithModal from '../../components/EncounterListWithModal';
import { EncounterProvider } from '../../contexts/EncounterContext';
import { useEncounters } from '../../hooks/useEncounters';
import useSWR from 'swr';
import CampaignListWithModal from '../../components/CampaignListWithModal';
import { fetchCampaigns as fetchCampaignsService } from '../../services/campaignService';

const DynamicCampaignsPage: NextPage = () => {
  const pathname = usePathname();
  const { data: campaigns } = useSWR<CampaignType[]>(
    'campaigns',
    fetchCampaignsService
  );
  const [selectedCampaign, setSelectedCampaign] = useState<CampaignType | null>(
    null
  );

  const {
    encounters,
    isLoading: isEncountersLoading,
    isError: isEncountersError,
  } = useEncounters(selectedCampaign?.id as string);

  useEffect(() => {
    const slug = pathname.split('/').pop();
    if (slug && campaigns) {
      // Check if the campaign is already in the fetched campaigns list
      const campaignFromList = campaigns.find(
        (campaign) => campaign.slug === slug
      );
      if (campaignFromList) {
        setSelectedCampaign(campaignFromList);
      } else {
        // Fetch the campaign by slug if not found in the list
        const fetchAndSetCampaign = async () => {
          const fetchedCampaign = await fetchCampaignBySlug(
            decodeURIComponent(slug)
          );
          setSelectedCampaign(fetchedCampaign);
        };
        fetchAndSetCampaign();
      }
    }
  }, [pathname, campaigns]); // Depend on campaigns to ensure it's loaded

  if (!selectedCampaign) return <div>Loading...</div>;

  return (
    <EncounterProvider>
      <Layout title={selectedCampaign.name}>
        <div className="flex flex-col lg:flex-row w-full">
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
              <EncounterListWithModal encounters={encounters || []} />
            )}
          </div>
        </div>
      </Layout>
    </EncounterProvider>
  );
};

export default DynamicCampaignsPage;
