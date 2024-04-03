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
import { fetchCampaigns as fetchCampaignsService } from '../../services/campaignService';
import useSWR from 'swr';
import CampaignListWithModal from '../../components/CampaignListWithModal';
import { Campaign } from '../../types';

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
              <EncounterListWithModal encounters={encounters || []} />
            )}
          </div>
        </div>
      </Layout>
    </EncounterProvider>
  );
};

export default DynamicCampaignsPage;
