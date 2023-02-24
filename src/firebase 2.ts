import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const app = initializeApp({
  apiKey: "AIzaSyBKTFTB1_gaqMwgH-cC52b7RYbohdXgnjM",
  authDomain: "student-meals-3d3a2.firebaseapp.com",
  projectId: "student-meals-3d3a2",
  storageBucket: "student-meals-3d3a2.appspot.com",
  messagingSenderId: "343636033173",
  appId: "1:343636033173:web:1a8b4586f83ae24db5a59c"
});

export const auth = getAuth(app);
export const firestore = getFirestore(app);

export default app;