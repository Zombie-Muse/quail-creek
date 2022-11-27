// import { initializeApp } from 'firebase/app';
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';

// import { getFirestore } from 'firebase/firestore/lite';
// import { getAuth } from 'firebase.auth';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.API_KEY,
  authDomain: process.env.AUTH_DOMAIN,
  projectId: process.env.PROJECT_ID,
  storageBucket: process.env.STORAGE_BUCKET,
  messagingSenderId: process.env.MESSAGING_SENDER_ID,
  appId: process.env.APP_ID,
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// const auth = getAuth();



-------------------------------------------------------------------------------------------------

export default firebase;

// import { initializeApp } from 'firebase/app';
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyBLaF96b2eJmN-ZDSyp-LVbrulWWC_-2k0',
  authDomain: 'quail-creek-37705.firebaseapp.com',
  projectId: 'quail-creek-37705',
  storageBucket: 'quail-creek-37705.appspot.com',
  messagingSenderId: '777263584966',
  appId: '1:777263584966:web:dcdb1b5b6c61ec6d2fe9c7',
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
export const auth = firebase.auth();

export default db;
