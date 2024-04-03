import { db } from './firebase-config';
import {
  collection,
  addDoc,
  doc,
  deleteDoc,
  updateDoc,
  getDocs,
} from 'firebase/firestore';
import { DocumentData, WithFieldValue } from 'firebase/firestore';

export async function addDocument<T extends WithFieldValue<DocumentData>>(
  collectionName: string,
  data: T
): Promise<string> {
  try {
    const docRef = await addDoc(collection(db, collectionName), data);
    return docRef.id;
  } catch (error) {
    console.error('Error adding document:', error);
    throw new Error(
      `Failed to add document to ${collectionName}: ${
        error instanceof Error ? error.message : error
      }`
    );
  }
}

export async function deleteDocument(
  collectionName: string,
  id: string
): Promise<void> {
  try {
    const docRef = doc(db, collectionName, id);
    await deleteDoc(docRef);
  } catch (error) {
    console.error('Error deleting document:', error);
    throw new Error(
      `Failed to delete document from ${collectionName} with ID ${id}: ${
        error instanceof Error ? error.message : error
      }`
    );
  }
}

export async function editDocument<T>(
  collectionName: string,
  id: string,
  data: Partial<T>
): Promise<void> {
  try {
    const docRef = doc(db, collectionName, id);
    await updateDoc(docRef, data);
  } catch (error) {
    console.error('Error updating document:', error);
    throw new Error(
      `Failed to update document in ${collectionName} with ID ${id}: ${
        error instanceof Error ? error.message : error
      }`
    );
  }
}

export async function fetchDocuments<T>(collectionName: string): Promise<T[]> {
  try {
    const querySnapshot = await getDocs(collection(db, collectionName));
    return querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...(doc.data() as T),
    }));
  } catch (error) {
    console.error('Error fetching documents:', error);
    throw new Error(
      `Failed to fetch documents from ${collectionName}: ${
        error instanceof Error ? error.message : error
      }`
    );
  }
}
