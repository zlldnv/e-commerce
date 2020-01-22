import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyAwcc6w-YntIJPmnn1OCdNhJeJSdba46eA",
  authDomain: "crwn-db-d8111.firebaseapp.com",
  databaseURL: "https://crwn-db-d8111.firebaseio.com",
  projectId: "crwn-db-d8111",
  storageBucket: "crwn-db-d8111.appspot.com",
  messagingSenderId: "541429046057",
  appId: "1:541429046057:web:3fd374fa667058469c7538",
  measurementId: "G-Z4F17SFXC6"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;
  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const spapshot = userRef.get();

  if (!spapshot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({ displayName, email, createdAt, ...additionalData });
    } catch (error) {
      console.log("error creating user", error.message);
    }
  }

  return userRef;
};

export const googleProvider = new firebase.auth.GoogleAuthProvider();
googleProvider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(googleProvider);

export const addCollectionAndDocuments = async (
  collectionkey,
  objectsToAdd
) => {
  const collectionRef = firestore.collection(collectionkey);
  const batch = firestore.batch();
  objectsToAdd.forEach(obj => {
    const newDocRef = collectionRef.doc();
    batch.set(newDocRef, obj);
  });
  return await batch.commit();
};

export const convertCollectionSnapshotToMap = collection =>
  collection.docs.reduce((acc, doc) => {
    const { title, items } = doc.data();
    acc[title.toLowerCase()] = {
      routeName: encodeURI(title.toLowerCase()),
      id: doc.id,
      title,
      items
    };
    return acc;
  }, {});

export const getCurrentUser = () =>
  new Promise((resolve, reject) => {
    const unsubscribe = auth.onAuthStateChanged(userAuth => {
      unsubscribe();
      resolve(userAuth);
    }, reject);
  });

export default firebase;
