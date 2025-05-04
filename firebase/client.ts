import { initializeApp, getApp, getApps } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore" 

const firebaseConfig = {
  apiKey: "AIzaSyC9J_tk1fjvtt912miB_YEfQoN15GCeQng",
  authDomain: "prepwise-8ba9d.firebaseapp.com",
  projectId: "prepwise-8ba9d",
  storageBucket: "prepwise-8ba9d.firebasestorage.app",
  messagingSenderId: "713247281958",
  appId: "1:713247281958:web:29112beb9dfe9f9d8267e7",
  measurementId: "G-BM33C3M848"
};

// Initialize Firebase
const app = !getApps.length ? initializeApp(firebaseConfig) : getApp();

export const auth = getAuth(app);
export const db = getFirestore(app);