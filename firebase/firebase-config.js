import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCOmxKTwVs6tgtlvxl_Z9wIVj1OLZGD35M",
  authDomain: "moc-go-8ecbb.firebaseapp.com",
  projectId: "moc-go-8ecbb",
  storageBucket: "moc-go-8ecbb.appspot.com",
  messagingSenderId: "136185337852",
  appId: "1:136185337852:web:9ca36408f4df17f01f0479",
  measurementId: "G-5P6WG76ZRV"
};


const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const authentication = getAuth(app);