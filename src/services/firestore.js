// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {collection, getDoc, getDocs, getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA3h2QzBMq-s1gxhePjJsiXmCLPAh3QRKs",
  authDomain: "roraimabike-a6ef3.firebaseapp.com",
  projectId: "roraimabike-a6ef3",
  storageBucket: "roraimabike-a6ef3.appspot.com",
  messagingSenderId: "51852262733",
  appId: "1:51852262733:web:db13aaf7c9e10b77768b04"
};

// Initialize Firebase
const appFirebase = initializeApp(firebaseConfig);
const appFirestore = getFirestore(appFirebase);

export const testDB = () => {
    console.log(appFirestore)
}

export const getItems = async () => {
    const productsCollection = collection(appFirestore, "products");
    const productsSnapshot = await getDocs(productsCollection);
    let products = productsSnapshot.docs.map(product => {
        return {...product.data(), id: product.id}
    });
    return products

}
// export const getSingleItem = async (id) => {
    

// }

export default appFirestore;