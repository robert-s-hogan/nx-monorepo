import { db } from '@data/firebaseConfig';
import {
  addDoc,
  collection,
  doc,
  deleteDoc,
  getDocs,
  updateDoc,
} from 'firebase/firestore';
import { Campaign } from '../types';

// Adding a Campaign to Firestore
export const addCampaign = async (campaignData: Campaign): Promise<string> => {
  try {
    // Create the document in Firestore and get the reference
    const docRef = await addDoc(collection(db, 'campaigns'), campaignData);

    // Update the document with the newly generated ID
    await updateDoc(docRef, { id: docRef.id });

    console.log('Campaign added with ID:', docRef.id); // Log success with the new document ID
    return docRef.id;
  } catch (error) {
    console.error('Error adding campaign:', error);
    throw new Error('Failed to add campaign'); // Throw a user-friendly error
  }
};

// Updating an existing Campaign in Firestore
export const editCampaign = async (
  id: string,
  campaignData: Partial<Campaign>
): Promise<void> => {
  if (!id) throw new Error('Campaign ID is required for updating.');
  try {
    const campaignDocRef = doc(db, 'campaigns', id);
    await updateDoc(campaignDocRef, campaignData);
    console.log('Campaign updated:', id);
  } catch (error) {
    console.error('Error updating campaign:', error);
    throw new Error('Failed to update campaign');
  }
};

// Deleting a Campaign from Firestore
export const deleteCampaign = async (id: string): Promise<void> => {
  try {
    await deleteDoc(doc(db, 'campaigns', id));
    console.log('Campaign deleted:', id); // Log success
  } catch (error) {
    console.error('Error deleting campaign:', error);
    throw new Error('Failed to delete campaign'); // Throw a user-friendly error
  }
};

// Fetching all Campaigns from Firestore
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
    throw new Error('Failed to fetch campaigns'); // Throw a user-friendly error
  }
};
