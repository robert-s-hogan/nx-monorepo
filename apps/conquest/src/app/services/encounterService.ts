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
import { Encounter } from '@conquestTypes/Encounter';

// Add an Encounter
export const addEncounter = async (
  encounterData: Encounter
): Promise<string> => {
  const encounterRef = await addDoc(
    collection(db, 'encounters'),
    encounterData
  );
  return encounterRef.id; // Return the Firestore document ID
};

// Edit an Encounter
export const editEncounter = async (
  id: string,
  encounterData: Partial<Encounter>
): Promise<void> => {
  const encounterRef = doc(db, 'encounters', id);
  await updateDoc(encounterRef, encounterData);
};

// Delete an Encounter
export const deleteEncounter = async (id: string): Promise<void> => {
  const encounterRef = doc(db, 'encounters', id);
  await deleteDoc(encounterRef);
};

// Fetch Encounters by Campaign ID
export const fetchEncountersByCampaign = async (
  campaignId: string
): Promise<Encounter[]> => {
  const encountersRef = collection(db, 'encounters');
  const q = query(encountersRef, where('campaignId', '==', campaignId));
  const querySnapshot = await getDocs(q);

  const encounters: Encounter[] = [];
  querySnapshot.forEach((doc) => {
    const encounter = doc.data() as Encounter;
    encounters.push({ ...encounter, id: doc.id });
  });

  return encounters;
};

export const fetchEncounters = async (
  campaignId: string
): Promise<Encounter[]> => {
  const encountersRef = collection(db, 'encounters');
  const querySnapshot = await getDocs(encountersRef);

  const encounters: Encounter[] = [];
  querySnapshot.forEach((doc) => {
    const encounter = doc.data() as Encounter;
    encounters.push({ ...encounter, id: doc.id });
  });

  return encounters;
};
