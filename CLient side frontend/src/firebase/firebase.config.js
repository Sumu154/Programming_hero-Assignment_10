// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCkMHrhMrq8KLYh4Hjx3X75fExfaq7m9jE",
  authDomain: "crowd-funding-b838b.firebaseapp.com",
  projectId: "crowd-funding-b838b",
  storageBucket: "crowd-funding-b838b.firebasestorage.app",
  messagingSenderId: "245851591587",
  appId: "1:245851591587:web:42a3d08b29e5f21d3d4016"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);