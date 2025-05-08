import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"; 

const firebaseConfig = {
  apiKey: "AIzaSyA9WMA1OKQvjnsmc_lapobHQwvgsYNJkX0",
  authDomain: "sample-firebase-ai-app-fec0f.firebaseapp.com",
  projectId: "sample-firebase-ai-app-fec0f",
  storageBucket: "sample-firebase-ai-app-fec0f.firebasestorage.app",
  messagingSenderId: "381158097314",
  appId: "1:381158097314:web:a681b28d49c79c21d532fb"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
