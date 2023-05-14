// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Registrar Usuarios:
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAAh1tfpj-B8pdEpTPuisFyhuLp-gdsQis",
  authDomain: "udemy-bluuweb-vue2023.firebaseapp.com",
  projectId: "udemy-bluuweb-vue2023",
  storageBucket: "udemy-bluuweb-vue2023.appspot.com",
  messagingSenderId: "496042509154",
  appId: "1:496042509154:web:8da4dc59088e5017e0a23b"
};

// Initialize Firebase
initializeApp(firebaseConfig);

const auth = getAuth();
export { auth };
