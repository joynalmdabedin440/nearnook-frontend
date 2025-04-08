// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAS4vkuTpNEiGUqUhWOPlDa5ZPQCetxc4U",
  authDomain: "nearnook-3ec7b.firebaseapp.com",
  projectId: "nearnook-3ec7b",
  storageBucket: "nearnook-3ec7b.firebasestorage.app",
  messagingSenderId: "324858505749",
  appId: "1:324858505749:web:2d6d868281f714106f3c1c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export  const auth = getAuth(app);