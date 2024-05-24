import { db } from './firebase-config';
import {
  collection,
  addDoc,
  doc,
  updateDoc,
  deleteDoc,
  getDocs,
  query,
  QueryConstraint,
  DocumentData,
  WithFieldValue,
} from 'firebase/firestore';
import { FirestoreDocument } from './types';

// Add document
export const addDocument = async <T extends DocumentData>(
  collectionName: string,
  data: WithFieldValue<T>
): Promise<string> => {
  const colRef = collection(db, collectionName);
  const docRef = await addDoc(colRef, data as WithFieldValue<DocumentData>);
  return docRef.id;
};

// Update document
export const updateDocument = async <T extends DocumentData>(
  collectionName: string,
  id: string,
  data: Partial<WithFieldValue<T>>
): Promise<void> => {
  const docRef = doc(db, collectionName, id);
  await updateDoc(docRef, data as Partial<WithFieldValue<DocumentData>>);
};

// Delete document
export const deleteDocument = async (
  collectionName: string,
  id: string
): Promise<void> => {
  console.log(`Deleting document with ID: ${id}: ${collectionName}`);
  const docRef = doc(db, collectionName, id);
  await deleteDoc(docRef);
};

// Fetch documents
export const fetchDocuments = async <T extends DocumentData>(
  collectionName: string,
  queryOptions?: QueryConstraint[]
): Promise<FirestoreDocument<T>[]> => {
  const colRef = collection(db, collectionName);
  const q = queryOptions ? query(colRef, ...queryOptions) : colRef;
  const querySnapshot = await getDocs(q);
  return querySnapshot.docs.map((doc) => ({
    id: doc.id,
    ...(doc.data() as T),
  })) as FirestoreDocument<T>[];
};
