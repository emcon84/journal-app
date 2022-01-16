import 'firebase/firestore';
import 'firebase/auth';
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
import { GoogleAuthProvider } from 'firebase/auth';
 
 
// Your web app's Firebase configuration
// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDghNwtWp4W1BGK8nFg6Q3Y5VAwSbNZDD4",
    authDomain: "react-app-journal-86f55.firebaseapp.com",
    projectId: "react-app-journal-86f55",
    storageBucket: "react-app-journal-86f55.appspot.com",
    messagingSenderId: "875201325405",
    appId: "1:875201325405:web:a23d969fc1d9b3c58620b4"
  };
  
 
// Initialize Firebase
const app = initializeApp(firebaseConfig);
 
const db = getFirestore();
 
const googleAuthProvider = new GoogleAuthProvider();
 
export{
    app,
    db,
    googleAuthProvider
}