// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyAiWbF_wSHbop8-QtOFOTH5FGTKqq0uz6k",
  authDomain: "challenge-ae57b.firebaseapp.com",
  projectId: "challenge-ae57b",
  storageBucket: "challenge-ae57b.appspot.com",
  messagingSenderId: "353502347037",
  appId: "1:353502347037:web:149fd5c0280e380c0a6bf4",
  measurementId: "G-6ELHBCK6X3"
};


const firebaseApp= firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();


export{ db ,auth };