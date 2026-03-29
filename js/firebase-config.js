import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-auth.js";
import { getFirestore, collection, doc, setDoc, getDoc, updateDoc, addDoc, getDocs, query, where, runTransaction, deleteDoc } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-firestore.js";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCcUs5EEf7h6CuLqgyhZO7dfEDFBq6ZW7g",
  authDomain: "shopmikey-c8347.firebaseapp.com",
  projectId: "shopmikey-c8347",
  storageBucket: "shopmikey-c8347.firebasestorage.app",
  messagingSenderId: "361335058179",
  appId: "1:361335058179:web:4a90dc557066852ad30336",
  measurementId: "G-GBNTW9SMRL"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut, collection, doc, setDoc, getDoc, updateDoc, addDoc, getDocs, query, where, runTransaction, deleteDoc };