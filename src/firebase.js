import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyDo9KsX3IkJeDjDGELiCuebkVyx6NKZoqA",
  authDomain: "test-0411-58e85.firebaseapp.com",
  projectId: "test-0411-58e85",
  storageBucket: "test-0411-58e85.appspot.com",
  messagingSenderId: "64606036388",
  appId: "1:64606036388:web:fc23b8a37ee79970682131",
});

const db = firebaseApp.firestore();

export { db, firebaseApp };
