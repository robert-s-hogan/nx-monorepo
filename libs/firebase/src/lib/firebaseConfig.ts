//libs/firebase/src/lib/firebaseConfig.ts
import { initializeApp, FirebaseApp } from 'firebase/app';
import { getFirestore, Firestore } from 'firebase/firestore';
import { getAuth, Auth } from 'firebase/auth';

// Define a type for your configuration to make it clear what is expected
export interface FirebaseConfig {
  apiKey: string;
  authDomain: string;
  projectId: string;
  storageBucket: string;
  messagingSenderId: string;
  appId: string;
  measurementId: string;
}

// Modify the initialization to accept a config object
let app: FirebaseApp;
let db: Firestore;
let auth: Auth;

const initializeFirebase = (config: FirebaseConfig) => {
  app = initializeApp(config);
  db = getFirestore(app);
  auth = getAuth(app);
};

// Export the initialize function and the getters for db and auth
export { initializeFirebase, db, auth };

// In your firebaseConfig module
export const getAuthInstance = () => {
  if (!auth) throw new Error('Firebase Auth has not been initialized yet.');
  return auth;
};
