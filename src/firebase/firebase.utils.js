import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";

const config = {
	apiKey: "AIzaSyBSpeeUepO1MNQDWD24RTO-1FZ0Cb2U9I4",
	authDomain: "crown-db-47019.firebaseapp.com",
	projectId: "crown-db-47019",
	storageBucket: "crown-db-47019.appspot.com",
	messagingSenderId: "257206084453",
	appId: "1:257206084453:web:b4fa8c77aab4b2338fb78c",
	measurementId: "G-483V0TYX7L",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
