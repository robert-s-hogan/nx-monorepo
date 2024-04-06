import { Campaign } from '../types';
import { useCollection } from '@with-nx/firebase';
import { FirestoreDocument } from '@with-nx/firebase';
import { usePathname, useSearchParams } from 'next/navigation';

export const useCampaigns = (): {
  campaigns: FirestoreDocument<Campaign>[] | undefined;
  isLoading: boolean;
  isError: any;
  mutate: typeof mutate;
  selectedCampaign: FirestoreDocument<Campaign> | undefined; // Add selectedCampaign to the return type
} => {
  const {
    documents: campaigns,
    isLoading,
    isError,
    mutate,
  } = useCollection<Campaign>('campaigns');
  const pathname = usePathname();
  const [searchParams] = useSearchParams();

  // Adapt the logic here based on how your campaign slug is represented in the URL
  // For example, if your URL is like '/campaigns/[campaignSlug]', you might extract the slug like this:
  const campaignSlug = pathname.split('/').pop();

  // Or, if you're using query parameters like '/campaigns?slug=[campaignSlug]'
  // const campaignSlug = searchParams.get('slug');

  // Find the selected campaign based on the slug
  const selectedCampaign = campaigns?.find(
    (campaign) => campaign.slug === campaignSlug
  );

  return {
    campaigns,
    isLoading,
    isError,
    mutate,
    selectedCampaign, // Include selectedCampaign in the returned object
  };
};
