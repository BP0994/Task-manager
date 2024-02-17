/** @format */

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBz6fzsiXD0u0ZuaCMJ3OvG_S-nIbBnQvA",
  authDomain: "task-management-64712.firebaseapp.com",
  projectId: "task-management-64712",
  storageBucket: "task-management-64712.appspot.com",
  messagingSenderId: "32700647449",
  appId: "1:32700647449:web:760986bb781aab94a34288",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const db = getDatabase(app);
