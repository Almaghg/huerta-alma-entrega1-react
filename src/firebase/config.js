// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCnI_j9lyMx71rBz9MrPbhgRRlW0npMB8g",
  authDomain: "lulacalula-c7c7e.firebaseapp.com",
  projectId: "lulacalula-c7c7e",
  storageBucket: "lulacalula-c7c7e.appspot.com",
  messagingSenderId: "855070640712",
  appId: "1:855070640712:web:e18bddf4a06c4b1ca0e67d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);