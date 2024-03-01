import firebase from 'firebase/compat/app';

// Add the Firebase products that you want to use
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
const firebaseConfig = {
  apiKey: 'AIzaSyDpxXqyKoVHPqxGgyYegOuuJzmWgQwudA0',
  authDomain: 'tenplus-36eb2.firebaseapp.com',
  projectId: 'tenplus-36eb2',
  storageBucket: 'tenplus-36eb2.appspot.com',
  messagingSenderId: '52802872653',
  appId: '1:52802872653:web:f0ffcbca64b9cdc4e5c304',
  measurementId: 'G-MN7GX9SFWX',
};
const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
