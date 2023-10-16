// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBkrmOUwPb-g2b1QqNdL_bGdQb6Eb2a-ok",
    authDomain: "mern-estate2-8ecfe.firebaseapp.com",
    projectId: "mern-estate2-8ecfe",
    storageBucket: "mern-estate2-8ecfe.appspot.com",
    messagingSenderId: "1014630103482",
    appId: "1:1014630103482:web:03821a0ca1cdd4b6254583",
    measurementId: "G-C9M4PCGLVN"
  };
  
// Initialize Firebase
export const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);