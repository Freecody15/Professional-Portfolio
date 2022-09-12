// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from 'firebase/firestore';
// import { getFireStore } from "firebase/fitrestore/lite";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAwxjNyE-7tPq0GwhrnB-xCreMqW992P4A",
    authDomain: "portfolio-work-bf5bf.firebaseapp.com",
    projectId: "portfolio-work-bf5bf",
    storageBucket: "portfolio-work-bf5bf.appspot.com",
    messagingSenderId: "556525365109",
    appId: "1:556525365109:web:6caeb933926f5707d5d53c",
    measurementId: "G-H4C45QM1X8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();
const provider = new GoogleAuthProvider();
// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);
export const storage = getStorage(app);
// const analytics = getAnalytics(app);

export const signInWithGoogle = () => signInWithPopup(auth, provider);

