import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyBLaF96b2eJmN-ZDSyp-LVbrulWWC_-2k0',
  authDomain: 'quail-creek-37705.firebaseapp.com',
  projectId: 'quail-creek-37705',
  storageBucket: 'quail-creek-37705.appspot.com',
  messagingSenderId: '777263584966',
  appId: '1:777263584966:web:dcdb1b5b6c61ec6d2fe9c7',
};

const app = initializeApp(firebaseConfig);

// gives us an auth instance
const auth = getAuth(app);

// in order to use this auth instance elsewhere
export default auth;
