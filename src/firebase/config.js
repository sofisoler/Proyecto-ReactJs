import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyCGTqt0IkdMCR5veQQv0yKDzarNlgVnVbc",
  authDomain: "react-proyecto-soler.firebaseapp.com",
  projectId: "react-proyecto-soler",
  storageBucket: "react-proyecto-soler.appspot.com",
  messagingSenderId: "512962328209",
  appId: "1:512962328209:web:ee2b42832016a71166f130"
};

const app = initializeApp(firebaseConfig);
export const initFirebase = () => app