import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAF7EhcUiy4sPJOL1NjuAh4az_wQiutyLs",
  authDomain: "e-clone-ultime.firebaseapp.com",
  projectId: "e-clone-ultime",
  storageBucket: "e-clone-ultime.appspot.com",
  messagingSenderId: "426284252326",
  appId: "1:426284252326:web:51a1cd3c10cef7ac2fc867"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);