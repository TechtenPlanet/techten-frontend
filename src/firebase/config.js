import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getFunctions, connectFunctionsEmulator } from 'firebase/functions';

// Firebase configuration from environment variables
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: "techten-donations", // This should match your Firebase project ID
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET || "techten-donations.firebasestorage.app",
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const functions = getFunctions(app);

// Use emulator when in development
if (process.env.NODE_ENV === 'development') {
  // Uncomment the line below to use the local emulator
  // connectFunctionsEmulator(functions, 'localhost', 5001);
}

export { app, db, functions };
