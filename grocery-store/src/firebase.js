import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDyNYflf_iCXQ5Bq_ExSio2I6OoPMBCMAg",
  authDomain: "challenge-d6c56.firebaseapp.com",
  projectId: "challenge-d6c56",
  storageBucket: "challenge-d6c56.appspot.com",
  messagingSenderId: "47074061960",
  appId: "1:47074061960:web:72cc5eee4e9be4c7d9f93d",
  measurementId: "G-LLJMDWL6HB"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };