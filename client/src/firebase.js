// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-blog-f70be.firebaseapp.com",
  projectId: "mern-blog-f70be",
  storageBucket: "mern-blog-f70be.appspot.com",
  messagingSenderId: "553368538093",
  appId: "1:553368538093:web:bb552dced5f55989e375e4"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);