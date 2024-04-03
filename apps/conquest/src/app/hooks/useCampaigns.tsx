import useSWR, { mutate } from 'swr';
import { fetchCampaigns as fetchCampaignsService } from '../services/campaignService';
import { Campaign } from '../types';

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
