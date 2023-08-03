// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFirestore} from "firebase/firestore";


// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: "AIzaSyCDm9c5kvgMC6NrrmrG7_DapKrIMgRXJrI",
  authDomain: "portfoliogaitan.firebaseapp.com",
  projectId: "portfoliogaitan",
  storageBucket: "portfoliogaitan.appspot.com",
  messagingSenderId: "717971982730",
  appId: "1:717971982730:web:54d594ae8b701a9a026073",
  measurementId: "G-YNSW45QWP0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
const analytics = getAnalytics(app);

