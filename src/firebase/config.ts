// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {
  collection,
  CollectionReference,
  DocumentData,
  getFirestore,
} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAGu5iAIAxJldiw-6im-xlfEJyagDbIJ64",
  authDomain: "dar-electro-team.firebaseapp.com",
  projectId: "dar-electro-team",
  storageBucket: "dar-electro-team.appspot.com",
  messagingSenderId: "554053439347",
  appId: "1:554053439347:web:0874230ef173a96dd27f06",
  measurementId: "G-R7HGNXZN31",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const analytics = getAnalytics(app);

// Helper to create a collection ref with type for the data stored inside
const createCollection = <T = DocumentData>(collectionName: string) =>
  collection(db, collectionName) as CollectionReference<T>;
