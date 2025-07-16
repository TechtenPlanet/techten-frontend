import { initializeApp } from 'firebase/app';
import { getFirestore, connectFirestoreEmulator, collection, addDoc } from 'firebase/firestore';
import events from './src/data/eventsData.js';
import { firebaseConfig } from './src/firebase/config.js';

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

if (process.env.REACT_APP_FIREBASE_MODE === 'emulator') {
  console.log("✅ Connected to Firestore Emulator for seeding");
  connectFirestoreEmulator(db, 'localhost', 8080);
}

const seed = async () => {
  const eventsRef = collection(db, 'events');

  for (const event of events) {
    await addDoc(eventsRef, event);
  }

  console.log("✅ Seeded all events to emulator.");
  process.exit(0);
};

seed().catch(err => {
  console.error("❌ Error seeding Firestore:", err);
  process.exit(1);
});
