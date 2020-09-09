import firebase from 'firebase'
const firebaseConfig = {
    apiKey: "AIzaSyBHdIfR1rv_WzN_blhV0v8EBr33ZHBmuwg",
    authDomain: "messenger-494c1.firebaseapp.com",
    databaseURL: "https://messenger-494c1.firebaseio.com",
    projectId: "messenger-494c1",
    storageBucket: "messenger-494c1.appspot.com",
    messagingSenderId: "688716835639",
    appId: "1:688716835639:web:d7eac1dc8298fdc9d908b2"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();
  const auth = firebaseApp.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export {auth, provider};
  export default db;
