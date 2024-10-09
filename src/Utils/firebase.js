// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDLTBxv_YlriOTPHUWw6NmSb7hZVr9ydj4",
  authDomain: "netflix-gpt-c45e0.firebaseapp.com",
  projectId: "netflix-gpt-c45e0",
  storageBucket: "netflix-gpt-c45e0.appspot.com",
  messagingSenderId: "384824603882",
  appId: "1:384824603882:web:915c278eed1a3354035393",
  measurementId: "G-RNFSL9YYSD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
