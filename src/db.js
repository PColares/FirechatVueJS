import firebase from "firebase/compat/app";
import "firebase/compat/database";

const firebaseConfig = {
  apiKey: "AIzaSyD-vSkxHpHDxjnHgd79cWkyPKdmLnRKuiE",
  authDomain: "firechat-vue-56580.firebaseapp.com",
  projectId: "firechat-vue-56580",
  storageBucket: "firechat-vue-56580.appspot.com",
  messagingSenderId: "996624417803",
  appId: "1:996624417803:web:43e0149361b12d197a330e",
};

const db = firebase.initializeApp(firebaseConfig);
export default db;
