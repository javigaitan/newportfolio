// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
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
const analytics = getAnalytics(app);