import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyDvs9r863ZuWzPLT_jt5cXyTwjnXquigiU",
    authDomain: "my-menu-8fe43.firebaseapp.com",
    projectId: "my-menu-8fe43",
    storageBucket: "my-menu-8fe43.appspot.com",
    messagingSenderId: "949035068243",
    appId: "1:949035068243:web:2fc4f0e21116c3f0ba4fa6"
};
  
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
export {db}