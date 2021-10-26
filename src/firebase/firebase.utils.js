import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";

const config = {
	apiKey: "AIzaSyBdYl6dkV53hrPvHYGGTxdAigcWL5bdKug",
	authDomain: "crown-db-88933.firebaseapp.com",
	projectId: "crown-db-88933",
	storageBucket: "crown-db-88933.appspot.com",
	messagingSenderId: "955337951449",
	appId: "1:955337951449:web:b76e39972f3b5dec4896c8",
	measurementId: "G-FPY6WJN1PE",
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
	if (!userAuth) return;

	const userRef = firestore.doc(`/users/${userAuth.uid}`);
	const snapshot = await userRef.get();

	if (!snapshot.exists) {
		const { displayName, email } = userAuth;
		const createdAt = new Date();

		try {
			await userRef.set({
				displayName,
				email,
				createdAt,
				...additionalData,
			});
		} catch (err) {
			console.log("Error creating new document", err.message);
		}
	}

	return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
