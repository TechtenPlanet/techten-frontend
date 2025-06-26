import { db } from './config';
import { collection, getDocs, addDoc, doc, updateDoc, deleteDoc } from 'firebase/firestore';

const blogsCollection = collection(db, 'blogs');

export const getBlogs = async () => {
  const snapshot = await getDocs(blogsCollection);
  return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
};

export const addBlog = async (blog) => {
  return await addDoc(blogsCollection, blog);
};

export const updateBlog = async (id, blog) => {
  const blogDoc = doc(db, 'blogs', id);
  return await updateDoc(blogDoc, blog);
};

export const deleteBlog = async (id) => {
  const blogDoc = doc(db, 'blogs', id);
  return await deleteDoc(blogDoc);
};
