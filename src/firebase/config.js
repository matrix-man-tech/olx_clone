import firebase from 'firebase'
import 'firebase/auth'
import 'firebase/firebase'
import 'firebase/storage'
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCbqypdHIZtbZX5075g8xBKYamVgjnvE3w",
    authDomain: "olx-clone-2a2bb.firebaseapp.com",
    projectId: "olx-clone-2a2bb",
    storageBucket: "olx-clone-2a2bb.appspot.com",
    messagingSenderId: "640099302716",
    appId: "1:640099302716:web:74e30fbf4023bcb8b7f239",
    measurementId: "G-CBZ0E2CPH6"
  };
 export default firebase.initializeApp(firebaseConfig)