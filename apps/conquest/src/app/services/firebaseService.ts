import {
  addDocument,
  updateDocument,
  deleteDocument,
  fetchDocuments,
  FirestoreDocument,
} from '@with-nx/firebase';
import { Campaign, Encounter } from '../types';

// Function to add a campaign
export const addCampaign = async (data: Campaign): Promise<string> => {
  try {
    const id = await addDocument<Campaign>('campaigns', data);
    return id;
  } catch (error) {
    console.error('Error adding campaign:', error);
    throw error;
  }
};

// Function to update a campaign
export const updateCampaign = async (
  id: string,
  data: Partial<Campaign>
): Promise<void> => {
  try {
    await updateDocument<Campaign>('campaigns', id, data);
  } catch (error) {
    console.error('Error updating campaign:', error);
    throw error;
  }
};

// Function to delete a campaign
export const deleteCampaign = async (id: string): Promise<void> => {
  if (!id) {
    throw new Error('Campaign ID is required to delete a campaign');
  }
  try {
    await deleteDocument('campaigns', id);
  } catch (error) {
    console.error('Error deleting campaign:', error);
    throw error;
  }
};

// Function to fetch campaigns
export const fetchCampaigns = async (): Promise<Campaign[]> => {
  try {
    const campaigns = await fetchDocuments<Campaign>('campaigns');
    return campaigns;
  } catch (error) {
    console.error('Error fetching campaigns:', error);
    throw error;
  }
};

// Function to fetch encounters
export const fetchEncounters = async (
  campaignId: string
): Promise<Encounter[]> => {
  if (!campaignId) {
    throw new Error('Campaign ID is required to fetch encounters');
  }
  try {
    const encounters = await fetchDocuments<Encounter>(
      `campaigns/${campaignId}/encounters`
    );
    return encounters;
  } catch (error) {
    console.error('Error fetching encounters:', error);
    throw error;
  }
};

export const fetchEncountersByCampaign = async (
  campaignId: string
): Promise<FirestoreDocument<Encounter>[]> => {
  if (!campaignId) {
    throw new Error('Campaign ID is required to fetch encounters');
  }
  try {
    const encounters = await fetchDocuments<Encounter>(
      `campaigns/${campaignId}/encounters`
    );
    return encounters.map((doc) => ({ ...doc, id: doc.id }));
  } catch (error) {
    console.error('Error fetching encounters:', error);
    throw error;
  }
};

export const addEncounter = async (data: Encounter): Promise<string> => {
  try {
    const id = await addDocument<Encounter>('encounters', data);
    return id;
  } catch (error) {
    console.error('Error adding encounter:', error);
    throw error;
  }
};

export const editEncounter = async (
  id: string,
  data: Partial<Encounter>
): Promise<void> => {
  try {
    await updateDocument<Encounter>('encounters', id, data);
  } catch (error) {
    console.error('Error updating encounter:', error);
    throw error;
  }
};

export const deleteEncounter = async (id: string): Promise<void> => {
  try {
    await deleteDocument('encounters', id);
  } catch (error) {
    console.error('Error deleting encounter:', error);
    throw error;
  }
};
