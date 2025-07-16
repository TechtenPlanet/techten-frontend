const { initializeApp, getApps } = require('firebase/app');
const { getFirestore, collection, addDoc } = require('firebase/firestore');
const courses = require('../src/data/coursedata.js');
const events = require('../src/data/eventsData.js');
const blogs = require('../src/data/blogsData.js');
const { firebaseConfig } = require('../src/firebase/config.js');

let app;
if (!getApps().length) {
  app = initializeApp(firebaseConfig);
} else {
  app = getApps()[0];
}
const db = getFirestore(app);

const migrateData = async () => {
  console.log('Migrating courses...');
  for (const course of courses) {
    await addDoc(collection(db, 'courses'), course);
  }
  console.log('Courses migrated successfully.');

  console.log('Migrating events...');
  for (const event of events) {
    await addDoc(collection(db, 'events'), event);
  }
  console.log('Events migrated successfully.');

  console.log('Migrating blogs...');
  for (const blog of blogs) {
    await addDoc(collection(db, 'blogs'), blog);
  }
  console.log('Blogs migrated successfully.');
};

migrateData();
