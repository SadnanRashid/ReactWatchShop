import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC3GL7uli8F51UNH26oIYhoiAS6X9_dsEY",
  authDomain: "reactcomsite.firebaseapp.com",
  projectId: "reactcomsite",
  storageBucket: "reactcomsite.appspot.com",
  messagingSenderId: "454794595885",
  appId: "1:454794595885:web:659c5e6a01ec94ec4e72a4",
  measurementId: "G-6KVRQDPQ2J",
};
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
const db = getFirestore(app);

export { db };

//Make sure to hide api keys from Public
