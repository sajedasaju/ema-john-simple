// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBG4x8mn_TRzepv7fAw8LCkv78gA209Uyw",
  authDomain: "ema-john-simple-59ee5.firebaseapp.com",
  projectId: "ema-john-simple-59ee5",
  storageBucket: "ema-john-simple-59ee5.appspot.com",
  messagingSenderId: "921315454711",
  appId: "1:921315454711:web:93b7144942fbe402e96df2",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
export default auth;
