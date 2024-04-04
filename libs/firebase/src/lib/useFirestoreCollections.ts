import { useState, useEffect } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from './firebase-config';
import { FirestoreDocument } from './types'; // Adjust the import path as necessary

export const useFirestoreCollection = <T>(collectionName: string) => {
  const [documents, setDocuments] = useState<FirestoreDocument<T>[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchDocuments = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, collectionName));
        const docsData: FirestoreDocument<T>[] = querySnapshot.docs.map(
          (doc) => ({
            id: doc.id,
            ...doc.data(),
          })
        ) as FirestoreDocument<T>[];
        setDocuments(docsData);
      } catch (err) {
        setError(err as Error);
        console.error('Error fetching documents:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchDocuments();
  }, [collectionName]);

  return { documents, loading, error };
};
