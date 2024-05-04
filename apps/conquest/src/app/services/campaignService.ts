import { db } from '@with-nx/firebase';
import {
  addDocument,
  deleteDocument,
  editDocument,
  fetchDocuments,
} from '@with-nx/firebase';
import { collection, getDocs, query, where } from 'firebase/firestore';

import { Campaign } from '../types';
import { generateSlug } from '../utils/generateSlug';

export const addCampaign = async (campaignData: Campaign): Promise<string> => {
  if (!campaignData) {
    throw new Error('Campaign data is required');
  }
  const slug = generateSlug(campaignData.name);
  const dataWithSlug = { ...campaignData, slug };

  try {
    // Use addDocument from firebase-crud
    return await addDocument('campaigns', dataWithSlug);
  } catch (error) {
    console.error('Error adding campaign:', error);
    throw new Error('Failed to add campaign');
  }
};

export const editCampaign = async (
  id: string,
  campaignData: Partial<Campaign>
): Promise<void> => {
  try {
    // Use editDocument from firebase-crud
    await editDocument('campaigns', id, campaignData);
  } catch (error) {
    console.error('Error updating campaign:', error);
    throw new Error('Failed to update campaign');
  }
};

export const deleteCampaign = async (id: string): Promise<void> => {
  try {
    // Use deleteDocument from firebase-crud
    await deleteDocument('campaigns', id);
  } catch (error) {
    console.error('Error deleting campaign:', error);
    throw new Error('Failed to delete campaign');
  }
};

export const fetchCampaigns = async (): Promise<Campaign[]> => {
  try {
    // Use fetchDocuments from firebase-crud
    return await fetchDocuments<Campaign>('campaigns');
  } catch (error) {
    console.error('Error fetching campaigns:', error);
    throw new Error('Failed to fetch campaigns');
  }
};

export const fetchCampaignBySlug = async (
  slug?: string
): Promise<Campaign[] | null> => {
  try {
    const campaignsRef = collection(db, 'campaigns');
    const q = slug
      ? query(campaignsRef, where('slug', '==', slug))
      : query(campaignsRef);
    const querySnapshot = await getDocs(q);

    if (querySnapshot.empty) {
      return null;
    }

    return querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...(doc.data() as Campaign),
    }));
  } catch (error) {
    console.error('Error fetching campaigns:', error);
    throw new Error('Failed to fetch campaigns');
  }
};
