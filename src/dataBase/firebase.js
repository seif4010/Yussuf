import firebase from "firebase"

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAmkarjVMoP_IWFNToW2Vo7bVqsnmyxWlw",
    authDomain: "twitter-clone-2af65.firebaseapp.com",
    projectId: "twitter-clone-2af65",
    storageBucket: "twitter-clone-2af65.appspot.com",
    messagingSenderId: "931548364847",
    appId: "1:931548364847:web:d648a9d5034e5d1f9a06da",
    measurementId: "G-VKNWBD0QSE"
  };

  const App = firebase.iniatializeApp({firebaseConfig})
  const db = App.firebasestore()

  export default db

