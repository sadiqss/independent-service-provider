// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDOFJKsIFJyGg4H_Oi83SuvS0DK2uMxmBA",
    authDomain: "weekend-getaway-f3ba1.firebaseapp.com",
    projectId: "weekend-getaway-f3ba1",
    storageBucket: "weekend-getaway-f3ba1.appspot.com",
    messagingSenderId: "559760693079",
    appId: "1:559760693079:web:27239e6d6e207abefc5012"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
export default auth;