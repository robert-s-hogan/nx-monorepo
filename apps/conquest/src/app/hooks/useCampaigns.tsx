import { Campaign } from '../types';
import { useCollection } from '../../../../../libs/firebase/src/lib/useCollection';
import { FirestoreDocument } from '../../../../../libs/firebase/src/lib/types';

export const useCampaigns = (): {
  campaigns: FirestoreDocument<Campaign>[] | undefined;
  isLoading: boolean;
  isError: any;
  mutate: typeof mutate; // Use typeof to reference the mutate function's type directly
} => {
  const {
    documents: campaigns,
    isLoading,
    isError,
    mutate,
  } = useCollection<Campaign>('campaigns');

  return {
    campaigns,
    isLoading,
    isError,
    mutate,
  };
};
