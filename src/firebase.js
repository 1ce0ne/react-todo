// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCUUkT-xQF-6lLwqnPBl95tyoXPZcmDO-k",
  authDomain: "todos-974a7.firebaseapp.com",
  projectId: "todos-974a7",
  storageBucket: "todos-974a7.appspot.com",
  messagingSenderId: "479698356568",
  appId: "1:479698356568:web:34f5884490e1cc321cbd2d",
  databaseURL: "https://todos-974a7-default-rtdb.europe-west1.firebasedatabase.app/"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
export default firebaseApp;