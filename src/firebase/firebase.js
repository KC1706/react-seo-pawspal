import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey:
    import.meta.env.VITE_FIREBASE_API_KEY ||
    "AIzaSyCDBWaH-7wHavdmr5P3Iyc0pEFnZgdNjHg",
  authDomain: "pawspalconnect-storage.firebaseapp.com",
  projectId: "pawspalconnect-storage",
  storageBucket: "pawspalconnect-storage.firebasestorage.app",
  appId: "1:614707455963:web:32f21b0e2e4e81ba6b29fe",
  measurementId: "G-RS2DSWY699",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
