import firebase from "firebase";
import 'firebase/auth';
import 'firebase/firebase';


const firebaseConfig = {
  apiKey: "AIzaSyDuNUKg7DMWzPhsDO3J4FO-I_3uI8nh2sw",
  authDomain: "todolist-e79d4.firebaseapp.com",
  projectId: "todolist-e79d4",
  storageBucket: "todolist-e79d4.appspot.com",
  messagingSenderId: "718564078338",
  appId: "1:718564078338:web:d0adbd042af81dfe0f881b",
  measurementId: "G-2537BJSTJF"
};

export default firebase.initializeApp(firebaseConfig);


