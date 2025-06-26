import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDAZNLooBWCaK4NxH4tLzby29aeCcMDFQM",
  authDomain: "cardmanager-a3d68.firebaseapp.com",
  projectId: "cardmanager-a3d68",
  storageBucket: "cardmanager-a3d68.firebasestorage.app",
  messagingSenderId: "1038322433246",
  appId: "1:1038322433246:web:1b1cc2aefb5bcd8c8cd64f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getFirestore(app)

export {app, database};