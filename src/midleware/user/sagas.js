import { takeLatest, put, call } from "redux-saga/effects";
import {
  googleProvider,
  auth,
  createUserProfileDocument
} from "firebaseConfig";

import { userActionTypes } from "./types";
import { googleSignInSuccess, googleSignInFailure } from "./actions";

export default function* userRootSaga() {
  yield takeLatest(userActionTypes.GOOGLE_SIGN_IN_START, signInWithGoggleSaga);
}

export function* signInWithGoggleSaga() {
  try {
    const { user } = yield auth.signInWithPopup(googleProvider);
    const userRef = yield call(createUserProfileDocument, user);
    const snapshot = yield userRef.get();

    yield put(googleSignInSuccess({ id: snapshot.id, ...snapshot.data() }));
  } catch (error) {
    yield put(googleSignInFailure(error));
  }
}
