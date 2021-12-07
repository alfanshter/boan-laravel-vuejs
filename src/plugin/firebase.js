import firebase from "firebase/app";

// Import needed firebase modules
import "firebase/auth";

const VUE_APP_API_KEY = "AIzaSyAsY8ZaEmX15Ojd_33OxL7neOecBn5Etpo";
const VUE_APP_AUTH_DOMAIN = "elaporz.firebaseapp.com";
const VUE_APP_DATABASE_URL =
    "https://elaporz-default-rtdb.asia-southeast1.firebasedatabase.app/";
const VUE_APP_PROJECT_ID = "elaporz";
const VUE_APP_STORAGE_BUCKET = "elaporz.appspot.com";
const VUE_APP_MESSAGING_SENDER_ID = "643951635099";
const VUE_APP_APP_ID = "1:643951635099:web:1b0f250ed6ea73ac5cf43e";
// Firebase app config
const config = {
    apiKey: VUE_APP_API_KEY,
    authDomain: VUE_APP_AUTH_DOMAIN,
    databaseURL: VUE_APP_DATABASE_URL,
    projectId: VUE_APP_PROJECT_ID,
    storageBucket: VUE_APP_STORAGE_BUCKET,
    messagingSenderId: VUE_APP_MESSAGING_SENDER_ID,
    appId: VUE_APP_APP_ID,
};

// Init our firebase app
firebase.initializeApp(config);
