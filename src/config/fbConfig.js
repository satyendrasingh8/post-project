import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'


 var firebaseConfig = {
    apiKey: "AIzaSyBg-81kSO749C2aTZhtrT7OokvglhtFDrI",
    authDomain: "react-redux-firebase-a900f.firebaseapp.com",
    databaseURL: "https://react-redux-firebase-a900f.firebaseio.com",
    projectId: "react-redux-firebase-a900f",
    storageBucket: "react-redux-firebase-a900f.appspot.com",
    messagingSenderId: "369072676615",
    appId: "1:369072676615:web:3327ba93d463a21c6e2fa2",
    measurementId: "G-32VCESTVBV"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.firestore().settings({timestampsInSnapshots: true})
  export default firebase