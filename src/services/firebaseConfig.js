import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyDEAEsWJqws-xTMYkKLK6Qk7C3uZiv6QlA",
  authDomain: "chat-1b4ec.firebaseapp.com",
  projectId: "chat-1b4ec",
  storageBucket: "chat-1b4ec.appspot.com",
  messagingSenderId: "276656022243",
  appId: "1:276656022243:web:e250e8f557c688a84a5bd6",
  measurementId: "G-BFH8GT3BBM",
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const databaseApp = getFirestore(app)