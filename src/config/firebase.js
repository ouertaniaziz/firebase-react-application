import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCBW_D-UtAKfrrWNWqwRzXBOdjC5NnzyBY",
  authDomain: "fir-react-application-e813a.firebaseapp.com",
  projectId: "fir-react-application-e813a",
  storageBucket: "fir-react-application-e813a.appspot.com",
  messagingSenderId: "1012714740781",
  appId: "1:1012714740781:web:607d4c30ad5ddcccc12ca4",
  measurementId: "G-0YN6YLW93V",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
