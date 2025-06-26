import { db } from './config';
import { collection, getDocs, addDoc, doc, updateDoc, deleteDoc } from 'firebase/firestore';

const eventsCollection = collection(db, 'events');

export const getEvents = async () => {
  const snapshot = await getDocs(eventsCollection);
  return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
};

export const addEvent = async (event) => {
  return await addDoc(eventsCollection, event);
};

export const updateEvent = async (id, event) => {
  const eventDoc = doc(db, 'events', id);
  return await updateDoc(eventDoc, event);
};

export const deleteEvent = async (id) => {
  const eventDoc = doc(db, 'events', id);
  return await deleteDoc(eventDoc);
};
