import firebase from "firebase/app";
import "firebase/storage"

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBkGBQdzJ7jLUSOUDIQmGhZ2PvTHVydDsk",
    authDomain: "socialapp-image-upload.firebaseapp.com",
    projectId: "socialapp-image-upload",
    storageBucket: "socialapp-image-upload.appspot.com",
    messagingSenderId: "104573231828",
    appId: "1:104573231828:web:decd80ad78f14ef0279141",
    measurementId: "G-KQ7KYQHQJP"
  };

  firebase.initializeApp(firebaseConfig);

  const storage = firebase.storage();

  export {storage, firebase as default};