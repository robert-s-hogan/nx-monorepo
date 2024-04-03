import { db } from '../../../../../libs/firebase/src/lib/firebase-config';
import {
  addDoc,
  collection,
  doc,
  deleteDoc,
  getDocs,
  query,
  updateDoc,
  where,
} from 'firebase/firestore';
import { Campaign } from '../types';

import { generateSlug } from '../utils/generateSlug';

export const addCampaign = async (campaignData: Campaign): Promise<string> => {
  if (!campaignData) {
    throw new Error('Campaign data is required');
  }

  const slug = generateSlug(campaignData.name);

  const dataWithSlug = { ...campaignData, slug };

  try {
    const campaignRef = await addDoc(collection(db, 'campaigns'), dataWithSlug);
    return campaignRef.id;
  } catch (error) {
    throw new Error('Failed to add campaign');
  }
};

export const editCampaign = async (
  id: string,
  campaignData: Partial<Campaign>
): Promise<void> => {
  console.log(`Editing campaign with ID: ${id}`);
  console.log(`New campaign data: ${JSON.stringify(campaignData)}`);
  try {
    const campaignRef = doc(db, 'campaigns', id);
    console.log(`Campaign reference: ${campaignRef}`);
    await updateDoc(campaignRef, campaignData);
  } catch (error) {
    console.error('Error updating campaign:', error);
  }
};

export const deleteCampaign = async (id: string): Promise<void> => {
  const campaignRef = doc(db, 'campaigns', id);
  await deleteDoc(campaignRef);
};

export const fetchCampaigns = async (): Promise<Campaign[]> => {
  const campaignsCollection = collection(db, 'campaigns');
  const campaignsSnapshot = await getDocs(campaignsCollection);

  const campaigns: Campaign[] = [];
  campaignsSnapshot.forEach((doc) => {
    const campaign = doc.data() as Campaign;
    campaigns.push({ ...campaign, id: doc.id });
  });

  return campaigns;
};

export const fetchCampaignBySlug = async (
  slug: string
): Promise<Campaign | null> => {
  const campaignsRef = collection(db, 'campaigns');
  const q = query(campaignsRef, where('slug', '==', slug));
  const querySnapshot = await getDocs(q);

  if (querySnapshot.empty) {
    return null;
  }

  const doc = querySnapshot.docs[0];
  return { id: doc.id, ...(doc.data() as Campaign) };
};
