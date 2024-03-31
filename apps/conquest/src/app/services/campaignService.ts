import { db } from '@data/firebaseConfig';
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

// Adding a Campaign to Firestore
export const addCampaign = async (campaignData: Campaign): Promise<string> => {
  if (!campaignData) {
    throw new Error('Campaign data is required');
  }
  try {
    const campaignRef = await addDoc(collection(db, 'campaigns'), campaignData);
    return campaignRef.id;
  } catch (error) {
    throw new Error('Failed to add campaign');
  }
};

// Updating an Existing Campaign in Firestore
export const editCampaign = async (
  id: string,
  campaignData: Partial<Campaign>
): Promise<void> => {
  const campaignRef = doc(db, 'campaigns', id);
  await updateDoc(campaignRef, campaignData);
};

// Deleting a Campaign from Firestore
export const deleteCampaign = async (id: string): Promise<void> => {
  const campaignRef = doc(db, 'campaigns', id);
  await deleteDoc(campaignRef);
};

// Fetching All Campaigns from Firestore
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

// Fetching a Campaign by Slug from Firestore
export const fetchCampaignBySlug = async (
  slug: string
): Promise<Campaign | null> => {
  const campaignsRef = collection(db, 'campaigns');
  const q = query(campaignsRef, where('slug', '==', slug));
  const querySnapshot = await getDocs(q);

  if (querySnapshot.empty) {
    return null; // Campaign not found
  }

  const doc = querySnapshot.docs[0];
  return { id: doc.id, ...(doc.data() as Campaign) };
};
