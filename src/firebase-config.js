
// src/firebase-config.js
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAp388N1PVkNVgKmMMAWbDProLY3Glq9bA",
  authDomain: "auth-f1ac3.firebaseapp.com",
  projectId: "auth-f1ac3",
  storageBucket: "auth-f1ac3.firebasestorage.app",
  messagingSenderId: "370248784991",
  appId: "1:370248784991:web:3905c9d08dc2ef2a904fea"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { auth, provider, signInWithPopup, signOut };
