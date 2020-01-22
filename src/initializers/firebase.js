import firebase from 'firebase';

const config = {
    apiKey: "AIzaSyD9FErFSNGezOFJ75h9mcZHsh0lFxiFwQU",
    authDomain: "album-f5ecb.firebaseapp.com",
    databaseURL: "https://album-f5ecb.firebaseio.com",
    projectId: "album-f5ecb",
    storageBucket: "album-f5ecb.appspot.com",
    messagingSenderId: "439934767021"
  };

  firebase.initializeApp(config);

  export default firebase;