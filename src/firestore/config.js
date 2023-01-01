// Import the functions you need from the SDKs you need
import "firebase/firestore";

import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBbufCsMCsg5hq50AXborznKuYkPFUCzso",
  authDomain: "ecommerce-7625f.firebaseapp.com",
  projectId: "ecommerce-7625f",
  storageBucket: "ecommerce-7625f.appspot.com",
  messagingSenderId: "20624245101",
  appId: "1:20624245101:web:52c6251de8fb0d9cdc9a64"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const initFirestoreApp = () => {
    return app
}