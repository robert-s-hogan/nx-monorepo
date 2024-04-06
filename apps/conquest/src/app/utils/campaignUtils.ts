import { db } from '@with-nx/firebase';
import {
  addDoc,
  collection,
  doc,
  deleteDoc,
  getDocs,
  updateDoc,
} from 'firebase/firestore';
import { Campaign } from '../types';

export const addCampaign = async (campaignData: Campaign): Promise<string> => {
  try {
    const docRef = await addDoc(collection(db, 'campaigns'), campaignData);

    await updateDoc(docRef, { id: docRef.id });

    return docRef.id;
  } catch (error) {
    console.error('Error adding campaign:', error);
    throw new Error('Failed to add campaign');
  }
};

export const editCampaign = async (
  id: string,
  campaignData: Partial<Campaign>
): Promise<void> => {
  if (!id) throw new Error('Campaign ID is required for updating.');
  try {
    const campaignDocRef = doc(db, 'campaigns', id);
    await updateDoc(campaignDocRef, campaignData);
  } catch (error) {
    console.error('Error updating campaign:', error);
    throw new Error('Failed to update campaign');
  }
};

export const deleteCampaign = async (id: string): Promise<void> => {
  try {
    await deleteDoc(doc(db, 'campaigns', id));
  } catch (error) {
    console.error('Error deleting campaign:', error);
    throw new Error('Failed to delete campaign');
  }
};

export const fetchCampaigns = async (): Promise<Campaign[]> => {
  try {
    const campaignsCollectionRef = collection(db, 'campaigns');
    const querySnapshot = await getDocs(campaignsCollectionRef);
    return querySnapshot.docs.map((docSnapshot) => ({
      id: docSnapshot.id,
      ...docSnapshot.data(),
    })) as Campaign[];
  } catch (error) {
    console.error('Error fetching campaigns:', error);
    throw new Error('Failed to fetch campaigns');
  }
};
