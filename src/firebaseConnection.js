import firebase from 'firebase/app';
import 'firebase/database';
import 'firebase/auth';

let firebaseConfig = {
    apiKey: "AIzaSyCscaNaWpImNSiC9Roh1NA_PX1jafHwmsM",
    authDomain: "meuapp-76096.firebaseapp.com",
    databaseURL: "https://meuapp-76096.firebaseio.com",
    projectId: "meuapp-76096",
    storageBucket: "meuapp-76096.appspot.com",
    messagingSenderId: "110649719199",
    appId: "1:110649719199:web:60a11d4c46779be945a5aa"
  };

  if(!firebase.apps.length){
      //abre minha conexão
      firebase.initializeApp(firebaseConfig);
  }

  export default firebase;