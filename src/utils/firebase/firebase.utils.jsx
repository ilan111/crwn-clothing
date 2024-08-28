import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCcz31QR8AffGAVoVH9HFQqk4Rj5kTmAGU",
  authDomain: "crwn-clothing-db-ca044.firebaseapp.com",
  projectId: "crwn-clothing-db-ca044",
  storageBucket: "crwn-clothing-db-ca044.appspot.com",
  messagingSenderId: "344377985470",
  appId: "1:344377985470:web:b8f12d17d5448ea20451ef",
};

const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
