import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB8ZROaX0FAWDlHkev03wyg6y22V_MgiEg",
  authDomain: "hii-cris.firebaseapp.com",
  projectId: "hii-cris",
  storageBucket: "hii-cris.firebasestorage.app",
  messagingSenderId: "517040510176",
  appId: "1:517040510176:web:edcfdb31791f30522fac85",
  measurementId: "G-JDWEQTWT2S"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
