import { db } from './config';
import { collection, getDocs, addDoc, doc, updateDoc, deleteDoc } from 'firebase/firestore';

const coursesCollection = collection(db, 'courses');

export const getCourses = async () => {
  const snapshot = await getDocs(coursesCollection);
  return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
};

export const addCourse = async (course) => {
  return await addDoc(coursesCollection, course);
};

export const updateCourse = async (id, course) => {
  const courseDoc = doc(db, 'courses', id);
  return await updateDoc(courseDoc, course);
};

export const deleteCourse = async (id) => {
  const courseDoc = doc(db, 'courses', id);
  return await deleteDoc(courseDoc);
};
