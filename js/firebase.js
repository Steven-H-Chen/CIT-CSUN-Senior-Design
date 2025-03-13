// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyADk7if-797jFI3Y3IUCnCXFSlOsFmX_3k",
  authDomain: "spoton-cit481.firebaseapp.com",
  databaseURL: "https://spoton-cit481-default-rtdb.firebaseio.com",
  projectId: "spoton-cit481",
  storageBucket: "spoton-cit481.firebasestorage.app",
  messagingSenderId: "753873898041",
  appId: "1:753873898041:web:bde5e8f86aea63b175dbe8",
  measurementId: "G-4B83QKRBSZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);

export { db };