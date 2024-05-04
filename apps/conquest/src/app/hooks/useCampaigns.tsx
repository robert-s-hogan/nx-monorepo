'use client';

import { useCollection } from '@with-nx/firebase';
import { FirestoreDocument } from '@with-nx/firebase';
import { useSearchParams } from 'next/navigation';
import { Campaign } from '../types';

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

  const searchParams = useSearchParams();

  // Extract campaignSlug using URLSearchParams.get()
  const campaignSlug = searchParams ? searchParams.get('campaignSlug') : null;

  // Finding the selected campaign based on the extracted slug
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
