// libs/firebase/src/lib/firebase-config.ts
import { initializeApp, getApps, FirebaseApp } from 'firebase/app';
import { getFirestore, Firestore } from 'firebase/firestore';
import { getAuth, Auth } from 'firebase/auth'; // Import getAuth

export const firebaseConfig = {
  apiKey: process.env['NEXT_PUBLIC_FIREBASE_API_KEY'],
  authDomain: process.env['NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN'],
  projectId: process.env['NEXT_PUBLIC_FIREBASE_PROJECT_ID'],
  storageBucket: process.env['NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET'],
  messagingSenderId: process.env['NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID'],
  appId: process.env['NEXT_PUBLIC_FIREBASE_APP_ID'],
  measurementId: process.env['NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID'],
};

export const getApp = (): FirebaseApp => {
  if (!getApps().length) {
    initializeApp(firebaseConfig);
  }
  return getApps()[0]; // This will return the existing app instance if already initialized
};

export const getDB = (): Firestore => {
  return getFirestore(getApp());
};

export const getAuthInstance = (): Auth => {
  return getAuth(getApp());
};

// Exported app and db instances
export const app = getApp();
export const db = getDB();
export const auth = getAuthInstance(); // Exporting the auth instance
