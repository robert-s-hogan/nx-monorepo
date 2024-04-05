import {
  addDocument,
  deleteDocument,
  editDocument,
  fetchDocuments,
} from '../../../../../libs/firebase/src/lib/firebase-crud';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { db } from '../../../../../libs/firebase/src/lib/firebase-config';
import { Encounter } from '../types';
import { doc, setDoc } from 'firebase/firestore';

export const addEncounter = async (
  encounterData: Encounter
): Promise<string> => {
  if (!encounterData) {
    throw new Error('Encounter data is required');
  }

  try {
    // Add a new document in collection "encounters"
    const docRef = doc(collection(db, 'encounters'));

    // Set the document with encounterData (without an ID)
    await setDoc(docRef, encounterData);

    // Now, update the document with its generated ID
    await setDoc(docRef, { ...encounterData, id: docRef.id }, { merge: true });

    return docRef.id; // Return the generated document ID
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
    await editDocument('encounters', id, encounterData);
  } catch (error) {
    console.error('Error updating encounter:', error);
    throw new Error('Failed to update encounter');
  }
};

export const deleteEncounter = async (id: string): Promise<void> => {
  try {
    await deleteDocument('encounters', id);
  } catch (error) {
    console.error('Error deleting encounter:', error);
    throw new Error('Failed to delete encounter');
  }
};

export const fetchEncounters = async (
  campaignId: string
): Promise<Encounter[]> => {
  try {
    const encountersRef = collection(db, 'encounters');
    const q = query(encountersRef, where('campaignId', '==', campaignId));
    const querySnapshot = await getDocs(q);

    const encounters: Encounter[] = [];
    querySnapshot.forEach((doc) => {
      const encounter = doc.data() as Encounter;
      encounters.push({ ...encounter, id: doc.id });
    });

    return encounters;
  } catch (error) {
    console.error('Error fetching encounters:', error);
    throw new Error('Failed to fetch encounters');
  }
};

export const fetchEncountersByCampaign = async (
  campaignId: string
): Promise<Encounter[]> => {
  try {
    const encountersRef = collection(db, 'encounters');
    const q = query(encountersRef, where('campaignId', '==', campaignId));
    const querySnapshot = await getDocs(q);

    const encounters: Encounter[] = [];
    querySnapshot.forEach((doc) => {
      const encounter = doc.data() as Encounter;
      encounters.push({ ...encounter, id: doc.id });
    });

    return encounters;
  } catch (error) {
    console.error('Error fetching encounters:', error);
    throw new Error('Failed to fetch encounters');
  }
};
