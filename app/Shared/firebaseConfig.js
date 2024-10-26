// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC5DGCxZlOwYezNKfqcxXq3AFPT32Wid60",
  authDomain: "pinterest-clone-6bd5d.firebaseapp.com",
  projectId: "pinterest-clone-6bd5d",
  storageBucket: "pinterest-clone-6bd5d.appspot.com",
  messagingSenderId: "970896320393",
  appId: "1:970896320393:web:ba206d15f64558e247e358",
  measurementId: "G-XHV24654Q3",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;
