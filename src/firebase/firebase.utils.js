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

firebase.initializeApp(config);

export const createUserProfileDocument = async (userAuth, additionalData) => {
  console.log("userAuth: ", userAuth);
  if (!userAuth) return;
  //if there is not a user signed in or invalid object then return

  const userRef = firestore.doc(`/users/${userAuth.uid}`);
  //search user in database. this contains doc ref obj. the query does not have the actual data of the collection or document, but properties that tell us details or method to get the Snapshot object which gives us the data we are looking for. This user ref will tell firestore to either get or save data depending if it exists

  const snapshot = await userRef.get();
  //get() creates a snapshot of the obj
  console.log("shanpshot: ", snapshot);

  if (!snapshot.exists) {
    //if user exists then return user obj. If not create new user
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

export const addCollectionAndDocuments = async (
  collectionKey,
  objectsToAdd
) => {
  const collectionRef = firestore.collection(collectionKey);

  const batch = firestore.batch();
  objectsToAdd.forEach((obj) => {
    const newDocRef = collectionRef.doc();

    batch.set(newDocRef, obj);
  });
  return await batch.commit();
};

export const convertCollectionsSnapshotToMap = (collectionsSnapshot) => {
  const transformedCollection = collectionsSnapshot.docs.map((docSnapshot) => {
    const { title, items } = docSnapshot.data();

    return {
      routeName: encodeURI(title.toLowerCase()),
      id: docSnapshot.id,
      title,
      items,
    };
  });

  return transformedCollection.reduce((accum, collection) => {
    accum[collection.title.toLowerCase()] = collection;
    return accum;
  }, {});
};

export const auth = firebase.auth(); // Get the Auth service for the default app
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider(); //gives access to new google provider class (GoogleAuthProvider()) from authentication library
provider.setCustomParameters({ prompt: "select_account" }); //triggers google pop-up
export const signInWithGoogle = () => auth.signInWithPopup(provider); //signInWithPopup takes in many different types of social media sign in pop up like twitter, so adding in provider will prompt pop up for Google

export default firebase;
