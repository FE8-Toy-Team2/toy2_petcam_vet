import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDMRAY3z76a6WrqCrauh0toD3poMv3xPu8",
  authDomain: "toy2-petcam-vet.firebaseapp.com",
  projectId: "toy2-petcam-vet",
  storageBucket: "toy2-petcam-vet.appspot.com",
  messagingSenderId: "706115515659",
  appId: "1:706115515659:web:800b8a231ffc9430d59e0e",
  measurementId: "G-08RTNY2NL6",
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

//로그인 인증에 관련된 것
export const auth = getAuth(app);

//DB에 관련된 것
export const storage = getStorage(app);
export const dataBase = getFirestore(app);

export default app
