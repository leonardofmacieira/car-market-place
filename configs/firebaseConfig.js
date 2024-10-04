// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getStorage} from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "trip-planner-9abd0.firebaseapp.com",
  projectId: "trip-planner-9abd0",
  storageBucket: "trip-planner-9abd0.appspot.com",
  messagingSenderId: "428279077643",
  appId: "1:428279077643:web:64e454ad0eb4680ba2600e",
  measurementId: "G-9M25YWQGEQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage= getStorage(app)