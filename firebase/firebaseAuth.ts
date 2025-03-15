import {
  getAuth,
  signInWithCustomToken,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
import firebaseDB from "./firebasedb";

const auth = getAuth(firebaseDB);

export { auth, signInWithCustomToken, onAuthStateChanged, signOut };
