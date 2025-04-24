// src/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { fireBase_apiKey,fireBase_projectId } from "../../constants/constants";

const firebaseConfig = {
  apiKey: { fireBase_apiKey } ,
  authDomain: "YOUR_PROJECT_ID.firebaseapp.com",
  projectId: {fireBase_projectId},
  storageBucket: `${fireBase_projectId}.appspot.com`,
  messagingSenderId: "SENDER_ID",
  appId: "APP_ID"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
