import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC_5bCoNf5IAm6pGlLsNjp7J54M8a8Hrfg",
  authDomain: "digital-kormo.firebaseapp.com",
  projectId: "digital-kormo",
  storageBucket: "digital-kormo.appspot.com",
  messagingSenderId: "851291495393",
  appId: "1:851291495393:web:7d4f073d66c242a3f7d0a0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;