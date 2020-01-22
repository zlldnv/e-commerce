import { takeLatest, put, call } from "redux-saga/effects";
import {
  googleProvider,
  auth,
  createUserProfileDocument,
  getCurrentUser
} from "firebaseConfig";

import { userActionTypes } from "./types";
import {
  signInSuccess,
  signInFailure,
  signOutSuccess,
  signOutFailure,
  signUpSuccess,
  signUpFailure
} from "./actions";

export default function*() {
  yield takeLatest(userActionTypes.GOOGLE_SIGN_IN_START, signInWithGoggleSaga);
  yield takeLatest(userActionTypes.EMAIL_SIGN_IN_START, signInWithEmailSaga);
  yield takeLatest(userActionTypes.CHECK_USER_SESSION, isUserAuthenticated);
  yield takeLatest(userActionTypes.SIGN_OUT_START, signOutSaga);
  yield takeLatest(userActionTypes.SIGN_UP_START, signUpSaga);
  yield takeLatest(userActionTypes.SIGN_UP_SUCCESS, signInAfterSignUpSaga);
}

export function* getSnapshotFromUserAuth(user, additionalData) {
  const userRef = yield call(createUserProfileDocument, user, additionalData);
  const snapshot = yield userRef.get();
  yield put(signInSuccess({ id: snapshot.id, ...snapshot.data() }));
}

export function* signInAfterSignUpSaga({ payload: { user, additionalData } }) {
  try {
    yield getSnapshotFromUserAuth(user, additionalData);
  } catch (error) {
    yield put(signInFailure(error));
  }
}

export function* signUpSaga({ payload: { email, password, displayName } }) {
  try {
    const { user } = yield auth.createUserWithEmailAndPassowrd(email, password);
    yield put(signUpSuccess({ user, additionalData: { displayName } }));
  } catch (error) {
    yield put(signUpFailure(error));
  }
}

export function* signOutSaga() {
  try {
    yield auth.signOut();
    yield put(signOutSuccess());
  } catch (error) {
    signOutFailure(error);
  }
}

export function* signInWithGoggleSaga() {
  try {
    const { user } = yield auth.signInWithPopup(googleProvider);
    yield getSnapshotFromUserAuth(user);
  } catch (error) {
    yield put(signInFailure(error));
  }
}

export function* signInWithEmailSaga({ payload: { email, password } }) {
  try {
    const { user } = yield auth.signInWithEmailAndPassword(email, password);
    yield getSnapshotFromUserAuth(user);
  } catch (error) {
    yield put(signInFailure(error));
  }
}

export function* isUserAuthenticated() {
  try {
    const userAuth = yield getCurrentUser();
    if (!userAuth) return;
    yield getSnapshotFromUserAuth(userAuth);
  } catch (error) {
    yield put(signInFailure(error));
  }
}
