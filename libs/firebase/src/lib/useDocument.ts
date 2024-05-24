import useSWR from 'swr';
import { doc, getDoc, DocumentData } from 'firebase/firestore';
import { db } from './firebase-config';
import { FirestoreDocument } from './types';

// Custom Firestore fetcher function for a single document
const documentFetcher = async <T extends DocumentData>(
  collectionName: string,
  id: string
): Promise<FirestoreDocument<T>> => {
  const docRef = doc(db, collectionName, id);
  const docSnap = await getDoc(docRef);

  if (!docSnap.exists()) {
    throw new Error(`Document with ID ${id} does not exist`);
  }

  return {
    id: docSnap.id,
    ...(docSnap.data() as T),
  } as FirestoreDocument<T>;
};

// useDocument hook
export const useDocument = <T extends DocumentData>(
  collectionName: string,
  id: string
) => {
  const { data, error, mutate } = useSWR<FirestoreDocument<T>>(
    [collectionName, id],
    () => documentFetcher<T>(collectionName, id)
  );

  return {
    document: data,
    isLoading: !error && !data,
    isError: error,
    mutate,
  };
};
