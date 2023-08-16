// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage, ref } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBEzOmzroHJFNS-iVjGxBZJZEUnctM8Kvk",
  authDomain: "californica-nursery.firebaseapp.com",
  projectId: "californica-nursery",
  storageBucket: "californica-nursery.appspot.com",
  messagingSenderId: "756816612275",
  appId: "1:756816612275:web:ab428b9e64d7fb224d59c6",
  measurementId: "G-NRJLHZJ5PB"
};

// Initialize Firebase
export const firebaseApp = initializeApp(firebaseConfig);
//const analytics = window && getAnalytics(firebaseApp);
export const db = getFirestore(firebaseApp)

export const auth = getAuth()

// Get a reference to the storage service, which is used to create references in your storage bucket
export const storage = getStorage();

// Create a storage reference from our storage service
export const plantImageRef = ref(storage, 'plant-images');

export const merchImageRef = ref(storage, 'merch-images')