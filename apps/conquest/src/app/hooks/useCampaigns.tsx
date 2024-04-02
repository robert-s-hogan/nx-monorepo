import useSWR from 'swr';
import { fetchCampaigns as fetchCampaignsService } from '@conquestServices/campaignService';
import { Campaign } from '@conquestTypes/Campaign';

export const useCampaigns = () => {
  const {
    data: campaigns,
    error,
    mutate,
  } = useSWR<Campaign[]>('campaigns', fetchCampaignsService);

  return {
    campaigns,
    isLoading: !error && !campaigns,
    isError: error,
    mutate,
  };
};
