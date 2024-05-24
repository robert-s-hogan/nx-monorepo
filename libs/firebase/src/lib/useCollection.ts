import useSWR from 'swr';
import {
  collection,
  getDocs,
  query,
  QueryConstraint,
  DocumentData,
} from 'firebase/firestore';
import { db } from './firebase-config';
import { FirestoreDocument } from './types';

// Custom Firestore fetcher function for a collection
const firestoreFetcher = async <T extends DocumentData>(
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

// useCollection hook
export const useCollection = <T extends DocumentData>(
  collectionName: string,
  queryOptions?: QueryConstraint[]
) => {
  const fetcher = () => firestoreFetcher<T>(collectionName, queryOptions);

  const { data, error, mutate } = useSWR<FirestoreDocument<T>[]>(
    [collectionName, queryOptions],
    fetcher
  );

  return {
    documents: data,
    isLoading: !error && !data,
    isError: error,
    mutate,
  };
};
