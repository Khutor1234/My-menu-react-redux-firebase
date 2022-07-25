import firebase from 'firebase';
import ReduxSagaFirebase from 'redux-saga-firebase';

const firebaseConfig = {
  apiKey: 'AIzaSyBlJK0NCN1AhGZYs_xJRkZ3l5PXmvWXOlk',
  authDomain: 'menu-31238.firebaseapp.com',
  projectId: 'menu-31238',
  storageBucket: 'menu-31238.appspot.com',
  messagingSenderId: '773877708952',
  appId: '1:773877708952:web:18fcac0b3827422e3df8ed',
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const auth = firebase.auth();

const authProvider = new firebase.auth.GoogleAuthProvider();
const reduxSagaFirebase = new ReduxSagaFirebase(firebaseApp);

export { db, auth, authProvider, firebaseApp, reduxSagaFirebase };
