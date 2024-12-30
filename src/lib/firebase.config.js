// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDWNwhpvjhJC9WFKdOXR7mqDXeDnoc0iIA",
  authDomain: "ai-extensions-codelab-9d542.firebaseapp.com",
  projectId: "ai-extensions-codelab-9d542",
  storageBucket: "ai-extensions-codelab-9d542.firebasestorage.app",
  messagingSenderId: "27891891947",
  appId: "1:27891891947:web:8949294c7b2b7d450408ae",
  measurementId: "G-WMNPWGVDZH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);