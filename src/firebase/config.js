// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDSnW6nQog18UtGrXWyYGGfjptsu9VaHVo",
    authDomain: "tienda-mendez.firebaseapp.com",
    projectId: "tienda-mendez",
    storageBucket: "tienda-mendez.appspot.com",
    messagingSenderId: "449825264415",
    appId: "1:449825264415:web:6d34d96a1652d33f3ad62a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const getFirestoreApp =()=>{
    return app
}