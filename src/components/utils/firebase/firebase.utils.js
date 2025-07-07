// firebase.utils.js

import { initializeApp } from 'firebase/app';


import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from 'firebase/auth';
import {
  getFirestore,
  doc,
  getDoc,
  setDoc,
  collection,
  writeBatch,
  query,
  getDocs,
  addDoc,
} from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyApISR_J2GFjNaJ6t6EEEXV4qiFTXrLYB0",
  authDomain: "shopping-1211.firebaseapp.com",
  projectId: "shopping-1211",
  storageBucket: "shopping-1211.appspot.com",
  messagingSenderId: "994168506050",
  appId: "1:994168506050:web:d40028ad6cb57310e71d5b",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

// Initialize Google Auth Provider
const googleProvider = new GoogleAuthProvider();
googleProvider.setCustomParameters({ prompt: 'select_account' });

// Auth and Firestore exports
export const auth = getAuth(firebaseApp);
export const db = getFirestore(firebaseApp);

// Google sign-in
export const signInWithGooglePopup = () =>
  signInWithPopup(auth, googleProvider);

export const signInWithGoogleRedirect = () =>
  signInWithRedirect(auth, googleProvider);

// Add a batch of documents to a collection
export const addCollectionAndDocuments = async (
  collectionKey,
  objectsToAdd,
  field = 'title' // default field to use as document ID
) => {
  const collectionRef = collection(db, collectionKey);
  const batch = writeBatch(db);

  objectsToAdd.forEach((object) => {
    const docId = object[field]?.toLowerCase();
    if (!docId) return;
    const docRef = doc(collectionRef, docId);
    batch.set(docRef, object);
  });

  await batch.commit();
  console.log('Batch write complete');
};

// Get categories and documents from Firestore
export const getCategoriesAndDocuments = async () => {
  try {
    const collectionRef = collection(db, 'categories');
    const q = query(collectionRef);

    const querySnapshot = await getDocs(q);
    const categoryMap = querySnapshot.docs.reduce((acc, docSnapshot) => {
      const { title, items } = docSnapshot.data();
      acc[title.toLowerCase()] = items;
      return acc;
    }, {});

    return categoryMap;
  } catch (error) {
    console.error('Error fetching categories', error);
    return {};
  }
};

// Create a user document in Firestore from Auth
export const createUserDocumentFromAuth = async (
  userAuth,
  additionalInformation = {}
) => {
  if (!userAuth) return;

  const userDocRef = doc(db, 'users', userAuth.uid);
  const userSnapshot = await getDoc(userDocRef);

  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
        ...additionalInformation,
      });
    } catch (error) {
      console.error('Error creating the user', error.message);
    }
  }

  return userDocRef;
};

// Auth: Create user with email/password
export const createAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;

  return await createUserWithEmailAndPassword(auth, email, password);
};

// Auth: Sign in with email/password
export const signInAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;

  return await signInWithEmailAndPassword(auth, email, password);
};

// Auth: Sign out
export const signOutUser = async () => await signOut(auth);

// Auth: Listen to user state changes
export const onAuthStateChangedListener = (callback) =>
  onAuthStateChanged(auth, callback);


/**
 * Save contact message to Firestore
 * @param {string} userId - Authenticated user's UID
 * @param {object} messageData - { name, email, subject, message }
 */
export const saveContactMessage = async (userId, messageData) => {
  try {
    const messagesRef = collection(db, 'messages');
    await addDoc(messagesRef, {
      userId,
      ...messageData,
      createdAt: new Date(),
    });
    console.log('Message saved to Firestore');
  } catch (error) {
    console.error('Error saving message:', error);
    throw error;
  }
};

