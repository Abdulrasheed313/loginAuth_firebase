// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyCy6WLTEmosPUNgkk_VdOvv5RNIm5HxCg8",
  authDomain: "login-and-signup-3a2a8.firebaseapp.com",
  projectId: "login-and-signup-3a2a8",
  storageBucket: "login-and-signup-3a2a8.appspot.com",
  messagingSenderId: "374042966589",
  appId: "1:374042966589:web:7839a984bf0b389e66c854"
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);