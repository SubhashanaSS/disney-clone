import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import 'firebase/compat/storage';

const firebaseConfig = {
    apiKey: "",
    authDomain: "disneyplus-clone-4dd4e.firebaseapp.com",
    projectId: "disneyplus-clone-4dd4e",
    storageBucket: "disneyplus-clone-4dd4e.appspot.com",
    messagingSenderId: "",
    appId: ""
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();
  const storage = firebase.storage().ref();
  
  export { auth, provider, storage };
  export default db;















