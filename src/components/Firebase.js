// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyArNNNmWJfIBVPC0gkPAHvntUNtlJC6m1k",
  authDomain: "clone-80ccb.firebaseapp.com",
  projectId: "clone-80ccb",
  storageBucket: "clone-80ccb.appspot.com",
  messagingSenderId: "674691508423",
  appId: "1:674691508423:web:aaee967de943eef93136e2",
  measurementId: "G-WGY51WDKZ2",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

console.log(db);

export { db, auth };
