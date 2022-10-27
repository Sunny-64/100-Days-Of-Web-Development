// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCPj-HPqFxVWz05gf_vM-fQbFEsDWbOrUk",
  authDomain: "to-do-list-4a8e3.firebaseapp.com",
  projectId: "to-do-list-4a8e3",
  storageBucket: "to-do-list-4a8e3.appspot.com",
  messagingSenderId: "188664977147",
  appId: "1:188664977147:web:5f68f2dcd1537c7b2c825e",
  measurementId: "G-TJH99KTEX8"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);