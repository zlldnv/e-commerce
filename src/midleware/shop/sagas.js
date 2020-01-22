import { takeLatest, call, put } from "redux-saga/effects";
import { firestore, convertCollectionSnapshotToMap } from "firebaseConfig";
import { shopActionTypes } from "./types";
import { fetchCollectionsSuccess, fetchCollectionsFailure } from "./actions";

export function* fetchCollectionStart() {
  yield takeLatest(
    shopActionTypes.FETCH_COLLECTIONS_START,
    fetchCollectionAsyncSaga
  );
}

export function* fetchCollectionAsyncSaga() {
  try {
    const collectionRef = firestore.collection("collections");
    const snapshot = yield collectionRef.get();
    const collectionMap = yield call(convertCollectionSnapshotToMap, snapshot);
    yield put(fetchCollectionsSuccess(collectionMap));
  } catch (error) {
    yield put(fetchCollectionsFailure(error.message));
  }
}
