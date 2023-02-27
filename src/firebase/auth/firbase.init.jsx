// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD5oLlGdY0fikPweXM8zyT7JBBxgVC_E-0",
  authDomain: "daily-sonar-bangla.firebaseapp.com",
  projectId: "daily-sonar-bangla",
  storageBucket: "daily-sonar-bangla.appspot.com",
  messagingSenderId: "459459613520",
  appId: "1:459459613520:web:6c367600a53820d7445255"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;