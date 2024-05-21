import { db } from '@with-nx/firebase';
import {
  addDocument,
  deleteDocument,
  editDocument,
  fetchDocuments,
} from '@with-nx/firebase';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { Encounter, FirestoreDocument } from '../types';

export const addEncounter = async (
  encounterData: Encounter
): Promise<string> => {
  if (!encounterData) {
    throw new Error('Encounter data is required');
  }

  try {
    // Use addDocument from firebase-crud
    return await addDocument('encounters', encounterData);
  } catch (error) {
    console.error('Error adding encounter:', error);
    throw new Error('Failed to add encounter');
  }
};

export const editEncounter = async (
  id: string,
  encounterData: Partial<Encounter>
): Promise<void> => {
  try {
    // Use editDocument from firebase-crud
    await editDocument('encounters', id, encounterData);
  } catch (error) {
    console.error('Error updating encounter:', error);
    throw new Error('Failed to update encounter');
  }
};

export const deleteEncounter = async (id: string): Promise<void> => {
  try {
    // Use deleteDocument from firebase-crud
    await deleteDocument('encounters', id);
  } catch (error) {
    console.error('Error deleting encounter:', error);
    throw new Error('Failed to delete encounter');
  }
};

export const fetchEncounters = async (): Promise<Encounter[]> => {
  try {
    // Use fetchDocuments from firebase-crud
    return await fetchDocuments<Encounter>('encounters');
  } catch (error) {
    console.error('Error fetching encounters:', error);
    throw new Error('Failed to fetch encounters');
  }
};

export const fetchEncountersByCampaign = async (
  campaignId: string
): Promise<FirestoreDocument<Encounter>[]> => {
  const q = query(
    collection(db, 'encounters'),
    where('campaignId', '==', campaignId)
  );
  const querySnapshot = await getDocs(q);

  if (querySnapshot.empty) {
    return [];
  }

  return querySnapshot.docs.map((doc) => ({
    id: doc.id,
    ...(doc.data() as Encounter),
  }));
};
