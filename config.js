import firebase from "firebase";
require("@firebase/firestore");

const firebaseConfig = {
  apiKey: "AIzaSyBkA5t1__QhkzHRQjC5O2ejYuIc6OBSJSM",
  authDomain: "e-ride-584ae.firebaseapp.com",
  projectId: "e-ride-584ae",
  storageBucket: "e-ride-584ae.appspot.com",
  messagingSenderId: "99834418313",
  appId: "1:99834418313:web:7fce92621c24d54d95a258"
};

firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
