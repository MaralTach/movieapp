import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

//* https://firebase.google.com/docs/auth/web/start
//* https://console.firebase.google.com/ => project settings
//! firebase console settings bölümünden firebaseconfig ayarlarını al
const firebaseConfig = {
  apiKey: "AIzaSyDOs1bBE9uyFV398hkAqPaAfy7Ct3NfzWI",
  authDomain: "movieapp2-5a18b.firebaseapp.com",
  projectId: "movieapp2-5a18b",
  storageBucket: "movieapp2-5a18b.appspot.com",
  messagingSenderId: "732611096744",
  appId: "1:732611096744:web:379ec5c57322c1d668129d",
  // measurementId: "G-6NV803XPM1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
