import useSWR from 'swr';
import { collection, getDocs } from 'firebase/firestore';
import { db } from './firebase-config';
import { FirestoreDocument } from './types';

// Custom Firestore fetcher function
const firestoreFetcher = async <T>(
  collectionName: string
): Promise<FirestoreDocument<T>[]> => {
  const querySnapshot = await getDocs(collection(db, collectionName));
  return querySnapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  })) as FirestoreDocument<T>[];
};

// Refactored useCollection hook
export const useCollection = <T>(collectionName: string) => {
  const { data, error, mutate } = useSWR<FirestoreDocument<T>[]>(
    collectionName,
    () => firestoreFetcher<T>(collectionName)
  );

  // Expose the mutate function specific to this collection
  return {
    documents: data,
    isLoading: !error && !data,
    isError: error,
    mutate, // Now you can use this to revalidate/update cache outside this hook
  };
};
