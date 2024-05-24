import { DocumentData } from 'firebase/firestore';

export type FirestoreDocument<T extends DocumentData> = T & { id: string };
