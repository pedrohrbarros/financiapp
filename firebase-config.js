import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebase_config = {
  apiKey: "AIzaSyB6ZOwrAOW57GMU3ky1LOLQLBvD_vgQd28",
  authDomain: "financiapp-d5ff3.firebaseapp.com",
  projectId: "financiapp-d5ff3",
  storageBucket: "financiapp-d5ff3.firebasestorage.app",
  messagingSenderId: "90081650311",
  appId: "1:90081650311:web:dd7358bb6fffd84739ba22",
  measurementId: "G-CBVTE6J03V"
};

const app = initializeApp(firebase_config);

const auth = getAuth(app);