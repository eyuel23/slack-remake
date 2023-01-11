import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import * as firebase from "firebase/app";
const firebaseConfig = {
  apiKey: "AIzaSyDyB0JGpPElaau7nOQj5Pv6uNjF7wfpQp4",
  authDomain: "slack-85328.firebaseapp.com",
  projectId: "slack-85328",
  storageBucket: "slack-85328.appspot.com",
  messagingSenderId: "802991783991",
  appId: "1:802991783991:web:3780bd9a1d62b6025fffb2",
  measurementId: "G-6XEKMV89P1",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const db = getFirestore(app);
