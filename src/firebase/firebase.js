import firebase from 'firebase/app';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyAio1DTLRtg4x0J9M9yRq3DTQK688Z6toc",
  authDomain: "megapanel-3439e.firebaseapp.com",
  databaseURL: "https://megapanel-3439e.firebaseio.com",
  projectId: "megapanel-3439e",
  storageBucket: "megapanel-3439e.appspot.com",
  messagingSenderId: 982719133621,
};

if (!firebase.apps.length) {
  firebase.initializeApp(config);
}

const auth = firebase.auth();

export {
  auth,
};