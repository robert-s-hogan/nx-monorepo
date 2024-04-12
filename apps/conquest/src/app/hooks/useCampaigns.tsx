import { Campaign } from '../types';
import { useCollection } from '@with-nx/firebase';
import { FirestoreDocument } from '@with-nx/firebase';
import { usePathname, useSearchParams } from 'next/navigation';
import { getLevelDetailsFromExperience } from '../constants/experienceConstants';

export const useCampaigns = (): {
  campaigns: FirestoreDocument<Campaign>[] | undefined;
  isLoading: boolean;
  isError: any;
  mutate: typeof mutate;
  selectedCampaign: FirestoreDocument<Campaign> | undefined;
} => {
  const {
    documents: campaigns,
    isLoading,
    isError,
    mutate,
  } = useCollection<Campaign>('campaigns');

  const pathname = usePathname();
  const [searchParams] = useSearchParams();

  // Extracting the campaignSlug from the URL or query parameters
  const campaignSlug = pathname.split('/').pop();
  // const campaignSlug = searchParams.get('slug'); // Or this, depending on your URL structure

  const selectedCampaign = campaigns?.find(
    (campaign) => campaign.slug === campaignSlug
  );

  return {
    campaigns,
    isLoading,
    isError,
    mutate,
    selectedCampaign,
  };
};
