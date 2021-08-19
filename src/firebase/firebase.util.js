import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
const config = {
  apiKey: "AIzaSyDOXy6WDvw2aa5sTWQvuFiFeeskg6S94yM",
  authDomain: "crwn-db-b86dc.firebaseapp.com",
  projectId: "crwn-db-b86dc",
  storageBucket: "crwn-db-b86dc.appspot.com",
  messagingSenderId: "842052708545",
  appId: "1:842052708545:web:75416e6930f64cb2e70c40",
  measurementId: "G-8NVY538XCD",
};

export const createUserProfileDocument = async (userAuth, additionalDAta) => {
  if (!userAuth) return;
  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createAt,
        ...additionalDAta,
      });
    } catch (error) {
      console.log("error creating user", error.message);
    }
  }

  return userRef;
  // console.log(snapShot);
};
firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
