// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  // apiKey: process.env.REACT_APP_apiKey,
  // authDomain: process.env.REACT_APP_authDomain,
  // projectId: process.env.REACT_APP_projectId,
  // storageBucket: process.env.REACT_APP_storageBucket,
  // messagingSenderId: process.env.REACT_APP_messagingSenderId,
  // appId: process.env.REACT_APP_appId,
  apiKey: "AIzaSyD4P7y5A3x4fUyKgoWXwStNDXK1cXn4cFI",
  authDomain: "easy-shop-20d6f.firebaseapp.com",
  projectId: "easy-shop-20d6f",
  storageBucket: "easy-shop-20d6f.appspot.com",
  messagingSenderId: "636883023638",
  appId: "1:636883023638:web:18fe1a952abb08f1030237",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;
