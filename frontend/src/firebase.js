// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth,GoogleAuthProvider} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAPtJ8SQ6g0ugLuxIpf6CLmXBfpPvXKlyE",
  authDomain: "offscript-lessons.firebaseapp.com",
  projectId: "offscript-lessons",
  storageBucket: "offscript-lessons.firebasestorage.app",
  messagingSenderId: "1009338086695",
  appId: "1:1009338086695:web:054fc156380f9a1201a502",
  measurementId: "G-7F2ZR9NVQE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();
export {app,auth,googleProvider};