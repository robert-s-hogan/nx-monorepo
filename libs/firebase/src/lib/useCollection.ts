import useSWR from 'swr';
import {
  collection,
  getDocs,
  query,
  QueryConstraint,
} from 'firebase/firestore';
import { db } from './firebase-config';
import { FirestoreDocument } from './types';

// Custom Firestore fetcher function
const firestoreFetcher = async <T>(
  collectionName: string,
  queryOptions?: QueryConstraint[]
): Promise<FirestoreDocument<T>[]> => {
  const colRef = collection(db, collectionName);
  const q = queryOptions ? query(colRef, ...queryOptions) : colRef;
  const querySnapshot = await getDocs(q);

  return querySnapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  })) as FirestoreDocument<T>[];
};

// Refactored useCollection hook
export const useCollection = <T>(
  collectionName: string,
  queryOptions?: QueryConstraint[]
) => {
  const { data, error, mutate } = useSWR<FirestoreDocument<T>[]>(
    [collectionName, queryOptions],
    () => firestoreFetcher<T>(collectionName, queryOptions)
  );

  // Expose the mutate function specific to this collection
  return {
    documents: data,
    isLoading: !error && !data,
    isError: error,
    mutate, // Now you can use this to revalidate/update cache outside this hook
  };
};
