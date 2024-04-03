'use client';

import { useEffect, useState } from 'react';
import { NextPage } from 'next';
import { usePathname } from 'next/navigation';

import Layout from '@conquestComponents/Layout';
import { fetchCampaignBySlug } from '@conquestServices/campaignService';
import { Campaign as CampaignType } from '../../types';
import EncountersList from '@conquestComponents/EncountersList';
import { EncounterProvider } from '@conquestContexts/EncounterContext';
import { useEncounters } from '@conquestHooks/useEncounters';
import { fetchCampaigns as fetchCampaignsService } from '@conquestServices/campaignService';
import { Campaign } from '@conquestTypes/Campaign';
import useSWR from 'swr';
import CampaignListWithModal from '@conquestComponents/CampaignListWithModal';

const DynamicCampaignsPage: NextPage = () => {
  const pathname = usePathname();
  const {
    data: campaigns,
    error,
    mutate,
  } = useSWR<Campaign[]>('campaigns', fetchCampaignsService);
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
    if (slug) {
      const fetchAndSetCampaign = async () => {
        const fetchedCampaign = await fetchCampaignBySlug(
          decodeURIComponent(slug)
        );
        setSelectedCampaign(fetchedCampaign);
      };
      fetchAndSetCampaign();
    }
  }, [pathname, campaigns]);

  if (!selectedCampaign) return <div>Loading...</div>;

  return (
    <EncounterProvider>
      <Layout title={selectedCampaign.name}>
        <div className="flex flex-col lg:flex-row w-full">
          <CampaignListWithModal campaigns={campaigns || []} hideEdit={false} />

          <div className="w-full lg:w-1/2 p-4 flex flex-col">
            {isEncountersLoading ? (
              <div>Loading encounters...</div>
            ) : isEncountersError ? (
              <div>Error loading encounters.</div>
            ) : (
              <EncountersList encounters={encounters || []} />
            )}
          </div>
        </div>
      </Layout>
    </EncounterProvider>
  );
};

export default DynamicCampaignsPage;
