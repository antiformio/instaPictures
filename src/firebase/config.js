import firebase from "firebase/app";
import "firebase/storage";
import "firebase/firestore";

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyBLCEnromdIp12y7fMd0QF-1NKbCuJdMMU",
  authDomain: "insta-pictures.firebaseapp.com",
  projectId: "insta-pictures",
  storageBucket: "insta-pictures.appspot.com",
  messagingSenderId: "786316579975",
  appId: "1:786316579975:web:64f220eb1bb321c40bd422",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFireStore = firebase.firestore();

export { projectStorage, projectFireStore };
