import { initializeApp } from "firebase/app"

const firebaseConfig = {
  //   apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  apiKey: "AIzaSyDXoxXOxDD_tKwKr0yhjfPHxjRhG_nviNw",
  authDomain: "nesco-main.firebaseapp.com",
  projectId: "nesco-main",
  storageBucket: "nesco-main.appspot.com",
  messagingSenderId: "104926175877",
  appId: "1:104926175877:web:eaed528309f7bfad107fec",
}

// console.log("Firebase API Key:", import.meta.env.VITE_FIREBASE_API_KEY) // Check if the API key is loaded

// Initialize Firebase
export const app = initializeApp(firebaseConfig)
