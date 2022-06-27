import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import 'firebase/compat/storage';

const firebaseConfig = {
    apiKey: "AIzaSyCCUXOw5Ue0HriFxVDfH7ib1gN95H988Z4",
    authDomain: "disneyplus-clone-4dd4e.firebaseapp.com",
    projectId: "disneyplus-clone-4dd4e",
    storageBucket: "disneyplus-clone-4dd4e.appspot.com",
    messagingSenderId: "927362412083",
    appId: "1:927362412083:web:792f4c6802332242bf3d46"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();
  const storage = firebase.storage().ref();
  
  export { auth, provider, storage };
  export default db;















