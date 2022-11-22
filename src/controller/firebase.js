import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyDGRkLCN-YYNl_5VHVfhq4vDF77pEm-icY",
  authDomain: "io-tracker-9.firebaseapp.com",
  projectId: "io-tracker-9",
  storageBucket: "io-tracker-9.appspot.com",
  messagingSenderId: "1044978158250",
  appId: "1:1044978158250:web:d3d199becceb1fb1d71ed3",
  measurementId: "G-MM2SJ2SEL7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const analytics = getAnalytics(app);

export { auth };