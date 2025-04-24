// src/Components/Login/firebase.js

import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// ✅ Your Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCS7pf90AXJEdRibJwBVcD6I9CGF49Un2c",
  authDomain: "netflixclone-76403.firebaseapp.com",
  projectId: "netflixclone-76403",
  storageBucket: "netflixclone-76403.appspot.com",
  messagingSenderId: "754442704566",
  appId: "1:754442704566:web:yourAppIdHere" // replace with actual App ID if you have it
};

// ✅ Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
