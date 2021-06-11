import firebase from "firebase";
const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyBDzpQTQpUbjq21rh-C8Vj93zVjNh732Zg",
    authDomain: "clone-ba0ff.firebaseapp.com",
    projectId: "clone-ba0ff",
    storageBucket: "clone-ba0ff.appspot.com",
    messagingSenderId: "783447501786",
    appId: "1:783447501786:web:65ed15640c439b3a8f2ee3"
});

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };