// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyBWFqAlMJJyT-yGRXKYg1ZvBbtjGMekTtc',
  authDomain: 'house-marketplace-app-8cdf2.firebaseapp.com',
  projectId: 'house-marketplace-app-8cdf2',
  storageBucket: 'house-marketplace-app-8cdf2.appspot.com',
  messagingSenderId: '697883983072',
  appId: '1:697883983072:web:5f1d801c1266889606a485',
  measurementId: 'G-5FWX3EWTBR',
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const db = getFirestore();
