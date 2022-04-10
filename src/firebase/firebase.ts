// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCdisgWOlBxhNDF1WrAjDL8nVONs3OhJVI",
  authDomain: "poco-class-80a49.firebaseapp.com",
  projectId: "poco-class-80a49",
  storageBucket: "poco-class-80a49.appspot.com",
  messagingSenderId: "258065370575",
  appId: "1:258065370575:web:1c956a1ac5ce99b9b1d6ba",
  measurementId: "G-HMLZC7Z97M",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
