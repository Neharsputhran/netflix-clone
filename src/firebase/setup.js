// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth,GoogleAuthProvider} from 'firebase/auth';
import {getFirestore} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCCEqKxv8B6ttuI5to_Zw2igdsubYpvjmo",
  authDomain: "netflix-clone-5c12f.firebaseapp.com",
  projectId: "netflix-clone-5c12f",
  storageBucket: "netflix-clone-5c12f.appspot.com",
  messagingSenderId: "131475042302",
  appId: "1:131475042302:web:5a441203cb486fbe1a5aaf"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth =getAuth(app);
export const googleauth=new GoogleAuthProvider();
export const database = getFirestore(app);