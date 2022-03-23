// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCAXWg2aol1r78gvthYK9QGW5sWY9BrM5E",
  authDomain: "ecommerce-react-2022.firebaseapp.com",
  projectId: "ecommerce-react-2022",
  storageBucket: "ecommerce-react-2022.appspot.com",
  messagingSenderId: "141977557381",
  appId: "1:141977557381:web:7b69c41c870673302c4cec"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app)

export default db;